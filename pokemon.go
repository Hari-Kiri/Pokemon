package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/Hari-Kiri/goalApplicationSettingsLoader"
	"github.com/Hari-Kiri/goalJson"
	"github.com/Hari-Kiri/goalMakeHandler"
	"github.com/Hari-Kiri/goalRenderTemplate"
)

// HTML parser
var htmlTemplates = template.Must(template.ParseFiles("./ui/build/index.html"))

// Function constructor
func main() {
	// Load application settings parameter
	log.Println("[info] Starting webserver!")
	loadApplicationSettings, error := goalApplicationSettingsLoader.LoadSettings()
	// If load application settings parameter return error handle it
	if error != nil {
		log.Fatal("[error main()] Error opening application settings file: " + error.Error())
		return
	}
	// Handle web application user interface components request
	http.Handle("/ui/", http.StripPrefix("/ui/", http.FileServer(http.Dir("./ui"))))
	// Handle web root request
	http.HandleFunc("/", goalMakeHandler.HandleRequest(rootHandler, "/"))
	// Handle test page (its just for testing webserver online or not) request
	http.HandleFunc("/test", goalMakeHandler.HandleRequest(testHandler, "/test"))
	// Handle pokemon page request
	http.HandleFunc("/pokemon", goalMakeHandler.HandleRequest(pokemonHandler, "/pokemon"))
	// Handle catching request
	http.HandleFunc("/pokemon/catch", goalMakeHandler.HandleRequest(catchHandler, "/pokemon/catch"))
	// Handle catching request
	http.HandleFunc("/pokemon/getnickname", goalMakeHandler.HandleRequest(getNickNameHandler, "/pokemon/getnickname"))
	// Handle prime request
	http.HandleFunc("/pokemon/release", goalMakeHandler.HandleRequest(releaseHandler, "/pokemon/release"))
	// Run HTTP server
	log.Println("[info] Webserver started and serving "+loadApplicationSettings.Settings.Name+" on port",
		loadApplicationSettings.Settings.Port)
	log.Fatal(http.ListenAndServe(fmt.Sprint(":", loadApplicationSettings.Settings.Port), nil))
}

// Web root handler
func rootHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Redirect to home page
	http.Redirect(responseWriter, request, "/pokemon", http.StatusFound)
	log.Println("[info] Webroot redirect to url path [ /pokemon ], requested from", request.RemoteAddr)
}

// Test page handler
func testHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Http ok response
	okResponse, _ := goalJson.JsonEncode(map[string]interface{}{
		"response": true,
		"code":     200,
		"message":  "Go net/http webserver online"},
		false)
	responseWriter.WriteHeader(http.StatusOK)
	responseWriter.Header().Set("Content-Type", "application/json")
	responseWriter.Write([]byte(okResponse))
	log.Println("[info] Serving test page [", request.URL.Path, "]")
}

// Pokemon page handler
func pokemonHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Load application settings data
	appSettings, error := goalApplicationSettingsLoader.LoadSettings()
	// If load application settings data return error handle it
	if error != nil {
		// Http error response
		errorResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     500,
			"message":  "page failed to serve"},
			false)
		// Give 500 response code
		http.Error(responseWriter, errorResponse, http.StatusInternalServerError)
		log.Println("[error adminHandler()] Error opening application settings file: " + error.Error())
		return
	}
	// Open home page
	goalRenderTemplate.Process(htmlTemplates, responseWriter, "index", appSettings, request)
}

// Catch page handler
func catchHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Generate a random intn value in range between 0 & 1 based on the current time
	rand.Seed(time.Now().UnixNano())
	randomIntn := rand.Intn(2)
	// 0 false (frontend failed)
	if randomIntn != 1 {
		catchResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     200,
			"message":  "result of catching pokemon"},
			false)
		responseWriter.WriteHeader(http.StatusOK)
		responseWriter.Header().Set("Content-Type", "application/json")
		responseWriter.Write([]byte(catchResponse))
		log.Println("[info] Serving catch pokemon [", request.URL.Path, "] and result is failed. Random intn:", randomIntn)
		return
	}
	// 1 true (frontend success)
	catchResponse, _ := goalJson.JsonEncode(map[string]interface{}{
		"response": true,
		"code":     200,
		"message":  "result of catching pokemon"},
		false)
	responseWriter.WriteHeader(http.StatusOK)
	responseWriter.Header().Set("Content-Type", "application/json")
	responseWriter.Write([]byte(catchResponse))
	log.Println("[info] Serving catch pokemon [", request.URL.Path, "] and result is success. Random intn:", randomIntn)
}

