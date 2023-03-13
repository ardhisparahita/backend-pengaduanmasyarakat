'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      response.belongsTo(models.officer, {
        foreignKey: "id_petugas",
        as: "officers"
      })
      response.belongsTo(models.complaint, {
        foreignKey: "id_pengaduan",
        as: "complaints"
      })
    }
  }
  response.init({
    id_tanggapan: DataTypes.INTEGER,
    id_pengaduan: DataTypes.INTEGER,
    tgl_pengaduan: DataTypes.DATE,
    tanggapan: DataTypes.TEXT,
    id_petugas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'response',
    underscored: true,
  });
  return response;
};