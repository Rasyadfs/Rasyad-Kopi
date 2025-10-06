//toggle class active
const navbarnav = document.querySelector ('.navbar-nav');
//ketikanhumberger menu di klik
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarnav.classList.toggle('active');
}

//klik diluar unntuk bisa keluar 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }
});