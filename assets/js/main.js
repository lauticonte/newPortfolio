window.addEventListener("load", function () {
    setTimeout(() => {
        const loader = document.querySelector(".screen");
        loader.className += "hidden"; // class "screen hidden"
    }, 500);
});

/*=============== CURSOR ===============*/
const cursorDot = document.querySelector('[data-cursor-dot]') ;
const cursorOutline = document.querySelector('[data-cursor-outline]') ;

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;
    // cursorOutline.style.left = `${posX}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 300, fill: "forwards"});
    });     


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc, i) =>{
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    load : {
        filter: '.web'
    },
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})

/*=============== SEE MORE WORK ===============*/
function verMas() {
    var trabajosOcultos = document.querySelectorAll('.hidden');
    var workContainer = document.getElementById('work-container');

    // Mover los trabajos ocultos al final del contenedor
    trabajosOcultos.forEach(function(trabajo) {
        workContainer.appendChild(trabajo);
    });

    // Mostrar los trabajos ocultos
    trabajosOcultos.forEach(function(trabajo) {
        trabajo.style.visibility = 'visible';
        trabajo.style.position = 'static';
    });

    // Ocultar el botón después de mostrar todos los trabajos
    document.getElementById('see__button').style.display = 'none';
}

var audio = document.getElementById("audioElement");
var audioTrigger = document.getElementById("audioTrigger");

  audioTrigger.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    document.querySelector(".starwars").classList.remove("hidden");
  });

  function enviarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var mail = document.getElementById('email').value;
    var propuesta = document.getElementById('mensaje').value;

    // Crear el enlace de WhatsApp con el mensaje personalizado
    var mensajeWhatsapp = `Hola, mi nombre es *${nombre}* y mi mail *${mail}*\n\nQuiero contactarme con vos para presentarte la siguiente propuesta:\n\n> ${propuesta}`;
    var enlaceWhatsapp = `https://api.whatsapp.com/send?phone=1168851595&text=${encodeURIComponent(mensajeWhatsapp)}`;

    // Redirigir a WhatsApp
    window.location.href = enlaceWhatsapp;
}