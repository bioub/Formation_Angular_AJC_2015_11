## Pré-requis

* Node.js : http://nodejs.org/
* Git : http://git-scm.com/ (penser à ajouter git au PATH)
* Bower : `npm install -g bower`
* http-server : `npm install -g http-server`

## Installation

La première fois :
* `bower init` pour créer le fichier bower.json
* `bower install angular --save` pour installer angular dans bower_components ET enregistrer angular comme dépendance
dans le fichier bower.json

Les fois suivantes (quand le fichier bower.json existe) :
* `bower install`

## Lancement de l'application

* `cd DANS_LE_DOSSIER_QUI_CONTIENT_INDEX_HTML`
* `http-server`
* Aller dans Chrome à l'URL http://localhost:8080/
