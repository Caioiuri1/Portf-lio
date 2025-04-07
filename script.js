
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

function enviarwhats(event) {
    event.preventDefault()

    const nome = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('number').value;
    const mensagem = document.getElementById('text').value;
    const telefone = '558791174227'

    const texto = `Ola! Me chamo ${nome}, ${mensagem}. Esse é o meu email ${email} e o meu número de telefone ${tel}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wame.me/${telefone}/?t=${msgFormatada}`

    window.open(url, '_blank')
}