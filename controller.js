'use strict';

var response = require('./rest');
var connection = require('./connect');

exports.index = function(req, result){
    response.ok('Aplikasi rest api sedang berjalan', result)
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaDataMahasiswa = function(req, result){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, result)
        }
    });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = function(req, result){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fields){
            if (error) {
                console.log(error)
            }else{
                response.ok(rows, result)
            }
        });
};

// Menambahkan data mahasiswa
exports.tambahDataMahasiswa = function(req, result){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa(nim, nama, jurusan) VALUES (?,?,?)',
        [nim, nama, jurusan],
        function(error, rows, fields){
            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil menambahkan data", result)
            }
        });
};

// Mengubah data berdasarkan id mahasiswa
exports.ubahDataMahasiswa = function (req, result) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil ubah data", result)
            }
        });
};

// Menghapus data berdasarkan id mahasiswa
exports.deleteDataMahasiwa = function (req, result) {
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fields){
            if (error) {
                console.log(error)
            }else{
                response.ok("Berhasil hapus data", result)
            }
        });
}