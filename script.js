// Fungsi utama untuk show menu
function showMenu(menu){
    // Hide semua sections
    document.querySelectorAll('.section').forEach(sec=>{
        sec.classList.remove('active');
    });
    
    // Load content jika belum ada
    if (!document.getElementById(menu)) {
        loadSection(menu);
    }
    
    // Show section yang dipilih
    const targetSection = document.getElementById(menu);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Load section content secara dinamis
function loadSection(sectionName) {
    const container = document.getElementById(sectionName + '-container');
    fetch(sectionName + '.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = `<div id="${sectionName}" class="section">${html}</div>`;
            // Init section specific scripts
            initSection(sectionName);
        })
        .catch(error => {
            console.error('Error loading section:', error);
            container.innerHTML = `<div id="${sectionName}" class="section"><p>Error loading content</p></div>`;
        });
}

// Initialize section specific functionality
function initSection(sectionName) {
    switch(sectionName) {
        case 'kalkulator':
            // Calculator sudah ready karena script inline di HTML
            break;
        case 'login-register':
            // Login/register toggle sudah ready
            break;
    }
}

// Login function
function login(event) {
    event.preventDefault();
    alert('Login Berhasil! Selamat Datang di Jabu Literasi.');
    showMenu('dashboard');
}

// Register function
function Daftar(event) {
    event.preventDefault();
    alert('Pendaftaran Berhasil!');
    showMenu('dashboard');
}

// Toggle login/register form
function toggleForm(type) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleText = document.getElementById('toggle-text');

    if (type === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        toggleText.innerHTML = 'Sudah punya akun? <a onclick="toggleForm(\'login\')">Login disini</a>';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        toggleText.innerHTML = 'Belum punya akun? <a onclick="toggleForm(\'register\')">Daftar disini</a>';
    }
}

// Load dashboard by default
document.addEventListener('DOMContentLoaded', function() {
    showMenu('dashboard');
});
