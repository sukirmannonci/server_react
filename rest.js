'use strict';

exports.ok = function(values, result){
    var data = {
        'status': 200,
        'values': values
    };

     result.json(data);
     result.end();
}