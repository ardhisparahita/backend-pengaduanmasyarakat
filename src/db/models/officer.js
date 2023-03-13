'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class officer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      officer.hasOne(models.response, {
        foreignKey: "id"
      })
    }
  }
  officer.init({
    id_petugas: DataTypes.INTEGER,
    nama_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
    level: DataTypes.ENUM('admin', 'petugas')
  }, {
    sequelize,
    modelName: 'officer',
    underscored: true,
  });
  return officer;
};