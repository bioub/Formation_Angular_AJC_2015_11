## Installation

* Installer Node.js
* `npm install -g json-server`

## Démarrage du serveur

    cd ServeurREST
    json-server --watch db.json

## Pour tester le serveur

Installer Postman (extension de Chrome)

Aller à l'URL `GET http://localhost:3000/contacts` pour récupérer en JSON la liste des contacts

Pour ajouter un nouveau contact :
`POST http://localhost:3000/contacts` avec en body de la requête le contact au format JSON dans l'onglet raw (avec le format JSON)

Afficher le détails d'un contact :
`GET http://localhost:3000/contacts/12` ou 12 est l'identifiant du contact

...

Pour le reste consulter la doc : https://github.com/typicode/json-server
