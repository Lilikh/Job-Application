# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

npm i json-server , for impletera
set up crud for backend to install functionality for fetching data can be used server
and add in package.json: "server": "json-server --watch src/jobs.json --port 5000"
npm i axios for fetch data
npm run server get the link for fetch


Instead of define Local host when you do fetching intesd of the yrl link set something on vite.config.js and use api
  *** server:{
    port:3000,
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  } ***
-- for add notification when add the job and show us the notification which the job is added should be install :
*** sudo npm i vue-toastification@next ***