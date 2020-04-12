# Névnapok.js

Egy Node.js/JavaScript könyvtár, amelynek segítségével magyar névnapokkal kapcsolatos API-kat lehet használni, pontosabban a https://api.nevnapok.eu-t.

([English](https://github.com/jozsefsallai/nevnapok.js/blob/master/README.md) | **Magyar**)

## Használat

**1. Telepítsd:**

```
npm i nevnapok
```

**vagy**

```
yarn add nevnapok
```

**vagy**

```html
<script src="https://cdn.jsdelivr.net/npm/nevnapok@1.0/dist/nevnapok.min.js"></script>
```

**2. Hozz létre egy klienst:**

```js
// CommonJS
const { Nevnapok } = require('nevnapok');
const nevnapok = new Nevnapok();
```

**vagy:**

```js
// ES6 imports
import { Nevnapok } from 'nevnapok';
const nevnapok = new Nevnapok();
```

**vagy (böngészőben):**

```js
const nevnapok = new Nevnapok.Client();
```

**3. Használd a metódusokat:**

A jelenlegi nap névnaposainak listája:

```js
nevnapok.today()
  .then(console.log)
  .catch(console.error);
```

Egy bizonyos dátum névnaposainak listája:

```js
const month = 4;
const day = 20;
nevnapok.on(month, day)
  .then(console.log)
  .catch(console.error);
```

Egy bizonyos név névnapjainak listája:

```js
nevnapok.of('József')
  .then(console.log)
  .catch(console.error);
```

### További konfigurációk

Alapértelmezett módon a könyvtár a https://api.nevnapok.eu címre küldi a lekéréseket. Megadhatsz egy egyéni API URL-t, ha van egy olyan API-d, amely az alapértelmezetthez hasonlóan működik:

```js
const nevnapok = new Nevnapok({
  apiUrl: 'https://api.myapi.com'
});
```

## Hozzájárulás

**Klónold a repo-t:**

```sh
git clone git@github.com:jozsefsallai/nevnapok.js
```

**Telepítsd a dependency-ket:**

```
npm i
```

**Indítsd el a TypeScript compiler-t watch módban:**

```
npm run watch
```

## Licensz

MIT.
