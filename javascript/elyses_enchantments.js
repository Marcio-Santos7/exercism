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

/*
3. Insira um cartão no topo da pilha
   
Faça um cartão aparecer inserindo um novo cartão no topo da pilha. Devolva a pilha ajustada.
*/

const NEWCARD = 8;

function insertItemAtTop(arrayCartas, NEWCARD){
    arrayCartas.push(NEWCARD);
    return arrayCartas;
}

console.log(insertItemAtTop([5,9,7,1], NEWCARD));

/* 
4. Remova um cartão da pilha
   
Faça uma carta desaparecer removendo a carta na posição dada da pilha. Devolva a pilha 
ajustada.
*/

function removeItem(arrayCartas, POSITION){
    arrayCartas.splice(POSITION, 1);
    return arrayCartas;
}

console.log(removeItem([3,2,6,4,8], POSITION));

/*
5.  Remova o cartão do topo da pilha   

Faça uma carta desaparecer removendo a carta do topo da pilha. Devolva a pilha ajustada.
*/

function removeItemFromTop(arrayCartas){
    arrayCartas.pop();
    return arrayCartas;
}

console.log(removeItemFromTop([3,2,6,4,8]));

/*
6. Insira um cartão na parte inferior da pilha
   
Faça um cartão aparecer inserindo um novo cartão na parte inferior da pilha. Devolva a pilha
ajustada.
*/

function insertItemAtBottom(arrayCartas, NEWCARD){
    arrayCartas.unshift(NEWCARD);
    return arrayCartas;
}

console.log(insertItemAtBottom([5,9,7,1], NEWCARD));

/*
7.  Remova um cartão da parte inferior da pilha
   
Faça um cartão desaparecer removendo o cartão na parte inferior da pilha. Devolva a pilha 
ajustada.
*/

function removeItemAtBottom(arrayCartas){
    arrayCartas.shift();
    return arrayCartas;
}

console.log(removeItemAtBottom([8,5,9,7,1]));

/*
8. Verifique o tamanho da pilha   

Verifique se o tamanho da pilha é igual a stackSize ou não.
*/

const STACKSIZE = 5;

function checkSizeOfStack(arrayCartas, STACKSIZE){
    if(arrayCartas.length == STACKSIZE){
        return true;
    } else {
        return false;
    }
}

console.log(checkSizeOfStack([3,2,6,4,8], STACKSIZE));
