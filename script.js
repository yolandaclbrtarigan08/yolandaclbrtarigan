// Fungsi navigasi
function showMenu(menu){
    document.querySelectorAll('.section').forEach(sec=>{
        sec.classList.remove('active');
    });
    document.getElementById(menu).classList.add('active');
}

// Fungsi login
function login(event) {
    event.preventDefault();
    alert('Login Berhasil! Selamat Datang di Jabu Literasi.');
    showMenu('dashboard');
}

// Fungsi daftar
function Daftar(event) {
    event.preventDefault();
    alert('Pendaftaran Berhasil!');
    showMenu('dashboard');
}

// Fungsi toggle form
function toggleForm(type) {
    // ... kode toggle form
}

// Fungsi kalkulator
function hitung() {
    // ... kode kalkulator
}
