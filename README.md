# Receptsida Projektarbete i fördjupning JavaScript / TypeScript med Scss

Detta är en webbaserad receptsida som hämtar recept från **TheMealDB API**. Användare kan söka efter recept, visa detaljer och spara sina favoriter.

## Funktioner

- **Sök efter recept**: Använd sökfältet för att hitta recept baserat på namn.
- **Visa receptdetaljer**: Klicka på ett recept för att öppna en modal med ingredienser och instruktioner.
- **Hantera favoriter**: Lägg till eller ta bort recept från din favoritlista.
- **Filtrering via kategorier**: Navigera mellan olika mat-kategorier.

## Teknologier

- **TypeScript** – För typad JavaScript-utveckling.
- **SCSS** – För stil och layout.
- **Vite** – För snabb utvecklingsmiljö.
- **Fetch API** – För att hämta data från **TheMealDB API**.

## Installation och användning

### 1. Klona projektet

 git clone https://github.com/Henrik-Cederlof/RecipiesAPI-Site.git // Jag vet att det är felstavat. Kom på't för sent.
 
 cd ditt-repo

### 2. Installera beroenden
 npm install

### 3. Starta utvecklingsservern
 npm run dev

### 4. Bygg för produktion
 npm run build

## API-information
Denna applikation använder **TheMealDB API** för att hämta receptdata. Du kan läsa mer om API:et här:
[TheMealDB API](https://www.themealdb.com/api.php)

## Folderstruktur

/project-root
│── src/
│   ├── components/
│   │   ├── searchBar.ts
│   │   ├── recipeModal.ts
│   ├── funtions/
│   │   ├── favoritesHandling.ts
│   │   ├── getCategories.ts
│   │   ├── getFlag.ts
│   │   ├── getMeal.ts
│   │   ├── getMealImage.ts
│   │   ├── getMealIngredients.ts
│   │   ├── getRecipies.ts
│   ├── images/
│   │   ├── bottom_bg.png
│   │   ├── food.png // Not in use
│   │   ├── woodenBG.png
│   ├── pages/
│   │   ├── getRecipies.ts
│   ├── misc/
│   │   ├── recipeMenu.ts
│   ├── styles/
│   │   ├── recipes.scss
│   ├── index.ts
│── public/
│── package.json
│── vite.config.ts
│── README.md

## To-Do
- [ ] Implementera fler filteralternativ.
- [ ] Lägg till en bättre favoritmarkering.
- [ ] Förbättra UI/UX med mer animeringar.

## Licens
MIT




