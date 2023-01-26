    var escolha = ['pedra','papel','tesoura'];
    var pedra = document.getElementById('pedra');
    var papel =document.getElementById('papel');
    var tesoura =document.getElementById('tesoura');
//variavel player
    var pedraP = document.getElementById('pedra');
    var papelP =document.getElementById('papel');
    var tesouraP =document.getElementById('tesoura');
//window win or loss
    var WinOrLoss = document.getElementById('mensagem');

 //eventoi de click em cada uma das imagens do player
    document.querySelectorAll('.opcaoPlayer').forEach(element => {
        element.addEventListener('click', function() {

            var jogadaPlayer = this.id;
            console.log(`A jogada do jogador é ${jogadaPlayer}`);
            var playerOption = document.getElementById(jogadaPlayer);
                playerOption.style["box-shadow"] = '#000000 1px 1px 20px';
            //numero aleatorio/ jogada inimigo é a opçao do inimigo
            var numberAleatory = Math.round(2 * Math.random());
            var jogadaInimigo = escolha[numberAleatory];
            console.log(`A jogada do inimigo é ${jogadaInimigo}`);
           
            //ativar escolhaInimigo
             var enemyMoveElement = document.getElementById(jogadaInimigo);
             enemyMoveElement.style["box-shadow"] = '#000000 1px 1px 20px';
             setTimeout(function() {
                enemyMoveElement.style.boxShadow = "none";
            }, 10000);

            //imagem loss or win
            setTimeout(function() {
                WinOrLoss.classList.add("mensagem");
                document.getElementById('mensagem').style.display = "flex";
                document.querySelector('#mensagem button').style.display = "block";
              
               



        if (jogadaPlayer === 'pedraP' && jogadaInimigo === 'tesoura') {

                    document.getElementById('mensagem').style.backgroundColor = 'green';
                    document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Venceu!";
                    document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou pedra e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player venceu!');}
                 
         if (jogadaPlayer === 'pedraP' && jogadaInimigo === 'papel') {

                     document.getElementById('mensagem').style.backgroundColor = 'red';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Perdeu!";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou pedra e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player perdeu!');}
                 
        if (jogadaPlayer === 'pedraP' && jogadaInimigo === 'pedra') {
                     document.getElementById('mensagem').style.backgroundColor = 'gray';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Empate ¯|_(ツ)_/¯";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou pedra e o adversário jogou ${jogadaInimigo}`;
                     console.log('Empate!');}
                 
                 
                 
        if (jogadaPlayer === 'papelP' && jogadaInimigo === 'pedra') {
                     document.getElementById('mensagem').style.backgroundColor = 'green';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Venceu!";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou papel e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player venceu!');}
                 
        if (jogadaPlayer === 'papelP' && jogadaInimigo === 'tesoura') {
                     document.getElementById('mensagem').style.backgroundColor = 'red';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Perceu! :(";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou papel e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player perdeu!');}
                 
        if (jogadaPlayer === 'papelP' && jogadaInimigo === 'papel') {
                    document.getElementById('mensagem').style.backgroundColor = 'gray';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Empate  ¯|_(ツ)_/¯";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou papel e o adversário jogou ${jogadaInimigo}`;
                     console.log('Empate!');}
                 
                 
                 
        if (jogadaPlayer === 'tesouraP' && jogadaInimigo === 'papel') {
                    document.getElementById('mensagem').style.backgroundColor = 'green';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Venceu!";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou tesoura e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player venceu!');}
                 
        if (jogadaPlayer === 'tesouraP' && jogadaInimigo === 'pedra') {
                    document.getElementById('mensagem').style.backgroundColor = 'red';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Você Perceu! :(";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou tesoura e o adversário jogou ${jogadaInimigo}`;
                     console.log('Player perdeu!');}
                
        if (jogadaPlayer === 'tesouraP' && jogadaInimigo === 'tesoura') {
                    document.getElementById('mensagem').style.backgroundColor = 'gray';
                     document.getElementsByClassName('textMensagem')[0].innerHTML= "Empate  ¯|_(ツ)_/¯";
                     document.getElementsByClassName('subtexto')[0].innerHTML= `Você jogou tesoura e o adversário jogou ${jogadaInimigo}`;
                     console.log('Empate!');}



            }, 1000);


            
    });
});


