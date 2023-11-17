# ShapX API

## Description

Ce projet represente la partie API (Server) de l'application SHAPX qui vous permet de réaliser de forme géométrique telles que:

- Carré
- Rectangle
- Cercle
- Ellipse
- Losange
- Hexagone

## Technologies Utilisées

- Javascript: Langage de programmation
- Nodejs (Express): Framework Javascript permettant de réaliser des API avec le langage Javascript
- MySQL: Database Management System (DBMS) permettant de gérer les bases de données relationnelles.

## Comment lancer l'application Server ?

### 1. Définir la base de données

- Installer, bien configurer votre système de gestion de base de données MYSQL et le lancer.
- Créer une nouvelle base de données en utilisant le même nom que celui fourni dans le fichier [.env](./.env) à la racine du projet.
  Le nom en question c'est **shapxdb**, mais vous pouvez le changer si vous le voulez. Le programme se chargera de Définir
  la structure de base du schéma de la base de données tout seul en créant les tables qu'il faut pour son bon fonctionnement.
- Dans le cas où vous voulez vous même définir le schéma de la base, vous pouvez importer le fichier [db.sql](./db/db.sql) présent
  dans le dossier **db** dans votre SGBD MySQL.
- Vous devez, en fonction des configuration de votre SGBD, modifier les parametres de connexion à la base de données présent dans le fichier [.env](./.env) à la racine du projet.

### 2. Installer les outils nécessaires.

Vous avez besoin d'installer Node (un Runtime JS coté serveur) afin d'exécuter du code JS coté serveur.

- Sur Linux (Ubuntu): [Download Node on Linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)
- Sur Windows: [Download Node on Windows](https://nodejs.org/en/download)

L'installation de Node vient avec NPM (Node Package Manager), un outil permettant de gérer les paquets Javascript.

### 2. Installer les dépendances de l'application

- Ouvrir le projet dans le terminal ou la console à la racine du projet.
- Lancer la commande d'installation de packages:

```bash
  npm install
```

- Faudra patienter un moment, le temps de l'installation.

### 3. Lancer le serveur de l'application en local

- En étant dans le même terminal ou console, toujours à la racine, lancer la commande suivante: 


```bash
  npm run start
```

- C'est ok si vous avez un message présentant l'adresse URL du serveur