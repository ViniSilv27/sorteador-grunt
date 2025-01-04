document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('seletor-numero').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroEscolhido = document.getElementById('numero-maximo').value;
        numeroEscolhido = parseInt(numeroEscolhido);

        let numeroAleatorio = Math.random()*numeroEscolhido;
        numeroAleatorio = Math.floor(numeroAleatorio) + 1;

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})