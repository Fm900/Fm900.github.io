const button = document.querySelector('header .button')
const nav = document.querySelector('header .nav')
const header = document.querySelector('header')

window.addEventListener('scroll',() => {
    header.classList.toggle('sticky',window.scrollY > 640)
})

const mql = matchMedia('(min-width:800px)')
const aplicar = mql =>{
    mql.matches
        ?
        nav.classList.add('activo')
        
        :
        nav.classList.remove('activo');
        button.addEventListener('click', () => {
            nav.classList.toggle('activo')
            header.classList.toggle('activo')
        })
}

addEventListener('resize',() => aplicar(mql));
addEventListener('DOMContentLoaded',() => aplicar(mql));




/*
let myMediaQuery = window.matchMedia('(min-width: 750px)');
function widthChangeCallback(myMediaQuery) { 
    if(myMediaQuery.matches) 
        {
            nav.classList.add('activo');
        } else {
            
            button.addEventListener('click', () => {
                nav.classList.toggle('activo')
                header.classList.toggle('activo')
            })
        }
};

myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);
*/




