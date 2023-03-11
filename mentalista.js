setTimeout(function(){jogo()},1000)

function jogo (){
var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {

    var chute = prompt('digite um numero entra 0 e 1000')

    if (chute == numeroSecreto) {
        alert('Acertou!!')
    } else if (chute < numeroSecreto) {
        alert('Errou !! O numero secreto é maior do que ' + chute + '!')
    } else { alert('Errou !! O numero secreto é menor do que ' + chute + '!') }
}
}