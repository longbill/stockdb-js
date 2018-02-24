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