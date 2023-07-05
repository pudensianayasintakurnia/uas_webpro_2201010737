CREATE DATABASE nama_database;

USE nama_database;

CREATE TABLE data_pengguna (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(50),
  tanggal_lahir DATE,
  umur INT
);
