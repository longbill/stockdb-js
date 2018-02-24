const { Client } = require('hprose');
const btoa = require('btoa');

module.export = {
	New: (uri, auth) => {
		const token = btoa(auth);
		const stockdb = Client.create(uri, [
			'PutOHLC',
			'PutOHLCs',
			'PutOrder',
			'PutOrders',
			'GetStats',
			'GetMarkets',
			'GetSymbols',
			'GetTimeRange',
			'GetPeriodRange',
			'GetOHLCs',
			'GetDepth',
		]);
		stockdb.setHeader('Authorization', `Basic ${token}`);
		return stockdb;
	},
	Second: 1,
	Minute: 60,
	Hour: 3600,
	Day: 86400,
	Week: 604800,
	Month: 2592000,
	Quarter: 7776000,
	Year: 31536000,
};
