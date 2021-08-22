'use strict';

var response = require('./rest');
var connection = require('./connect');

exports.index = function(req, result){
    response.ok('Aplikasi rest api sedang berjalan')
};