function moverBotao() {
    var botaoNao = document.getElementById("botaoNao");
    var posicaoX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    var posicaoY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.left = posicaoX + "px";
    botaoNao.style.top = posicaoY + "px";
}
function redirecionarMusica() {
    window.location.href = "https://www.youtube.com/watch?v=hKgl5-lkT8U&t=2m30s";
}