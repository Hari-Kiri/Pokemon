Pokemon web application using Pokeapi as source data. It has catch and release function. You can catch pokemon in pokemon detail page and release it in My Pokemon page.
The catch function has automatic nickname creation, it will create pokemon nickname using fibonacci logic and when You catch it it will be randoming with probability 50:50.
The release function has randoming using prime number generation in backend, so if the backend generate prime number the pokemon will be released but when backend not generating prime number the pokemon won't release.
This web application write in Reactjs for frontend and Go for the backend.

Installation:
- Install Go first (https://go.dev/doc/install).
- Clone this repo in your root folder or your Go work environment.
- On terminal cd to this Pokemon folder and run command "go build . && ./app".
- Now open localhost on browser.

Notes:
The default port for this application is 80, but You can change it in "settings.json" file.
