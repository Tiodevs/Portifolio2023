// Obtém referências aos elementos do DOM
const menuIcon = document.querySelector('#menuBurger');
const menu = document.querySelector('.menu');

// Adiciona um ouvinte de eventos para o clique no ícone do menu
menuIcon.addEventListener('click', function() {
  menu.classList.toggle('active');
});

var btn = document.querySelector("#theme");


btn.addEventListener("click", function (e) {
    e.preventDefault();

    var themaClaro = document.querySelector(".botaoThemaClaro");
    var themaDark = document.querySelector(".botaoThemaDark");

    var estiloDisplayClaro = window.getComputedStyle(themaClaro).getPropertyValue('display');

    var baseFooter = document.querySelector(".baseFooter");

    if (estiloDisplayClaro === 'flex') {
        themaDark.style.display = "flex";
        themaClaro.style.display = "none";

        baseFooter.classList.add('baseFooterTheme');
        
    } else {
        themaDark.style.display = "none";
        themaClaro.style.display = "flex";
        
        baseFooter.classList.remove('baseFooterTheme');
    }



})

