# Névnapok.js

A Node.js/JavaScript wrapper for APIs supplying Hungarian namedays, specifically https://api.nevnapok.eu.

(**English** | [Magyar](https://github.com/jozsefsallai/nevnapok.js/blob/master/README.hu.md))

## Usage

**1. Install:**

```
npm i nevnapok
```

**or**

```
yarn add nevnapok
```

**or**

```html
<script src="https://cdn.jsdelivr.net/npm/nevnapok@1.0/dist/nevnapok.min.js"></script>
```

**2. Instantiate the client:**

```js
// CommonJS
const { Client } = require('nevnapok');
const nevnapok = new Client();
```

**or:**

```js
// ES6 imports
import { Client } from 'nevnapok';
const nevnapok = new Client();
```

**or (in the browser):**

```js
const nevnapok = new Nevnapok.Client();
```

**3. Access the methods:**

Getting namedays on the current day:

```js
nevnapok.today()
  .then(console.log)
  .catch(console.error);
```

Getting namedays on a specific date:

```js
const month = 4;
const day = 20;
nevnapok.on(month, day)
  .then(console.log)
  .catch(console.error);
```

Getting namedays of a specific name:

```js
nevnapok.of('József')
  .then(console.log)
  .catch(console.error);
```

### Additional Configuration

By default, the library will send the requests to https://api.nevnapok.eu. You can specify a custom API URL, if you have a different API that behaves just like the default one:

```js
const nevnapok = new Client({
  apiUrl: 'https://api.myapi.com'
});
```

## Contribution

**Clone the repo:**

```sh
git clone git@github.com:jozsefsallai/nevnapok.js
```

**Install the dependencies:**

```
npm i
```

**Start the TypeScript compiler in watch mode:**

```
npm run watch
```

## License

MIT.
