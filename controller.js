'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function(req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilMahasiswaByID = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};