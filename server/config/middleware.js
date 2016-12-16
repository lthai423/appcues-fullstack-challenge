const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app, express) {
  // logger
  // app.use(morgan('dev'));
  
  // parse application/x-www-form-urlencoded 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}))
};