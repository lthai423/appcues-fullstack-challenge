// Routes received by the server
const request = require('request');
const db = require('../db/utils.js');
const fs = require('fs');

module.exports = function(app) {
	app.route('/increment')
		.get(function (req, res) {
		  console.log(req.query, req.params)
		  res.send('Good');
		})
		.post(function (req, res) {
			console.log(req.body)
			res.send('received')
		});


	app.all('*', function (req, res) {
		res.send(404);
	});
};

