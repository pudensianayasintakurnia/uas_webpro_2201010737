function hitungUmur() {
    var tanggalLahir = document.getElementById("tanggal-lahir").value;
    var tanggalLahirObj = new Date(tanggalLahir);
    var sekarang = new Date();
    var selisih = sekarang - tanggalLahirObj;
    var umur = Math.floor(selisih / (1000 * 60 * 60 * 24 * 365.25));
    
    document.getElementById("umur").innerHTML = "Umur Anda adalah: " + umur + " tahun.";
  }
  