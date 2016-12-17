const path = require('path'); 

const db_config = {
	database: 'numbers.db',
	username: null,
	password: null,
	options: {
		dialect: 'sqlite',
		storage: path.join(__dirname, 'numbers.db')
	}
};

module.exports = db_config;