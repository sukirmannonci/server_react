'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaDataMahasiswa);    

    app.route('/tampil/:id') 
        .get(jsonku.tampilBerdasarkanId);
        
    app.route('/tambah')
        .post(jsonku.tambahDataMahasiswa);
        
    app.route('/ubah')
        .put(jsonku.ubahDataMahasiswa);
        
    app.route('/delete')
        .delete(jsonku.deleteDataMahasiwa);
        
    app.route('/tampilmatakuliah')
        .get(jsonku.tampilGroupMataKuliah);    
}