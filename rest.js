'use strict';

exports.ok = function(values, result){
    var data = {
        'status': 200,
        'values': values
    };

     result.json(data);
     result.end();
}

// Query join
// SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa

// Response untuk nested mata kuliah
exports.oknested = function (values, result) {
    // Lakukan akumulasi 
    const hasil = values.reduce((akumulasikan, item) => {
        // Tentukan key group
        if (akumulasikan[item.nama]) {
            // Buatlah variabel group nama mahasiswa
            const group = akumulasikan[item.nama];            
            // Cek jika isi array adalah mata kuliah
            if (Array.isArray(group.matakuliah)) {
                // Tambahkan value ke dalam group mata kuliah
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else{
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});
    
    var data = {
        'status': 200,
        'values': hasil
    };

    result.json(data);
    result.end();
};