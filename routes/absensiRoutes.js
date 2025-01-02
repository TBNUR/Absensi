const express = require('express');
const Absensi = require('../models/Absensi');
const router = express.Router();

// Endpoint untuk mencatat absensi
router.post('/', async (req, res) => {
    const { userId, waktuAbsensi, status, lokasi, metode } = req.body;
    try {
        const absensi = await Absensi.create({ userId, waktuAbsensi, status, lokasi, metode });
        res.status(201).json(absensi);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mencatat absensi' });
    }
});

// Endpoint untuk mendapatkan riwayat absensi
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const absensi = await Absensi.findAll({ where: { userId } });
        res.status(200).json(absensi);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mendapatkan riwayat' });
    }
});

module.exports = router;
