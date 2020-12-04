"use strict";

var response = require("./res");
var connection = require("./koneksi");
const { connect } = require("./koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function(req, res) {
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilMahasiswaByID = function(req, res) {
    let id = req.params.id;
    connection.query(
        "SELECT * FROM mahasiswa WHERE id_mhs = ?", [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};

// Menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query(
        "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)", [nim, nama, jurusan],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res);
            }
        }
    );
};

// Mengubah data berdasarkan ID
exports.ubahMahasiswa = function(req, res) {
    var id = req.body.id_mhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query(
        "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mhs=?", [nim, nama, jurusan, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res);
            }
        }
    );
};

// Menghapus data berdasarkan ID
exports.hapusMahasiswa = function(req, res) {
    var id = req.body.id_mhs;
    connection.query('DELETE FROM mahasiswa WHERE id_mhs=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res);
            }
        }
    );
};