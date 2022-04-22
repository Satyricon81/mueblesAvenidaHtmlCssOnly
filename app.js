ScrollReveal().reveal('.h1', {distance: '500px', origin: 'left', duration: 2000, interval: 500});
ScrollReveal().reveal('.h2', {distance: '500px', origin: 'right', duration: 2000, interval: 500});

ScrollReveal().reveal('.imgSeccion1', {delay : 150, easing: 'ease-in', origin: 'right'});

ScrollReveal().reveal('.imgSeccion3', {delay : 150, easing: 'ease-in', origin: 'right'});
ScrollReveal().reveal('.img2Seccion3', {delay : 150, easing: 'ease-in', origin: 'right'});


let navscroll = document.querySelector('#menuScroll')
document.addEventListener('scroll', () => {
    //Operador ternario
    (window.scrollY > 150) ? navscroll.classList.add('scrollNav'): navscroll.classList.remove('scrollNav')
 }) 

let menu_bar = document.querySelector('.menu_bar');
let nav = document.querySelector('nav');

menu_bar.addEventListener('click', () => {
     nav.classList.toggle("show")
});




