const express = require('express');
const app = express();
 
// use middleware
require('./config/middleware.js')(app, express);

// use routes
require('./config/routes.js')(app);

const port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log('Full Stack App for iDatalabs listening on port 3333!')
});

module.exports = app;

