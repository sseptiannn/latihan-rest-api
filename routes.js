'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaMahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilMahasiswaByID);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);
}