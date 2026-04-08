function showMenu(menu){
    document.querySelectorAll('.section').forEach(sec=>{
        sec.classList.remove('active');
    });
    document.getElementById(menu).classList.add('active');
}
