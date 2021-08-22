var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

// Daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// Alamat yang perlu authorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia);

module.exports = router;