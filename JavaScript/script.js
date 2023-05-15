const menu = document.querySelector('#botao-menu')
const nav = document.querySelector('.navbar')

menu.onclick= () =>{
    nav.classList.toggle('mobile-menu')
    menu.classList.toggle('bx-x')
}