Pokemon web application using Pokeapi as source data. It has catch and release function. You can catch pokemon in pokemon detail page and release it in My Pokemon page.
The catch function has automatic nickname creation, it will create pokemon nickname using fibonacci logic and when You catch it it will be randoming with probability 50:50.
The release function has randoming using prime number generation in backend, so if the backend generate prime number the pokemon will be released but when backend not generating prime number the pokemon won't release.
This web application write in Reactjs for frontend and Go for the backend.

Installation with source code:
- Install Go (https://go.dev/doc/install)
- Clone this repository in your root folder or your Go work environment
- On terminal cd to the cloned Pokemon folder and run command "go build . && ./pokemon"
- Now open localhost on browser

Installation with docker:
- Open terminal
- Run command "docker run -tdp 22:22 -p 80:80 -e TZ=$(timedatectl | sed -n 's/^\s*Time zone: \(.*\) (.*/\1/p') --name pokemon bakeno/pokemon:latest"

Notes:
- The default port for this application is 80, but You can change it in "settings.json" file.
- If You want to use docker and Your system won't let docker use port 80, You can assign another port then set port forwarding on port 80 forward to Your assigned port for docker pokemon container.
