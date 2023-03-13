'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class complaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      complaint.belongsTo(models.masyarakat, {
        foreignKey: "nik", 
        as: "masyarakats",
      }) 
      complaint.hasOne(models.response, {
        foreignKey: "id_pengaduan",
      })
    }
  }
  complaint.init({
    id_pengaduan: DataTypes.INTEGER,
    tgl_pengaduan: DataTypes.DATE,
    nik: DataTypes.INTEGER,
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    admin: DataTypes.ENUM('0', 'proses', 'selesai')
  }, {
    sequelize,
    modelName: 'complaint',
    underscored: true,
  });
  return complaint;
};