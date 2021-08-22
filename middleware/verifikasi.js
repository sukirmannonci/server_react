const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi() {
    return function (req, result, next) {
        var role = req.body.roles;
        // Cek authorization header
        var tokenWithBearer = req.headers.authorization;
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];

            //Verifikasi
            jwt.verify(token, config.secret, function(error, decoded){
                if(error){
                    return result.status(401).send({auth:false, message: 'Token tidak terdaftar!'});
                }else{
                    if(role == 2){
                        req.auth = decoded;
                        next();
                    }else{
                        return result.status(401).send({auth:false, message: 'Gagal authorisasi role anda!'});
                    }
                }
            });
        }else{
            return result.status(401).send({auth:false, message: 'Token tidak tersedia!'});
        }
    }
}

module.exports = verifikasi;