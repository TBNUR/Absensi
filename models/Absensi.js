const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Absensi = sequelize.define('Absensi', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    waktuAbsensi: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM('masuk', 'keluar'), allowNull: false },
    lokasi: { type: DataTypes.STRING },
    metode: { type: DataTypes.ENUM('online', 'rfid'), allowNull: false },
}, { timestamps: true });

module.exports = Absensi;
