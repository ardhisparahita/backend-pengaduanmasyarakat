'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tanggapan: {
        type: Sequelize.INTEGER
      },
      id_pengaduan: {
        type: Sequelize.INTEGER,
        references: {
          model: "complaints",
          key: "id"
        }
      },
      tgl_pengaduan: {
        type: Sequelize.DATE
      },
      tanggapan: {
        type: Sequelize.TEXT
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        references: {
          model: "officers",
          key: "id"
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('responses');
  }
};