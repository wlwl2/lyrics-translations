# Lyrics Translations

Website with lyrics translations and a formatting tool.

Only Chinese translations work right now.

Data is stored locally in the browser (using both localStorage and localForage-
indexedDB) and in the user's file system (it even works on smart phones- I 
  tried it once on my iPhone 6 and it worked!).

## Getting Started

Open `index.html` in any browser.

## Development:

Brave browser prevents localStorage and localForage from working normally by
default. It should be fine once this app gets to a production stage.

### Styles

Run: 

`grunt`

then start editing src/scss.

### Scripts

Run:

`npm run webpack`
