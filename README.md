# Podcasts technical test

React Single Page Application that displays a Podcast collection and Podcast details, so you can listen any of the episodes available.

The project follows special guidelines for a technical test.

## Project Setup and technologies involved

I decided to try **Parcel** this time, instead of create react app or a webpack based setup.

I added typescript, tailwindcss and finally Jest and Testing-Library which made me also install babel and presets.

For browser compatibility I used `localforage`, which uses IndexedDB in chrome with a simple interface similar to localstorage.

Because it's only a test, I didn't create new tailwind class directives by using @apply and BEM CSS convention (that always helps).

## Commands available

- `npm run start`: It will run your app in the default parcel port (1234).

- `npm run test`: Runs jest and React Testing Library to make use of jest-dom.

- `npm run build`: Transpiles everything for production. Check the `/dist/` folder.

## Try your build

You can execute `http-server` on the dist folder. Install: `npm i -g http-server`.

## Development Notes

Development notes under page `/devnotes`. You can see all routes (React Router v6.10) in the `src/main.tsx` file.
