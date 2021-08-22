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
            connection.log(error)
        }else{
            response.ok(rows, result)
        }
    });
};