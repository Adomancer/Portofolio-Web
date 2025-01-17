window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.style.top = '0';
        header.style.opacity = '1';
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        header.style.top = '';
        header.style.opacity = '';
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


window.addEventListener('click', function (e) { 
    if (e.target !== hamburger && !navMenu.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark')
    }
}); 