# 🎨 Frontend - Adopt Your Pokemon

Le Frontend de **Adopt Your Pokemon** est une application web interactive développée avec **React 19** et **Vite**. Elle offre une expérience utilisateur fluide grâce à **React Router v7** pour la navigation et l'utilisation intensive des "loaders" pour sécuriser les routes et pré-charger les données.

## ✨ Fonctionnalités Principales

*   **Catalogue de Pokémon Filtrable** : Une vitrine interactive permettant aux utilisateurs de rechercher des Pokémon par nom, et de filtrer précisément par types multiples, par poids, par taille et par prix (avec options minimum, maximum, ou égal).
*   **Tableau de Bord "Mon Ranch"** : Un espace personnel où les utilisateurs peuvent consulter leurs Pokémon adoptés, renommer leurs créatures, surveiller leur progression via des barres de niveau, et déclencher des interactions (Donner une baie, Jouer, Caresser).
*   **Salle de Quiz Interactive** : Interface permettant de répondre aux questions générées par le backend. Les utilisateurs gagnent des PokéCredits en temps réel avec des retours visuels immédiats sur les bonnes et mauvaises réponses.
*   **Portail d'Administration** : Tableau de bord exclusif aux gestionnaires (Niveau 2+) pour évaluer (approuver/refuser) les demandes d'adoption entrantes, consulter les formulaires des clients, et créer manuellement de nouveaux Pokémon via URL ou téléversement d'image.
*   **Routage Sécurisé** : L'accès aux pages sensibles (profil, quiz, administration) est protégé par des "loaders" React Router qui interceptent la navigation, vérifient l'authentification via l'API, et redirigent proprement vers la page de connexion tout en mémorisant l'URL d'origine.

## 💻 Technologies Utilisées

*   **React (v19)** : Bibliothèque JavaScript pour la création d'interfaces utilisateur performantes.
*   **Vite** : Outil de construction (bundler) ultra-rapide optimisé pour le développement moderne.
*   **React Router (v7)** : Routage côté client avec gestion avancée des `loaders` et des `actions`.
*   **CSS Natif** : Feuilles de style modulaires pour des composants spécifiques sans dépendance externe.

## 🚀 Installation et Lancement

### Prérequis
*   Node.js (v18+ recommandé)
*   NPM
*   L'API Backend doit être en cours d'exécution sur le port 3000.

### Commandes

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

L'application sera accessible localement, généralement sur `http://localhost:5173`.

## 📂 Structure du Code
*   `src/components` : Composants UI réutilisables (généraux, catalogue, formulaires).
*   `src/pages` : Vues principales de l'application (Accueil, Profil, Catalogue, Admin).
*   `src/loaders` : Fonctions de pré-chargement des données et vérification d'authentification avant le rendu des routes.
*   `src/actions` : Fonctions de mutation de données liées aux formulaires React Router (login, signup, modification de mot de passe).
*   `src/services` : Configuration des requêtes HTTP (fetch) vers l'API Backend.