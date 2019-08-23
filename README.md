# Spectre.js

Spectre.js - JavaScript components logic for Spectre.css framework

This package contains several components ready-to-use:
    
- Chips
- Tabs
- Toast
- Auto-complete

See [docs](https://manchenkoff.github.io/spectre.js/) for the details

### Installation

You have to run following command to add a dependency to your project

```
npm i spectre.css-js
```

### Usage

After package installation you may use Spectre.js by two methods:

- Include components with automatic registration (`dist/spectre.bundle.js`)
- Import classes and register only necessary for your project (`dist/spectre.js` or `src/spectre.js`)

### Tasks

1. Build sources - ```npm run build```
2. Start file watcher for recompiling - ```npm run watch```
3. Start webpack dev server - ```npm run start```
4. Build sources for production (**with optimization**) - ```npm run production```
5. Clean '`dist`' folder - ```npm run clear```
