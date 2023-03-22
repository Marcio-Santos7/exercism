// Mixed Juices

/*
Instruções

Sua amiga Li Mei administra uma casa de sucos onde vende deliciosos sucos de frutas. Você é 
um cliente frequente da loja dela e percebeu que poderia facilitar a vida de sua amiga. Você 
decide usar suas habilidades de codificação para ajudar Li Mei em seu trabalho.
*/

/*
1. Determine quanto tempo leva para misturar um suco

Li Mei gosta de avisar seus clientes com antecedência quanto tempo eles terão que esperar 
por um suco do cardápio que pediram. Ela tem dificuldade em lembrar os números exatos porque 
o tempo que leva para misturar os sucos varia. 'Pure Strawberry Joy' leva 0,5 minutos, 
'Energizer' e 'Green Garden' levam 1,5 minutos cada, 'Tropical Island' leva 3 minutos e 
'All or Nothing' leva 5 minutos. Para todas as outras bebidas (por exemplo, ofertas 
especiais), você pode considerar um tempo de preparação de 2,5 minutos. 

Para ajudar sua amiga, escreva uma função timeToMixJuice que pega um suco do menu como 
argumento e retorna o número de minutos que leva para misturar aquela bebida.
*/

function timeToMixJuice(juice){
    
    let arrayJuice = ["Pure Strawberry Joy", "Energizer", "Green Garden", "Tropical Island",     
 "All or Nothing"];

 let i = 0;

 while(i < 5){
    if(juice == "Pure Strawberry Joy"){
        return 0.5;
    } else if((juice == "Energizer") || (juice == "Green Garden") ){
        return 1.5;
    } else if(juice == "Tropical Island"){
        return 3;
    } else if(juice == "All or Nothing"){
        return 5;
    } else{
        return 2.5;
    }
 }
}

console.log(timeToMixJuice("Tropical Island"));
console.log(timeToMixJuice("Berries & Lime"));

/*
2. Reabasteça o suprimento de fatias de limão

Muitas das criações de Li Mei incluem fatias de limão, seja como ingrediente ou como parte 
da decoração. Então, quando ela começa seu turno de manhã, ela precisa se certificar de que 
a caixa de fatias de limão esteja cheia para o dia que se inicia. 

Implemente a função limesToCut que pega o número de fatias de limão que Li Mei precisa 
cortar e um array representando o suprimento de limões inteiros que ela tem em mãos. Ela 
pode obter 6 fatias de um limão 'small', 8 fatias de um 'medium' e 10 de um 'large'. Ela 
sempre corta os limões na ordem em que aparecem na lista, começando pelo primeiro item. Ela 
continua até atingir o número de fatias de que precisa ou até ficar sem limões. 

Li Mei gostaria de saber com antecedência quantos limões ela precisa cortar. A função 
limesToCut deve retornar o número de limões a serem cortados. 

*/

function limesToCut(numberLimes, arrayLimes){

    let i = 0;
    let limesCut = 0;
    while((i < arrayLimes.length) && (limesCut < numberLimes)){
        if(arrayLimes[i] == 'small'){
            limesCut += 6;
            i++;
        } else if(arrayLimes[i] == 'medium'){
            limesCut += 8;
            i++;
        } else{
            limesCut += 10;
            i++;
        }
    }

    return i;
}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log(limesToCut(36, ['small', 'small', 'large', 'medium', 'small', 'small']));

/*
3. Termine o turno

Li Mei sempre trabalha até as 15h. Então seu empregado Dmitry assume. Muitas vezes, há 
bebidas que foram pedidas, mas ainda não estão preparadas quando o turno de Li Mei termina. 
Dmitry irá então preparar os sucos restantes. 

Para facilitar a entrega, implemente uma função de remainingOrders que leva o número de 
minutos restantes no turno de Li Mei e um array de sucos que foram pedidos, mas ainda não 
preparados. A função deve retornar os pedidos que Li Mei não pôde começar a preparar antes 
do final de sua jornada de trabalho.

O tempo restante no turno sempre será maior que 0. O array de sucos para preparar nunca 
estará vazia. Além disso, os pedidos são preparados na ordem em que aparecem no array. Se 
Li Mei começar a misturar um determinado suco, ela sempre o terminará, mesmo que tenha que 
trabalhar um pouco mais. Se não houver pedidos restantes que Dmitry precise cuidar, um array 
vazio deve ser retornada.
*/

