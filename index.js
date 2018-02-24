const { Client } = require('hprose');
const btoa = require('btoa');

module.exports = {
	New: (uri, auth) => {
		const methods = [
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
		];
		const token = btoa(auth);
		const stockdb = Client.create(uri, methods);
		stockdb.setHeader('Authorization', `Basic ${token}`);

		const wrapper = {};
		methods.map(method => {
			wrapper[method] = (...args) => {
				return new Promise((done, reject) => {
					args.push(resp => {
						if (resp && resp.Success === true) {
							done(resp.Data);
						} else {
							reject(resp && resp.Message ? resp.Message : JSON.stringify(resp));
						}
					});
					args.push((func, error) => {
						reject(error);
					});
					stockdb[method](...args);
				});
			}
		});
		return wrapper;
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