// Get nickname and processing by fibonacci logic
func getNickNameHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Read http request body
	requestBody, errorRequestBody := ioutil.ReadAll(request.Body)
	if errorRequestBody != nil {
		// Http error response
		errorResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     500,
			"message":  "cannot read request body"},
			false)
		http.Error(responseWriter, errorResponse, http.StatusInternalServerError)
		log.Println("[error loginHandler()] Error reading http request body: " + errorRequestBody.Error())
		return
	}
	// Convert requestBody to string
	requestBodyString := string(requestBody)
	// Http request body empty
	if requestBodyString == "" {
		// Http error response
		errorResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     406,
			"message":  "request body empty"},
			false)
		http.Error(responseWriter, errorResponse, http.StatusNotAcceptable)
		log.Println("[error loginHandler()] Http request body empty")
		return
	}
	// Decode json request body
	requestBodyDecoded, _ := goalJson.JsonDecode(requestBodyString)
	// No previous nickname then give 0 on last character of current nickname as new nickname
	if requestBodyDecoded["previousNickname"] == nil {
		// 1 true (frontend success)
		newNicknameResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": true,
			"code":     200,
			"nickname": fmt.Sprintf("%v", requestBodyDecoded["currentNickname"]) + "-" + "0"},
			false)
		responseWriter.WriteHeader(http.StatusOK)
		responseWriter.Header().Set("Content-Type", "application/json")
		responseWriter.Write([]byte(newNicknameResponse))
		log.Println("[info] Give new nickname to pokemon [",
			fmt.Sprintf("%v", requestBodyDecoded["currentNickname"])+"-"+"0", "]")
		return
	}
	previousContainStripe := strings.Contains(fmt.Sprintf("%v", requestBodyDecoded["previousNickname"]), "-")
	// Previous nickname is first nickname assignment then give 1 on last character of previous nickname as new nickname
	if !previousContainStripe {
		newNicknameResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": true,
			"code":     200,
			"nickname": fmt.Sprintf("%v", requestBodyDecoded["previousNickname"]) + "-" + "1"},
			false)
		responseWriter.WriteHeader(http.StatusOK)
		responseWriter.Header().Set("Content-Type", "application/json")
		responseWriter.Write([]byte(newNicknameResponse))
		log.Println("[info] Give new nickname to pokemon [",
			fmt.Sprintf("%v", requestBodyDecoded["previousNickname"])+"-"+"1", "]")
		return
	}
	// Get integer after stripe in previousNickname
	previousContainNumber, errorParseIntPrevious :=
		strconv.Atoi(strings.Split(fmt.Sprintf("%v", requestBodyDecoded["previousNickname"]), "-")[1])
	if errorParseIntPrevious != nil {
		// Http error response
		errorResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     500,
			"message":  "processing previousNickname failed"},
			false)
		http.Error(responseWriter, errorResponse, http.StatusInternalServerError)
		log.Println("[error getNickNameHandler()] Error get integer in previousNickname: ", errorRequestBody.Error())
		return
	}
	// Get integer after stripe in currentNickname
	currentContainNumber, errorParseIntCurrent :=
		strconv.Atoi(strings.Split(fmt.Sprintf("%v", requestBodyDecoded["currentNickname"]), "-")[1])
	if errorParseIntCurrent != nil {
		// Http error response
		errorResponse, _ := goalJson.JsonEncode(map[string]interface{}{
			"response": false,
			"code":     500,
			"message":  "processing currentNickname failed"},
			false)
		http.Error(responseWriter, errorResponse, http.StatusInternalServerError)
		log.Println("[error getNickNameHandler()] Error get integer in currentNickname: ", errorRequestBody.Error())
		return
	}
	fibonacciValue := fmt.Sprintf("%v", currentContainNumber+previousContainNumber)
	newNicknameResponse, _ := goalJson.JsonEncode(map[string]interface{}{
		"response": true,
		"code":     200,
		"nickname": strings.Split(fmt.Sprintf("%v", requestBodyDecoded["currentNickname"]), "-")[0] + "-" + fibonacciValue},
		false)
	responseWriter.WriteHeader(http.StatusOK)
	responseWriter.Header().Set("Content-Type", "application/json")
	responseWriter.Write([]byte(newNicknameResponse))
	log.Println("[info] Give new nickname to pokemon [",
		strings.Split(fmt.Sprintf("%v", requestBodyDecoded["currentNickname"]), "-")[0]+"-"+fibonacciValue,
		"]")
}

// Realese request handler
func releaseHandler(responseWriter http.ResponseWriter, request *http.Request) {
	// Get primes list
	primes := getListOfPrimeNumber(20)
	// Get random number in range 1 - 20
	randomNumbers := getRandomNumber(1, 20)
	// Match primes and random numbers. If primes and random number match return true and pokemon can be released
	var resultCheckRandomNumber bool
	for _, checkRandomNumber := range primes {
		if checkRandomNumber == randomNumbers {
			resultCheckRandomNumber = true
			break
		}
		resultCheckRandomNumber = false
	}
	log.Println("[info] check random number", resultCheckRandomNumber)
	// Http ok response
	okResponse, _ := goalJson.JsonEncode(map[string]interface{}{
		"response": resultCheckRandomNumber,
		"code":     200,
		"message":  "random number generated " + fmt.Sprintf("%v", randomNumbers)},
		false)
	responseWriter.WriteHeader(http.StatusOK)
	responseWriter.Header().Set("Content-Type", "application/json")
	responseWriter.Write([]byte(okResponse))
	log.Println("[info] Serving release [", request.URL.Path, "]")
}

func getRandomNumber(min int, max int) (number int) {
	return rand.Intn(max-min) + min
}

// Get prime numbers less than N using sieve of Eratosthenes
func getListOfPrimeNumber(n int) (primes []int) {
	boolean := make([]bool, n)
	for i := 2; i < n; i++ {
		if boolean[i] {
			continue
		}
		primes = append(primes, i)
		for iLagi := i * i; iLagi < n; iLagi += i {
			boolean[iLagi] = true
		}
	}
	return
}
