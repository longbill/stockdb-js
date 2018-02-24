node.js library for StockDB

# Example

```javascript
const StockDB = require('../');

const client = StockDB.New('http://localhost:18765', 'username:password');

const data = {
	Time: 1480737600,
	Open: 109.17,
	High: 110.09,
	Low: 108.85,
	Close: 109.90,
	Volume: 26528000
};
const opt = {
	Market: 'test',
	Symbol: 'nasdq',
	Period: StockDB.Day
};

client.PutOHLC(data, opt).then(d => {
	console.log(d);
}).catch(err => {
	console.log(err);
});
```

# Instllation

## NPM

```shell
$ npm install --save stockdb-node
```

### ES6

```js
import StockDB from 'stockdb';

const client = StockDB.New('http://localhost:8765', 'username:password');
```

# Reference

[Official Repos](https://github.com/miaolz123/stockdb)

[Document](http://docs.stockdb.org/)
