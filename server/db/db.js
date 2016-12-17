// utils
const fs = require("fs");
const path = require("path");
const config = require('./config.js');

// sequelize libs
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

const db = {};
const models_path = path.join(__dirname, 'models');

var model;

// import all models
fs.readdirSync(models_path)
  .forEach(function(file) {
    model = sequelize.import(path.join(models_path, file));
    db[model.name] = model;
  });

// associations between different tables/models
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;