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

