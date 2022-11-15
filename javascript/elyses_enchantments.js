/*
Instruções

Como uma futura maga, Elyse precisa praticar algumas noções básicas. Ela tem uma pilha de 
cartas que ela quer manipular.

Para tornar as coisas um pouco mais fáceis, ela usa apenas as cartas de 1 a 10 para que sua 
pilha de cartas possa ser representada por uma matriz de números. A posição de um determinado
cartão corresponde ao índice na matriz. Isso significa que a posição 0 se refere ao primeiro 
cartão, a posição 1 ao segundo cartão etc. 
*/

/*
1. Recuperar um cartão de uma pilha
   
Para pegar um cartão, devolva o cartão na posição de índice da pilha fornecida. 
*/

const POSITION = 2;

function getItem(arrayCartas, POSITION){
    
    return arrayCartas[POSITION];
}

console.log(getItem([1,2,4,1], POSITION));

/*
2. Troque uma carta na pilha
   
Faça algum truque de mão e troque o cartão na posição de índice com o cartão de substituição 
fornecido. Devolva a pilha ajustada.
*/

const REPLACEMENTCARD = 6;

function setItem(arrayCartas, POSITION, REPLACEMENTCARD){
    arrayCartas[POSITION] = REPLACEMENTCARD;
    return arrayCartas;
}

console.log(setItem([1,2,4,1], POSITION, REPLACEMENTCARD));