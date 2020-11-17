'use strict';

exports.ok = function(values, res) {
    var data = {
        // 'status': 200,
        // 'active': 'Yes',
        'values': values
    };

    res.json(data);
    res.end();
}