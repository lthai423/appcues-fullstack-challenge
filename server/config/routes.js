// Routes received by the server
const request = require('request');
const db = require('../db/utils.js');
const fs = require('fs');
var multiparty = require('multiparty');
var util = require('util');

const db_utils = require('../db/utils.js');

module.exports = function(app) {
	app.route('/increment')
		.post(function (req, res) {
			db_utils.findKey(req.body.key)
				.then(function(entry) {
					if (entry) 
						entry.updateAttributes({value: entry.dataValues.value + parseInt(req.body.value)})
					else
						db_utils.createKey(req.body.key, req.body.value);
				
					res.send(201);
				});
		});

	app.all('*', function (req, res) {
		res.send(404);
	});
};

