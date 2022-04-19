ScrollReveal({ duration: 2000 });
ScrollReveal({ distance: '200px' });
ScrollReveal({ easing: 'cubic-bezier(0.5, 0, 0, 1)' });

ScrollReveal().reveal('.h1', { origin: 'left' });
ScrollReveal().reveal('.h1', { easing: 'ease-in' });
ScrollReveal().reveal('.h2', {delay : 100});
ScrollReveal().reveal('.h2', { easing: 'ease-in' });
ScrollReveal().reveal('.h2', { origin: 'top' });
ScrollReveal().reveal('.btnscroll', { easing: 'ease-in' });
ScrollReveal().reveal('.btnscroll', { origin: 'top' });

ScrollReveal().reveal('.imgSeccion1', { easing: 'ease-in' });
ScrollReveal().reveal('.textSeccion1 h3', {delay : 10});
ScrollReveal().reveal('.textSeccion1 h3', { easing: 'ease-in' });
ScrollReveal().reveal('.textSeccion1 h3', { origin: 'right' });

ScrollReveal().reveal('.cards', {delay : 10});
ScrollReveal().reveal('.cards', { easing: 'ease-in' });
ScrollReveal().reveal('.cards', { origin: 'bottom' });

ScrollReveal().reveal('.seccion3 ul', {delay : 10});
ScrollReveal().reveal('.seccion3 ul', { easing: 'ease-in-out' });
ScrollReveal().reveal('.seccion3 ul', { origin: 'left' });

ScrollReveal().reveal('.imgSeccion3', {delay : 150});
ScrollReveal().reveal('.imgSeccion3', { easing: 'ease-in' });
ScrollReveal().reveal('.imgSeccion3', { origin: 'right' });
ScrollReveal().reveal('.img2Seccion3', {delay : 150});
ScrollReveal().reveal('.img2Seccion3', { easing: 'ease-in' });
ScrollReveal().reveal('.img2Seccion3', { origin: 'right' });

ScrollReveal().reveal('.seccion4 h2', { easing: 'ease-in-out' });

let nav = document.querySelector('#nav')
document.addEventListener('scroll', () => {
    //Operador ternario
    (window.scrollY > 150) ? nav.classList.add('scrollNav'): nav.classList.remove('scrollNav')
})






