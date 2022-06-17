'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roms.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    download: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roms',
  });
  return Roms;
};