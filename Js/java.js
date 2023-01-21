const button = document.querySelector('header .button')
const nav = document.querySelector('header .nav')
const header = document.querySelector('header')

/* Menú-color*/
window.addEventListener('scroll',() => {
    header.classList.toggle('sticky',window.scrollY > 640)
})

/* Media-Queries-Javascript*/
let media = window.matchMedia('(min-width: 800px)')
function myFunction(media) {
    if (media.matches) {
        nav.classList.add('activo');
        header.classList.remove('activo');
    } else {
        nav.classList.remove('activo');      
    }
}
media.addEventListener('change', myFunction);
myFunction(media);

/* Menú-Desplegable*/
button.addEventListener('click', () => {
    nav.classList.toggle('activo')
    header.classList.toggle('activo')});

