"use strict";

module.exports = function(sequelize, DataTypes) {
  var numbers = sequelize.define('numbers', {
    key: {type: DataTypes.STRING, unique: 'numbers_key_index', primaryKey: true},
    value: {type: DataTypes.INTEGER, defaultValue: 0}
  }, {
  	timestamps: false
  });

  return numbers;
};