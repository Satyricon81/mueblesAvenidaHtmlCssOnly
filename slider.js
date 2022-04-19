ScrollReveal({ duration: 2000 });
ScrollReveal({ distance: '200px' });
ScrollReveal({ easing: 'cubic-bezier(0.5, 0, 0, 1)' });

ScrollReveal().reveal('.h1', { origin: 'left' });
ScrollReveal().reveal('.h1', { easing: 'ease-in' });


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener ('click', function () {
    Next();
});

function Previous() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnLeft.addEventListener ('click', function () {
    Previous();
});

setInterval(function() {
    Next();
}, 5000);


let nav = document.querySelector('#nav')
document.addEventListener('scroll', () => {
    //Operador ternario
    (window.scrollY > 150) ? nav.classList.add('scrollNav'): nav.classList.remove('scrollNav')
})