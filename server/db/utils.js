const models = require('./db.js');

module.exports = {
	findKey: function(key, callback) {
		return models.numbers.find({
			attributes: ['key', 'value'],
			where: {'key': key}
		});
	},
	createKey: function(key, value, callback) {
		return models.numbers.create({
			'key': key,
			'value': value
		});
	}
}

