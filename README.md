# Podcasts technical test

React Single Page Application that displays a Podcast collection and Podcast details, so you can listen any of the episodes available.

The project follows special guidelines for a technical test.

## Commands available

- `npm run start`: It will run your app in the default parcel port (1234).

- `npm run test`: Runs jest and React Testing Library to make use of jest-dom.

- `npm run build`: Transpiles everything for production. Check the `/dist/` folder.

## Try your build

You can execute `http-server` on the dist folder. Install: `npm i -g http-server`.

## Tags

Three tags releases:

1. `v1.0.0` Functional project with basic layout
2. `v1.1.0` Functional visual app with hardcoded data
3. `v1.2.1-rc` Everything is functional with real api data

## Project Setup and technologies involved

### Build tool / Bundler

I decided to try **Parcel** this time, instead of create react app or a webpack based setup.

### Static Typing and libraries

I added typescript, tailwindcss and finally Jest and Testing-Library which made me also install babel and presets.

For browser compatibility I used `localforage` which uses IndexedDB in chrome, with a simple interface similar to localstorage.

_localForage includes a localStorage-backed fallback store for browsers with no IndexedDB or WebSQL support._

### About tailwind

Because it's only a test, I didn't create new tailwind class directives by using @apply and BEM CSS convention (that always helps).

## Development Notes

Development notes under page `/devnotes`. You can see all routes (React Router v6.10) in the `src/main.tsx` file.
