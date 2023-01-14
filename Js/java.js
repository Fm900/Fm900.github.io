const button = document.querySelector('header .button')
const nav = document.querySelector('header .nav')
const header = document.querySelector('header')

window.addEventListener('scroll',() => {
    header.classList.toggle('sticky',window.scrollY > 640)
})

const mql = matchMedia('(min-width:750px)')
const aplicar = mql =>{
    mql.matches
        ?
        nav.classList.toggle('activo')
        :
        button.addEventListener('click', () => {
            nav.classList.toggle('activo')
            header.classList.toggle('activo')
        })
}

addEventListener('resize',() => aplicar(mql));
addEventListener('DOMContentLoaded',() => aplicar(mql));



