
let btnmenu = document.getElementById('btn-menu')
let menumob = document.getElementById('men-mob')
let iniciofechar = document.getElementById('inicio')

btnmenu.addEventListener('click', () => {
    menumob.classList.add('abrir-menu')
})

menumob.addEventListener('click', () => {
    menumob.classList.remove('abrir-menu')
})


iniciofechar.addEventListener('click', () => {
    menumob.classList.remove('abrir-menu')
})