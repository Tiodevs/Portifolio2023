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

    var baseHeader = document.querySelector("#baseHeader");
    var baseHanilidades = document.querySelector("#baseHanilidades");
    var detalhes = document.querySelector(".detalhes");
    var detalhes3 = document.querySelector(".detalhes3");
    var tituloSection = document.querySelector(".tituloSection");
    var tituloSection2 = document.querySelector(".tituloSection2");
    var tituloSection3 = document.querySelector(".tituloSection3");
    var baseHistory = document.querySelector(".baseHistory");
    var historyImg = document.querySelector("#historyImg");
    var ImgTheme = document.querySelector(".ImgTheme");
    var baseprojetos = document.querySelector("#baseprojetos");
    var tituloProjetos = document.querySelector(".tituloProjetos");
    var tituloProjetos2 = document.querySelector(".tituloProjetos2");
    var tituloProjetos3 = document.querySelector(".tituloProjetos3");
    var baseFooter = document.querySelector(".baseFooter");

    if (estiloDisplayClaro === 'flex') {
        themaDark.style.display = "flex";
        themaClaro.style.display = "none";
        historyImg.style.display = "none";
        ImgTheme.style.display = "flex";

        baseHeader.classList.add('baseHeaderTheme');
        baseHanilidades.classList.add('baseHanilidadesTheme');
        detalhes.classList.add('detalhesTheme');
        detalhes3.classList.add('detalhes3Theme');
        tituloSection.classList.add('tituloSectionTheme');
        tituloSection2.classList.add('tituloSection2Theme');
        tituloSection3.classList.add('tituloSection3Theme');
        baseHistory.classList.add('baseHistoryTheme');
        baseprojetos.classList.add('baseprojetosTheme');
        tituloProjetos.classList.add('tituloProjetosTheme');
        tituloProjetos2.classList.add('tituloProjetos2Theme');
        tituloProjetos3.classList.add('tituloProjetos3Theme');
        baseFooter.classList.add('baseFooterTheme');
        
    } else {
        themaDark.style.display = "none";
        themaClaro.style.display = "flex";
        historyImg.style.display = "flex";
        ImgTheme.style.display = "none";

        baseHeader.classList.remove('baseHeaderTheme');
        baseHanilidades.classList.remove('baseHanilidadesTheme');
        detalhes.classList.remove('detalhesTheme');
        detalhes3.classList.remove('detalhes3Theme');
        tituloSection.classList.remove('tituloSectionTheme');
        tituloSection2.classList.remove('tituloSection2Theme');
        tituloSection3.classList.remove('tituloSection3Theme');
        baseHistory.classList.remove('baseHistoryTheme');
        baseprojetos.classList.remove('baseprojetosTheme');
        
        baseFooter.classList.remove('baseFooterTheme');
    }



})

