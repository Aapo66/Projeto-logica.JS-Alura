alert("Boas vindas ao jogo do número secreto");
//variáveis
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroAleatorio + 1);
let chute; 
let tentativas = 1;

//console.log para mostrar o valor do número secreto
console.log("valor do número secreto:", numeroSecreto);

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
      chute = prompt(`Escolha um número entre 1 e ${numeroAleatorio}`);
      // console.log para mostrar qual foi o chute
      console.log("Valor do chute", chute);
   // se o chute for igual ao número secreto
   if(numeroSecreto ===  parseInt(chute)) {
      //console.log para mostrar se é false ou true que o chute é igual ao número secreto
      console.log("Resultado da comparação", chute == numeroSecreto);
      //Para o while
      break;
   } else {
      if (chute > numeroSecreto) {
         alert (`O número secreto é menor que ${chute}`);
      }else {
         alert(`O número secreto é maior que ${chute}`);
      }
      // tentativas = tentativas + 1;
      tentativas++;
   }
}

const palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert (`Isso ai Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);




