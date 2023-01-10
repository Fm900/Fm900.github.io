/*para poder aparecer o desaparecer una clase, se utiliza TOGGLE*/
const button = document.querySelector('header .button')
const nav    = document.querySelector('header .nav')
const header   = document.querySelector('header')

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
    header.classList.toggle('activo')
})

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 643)
})