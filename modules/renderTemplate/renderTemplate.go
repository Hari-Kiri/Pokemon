/*
 * HTML template renderer module.
 * Created: 01/04/2022
 * Write by:
 * - Hari Yulianto Pratama
 */

package renderTemplate

import (
	"goal/applicationSettingsLoader"
	"html/template"
	"log"
	"net/http"
)

// HTML renderer
func Process(htmlTemplates *template.Template, responseWriter http.ResponseWriter, template string, appSettings *applicationSettingsLoader.ApplicationSettings, request *http.Request) {
	// Open HTML page
	error := htmlTemplates.ExecuteTemplate(responseWriter, template+".html", appSettings)
	log.Println("[info] Serving " + template + " page, requested from " + request.RemoteAddr + " with request url path [" + request.URL.Path + "]")
	// Failed when opening HTML page
	if error != nil {
		// Give 500 response code
		http.Error(responseWriter, error.Error(), http.StatusInternalServerError)
	}
}
