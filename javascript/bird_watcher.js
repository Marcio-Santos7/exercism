/*
Instruções

Você é um ávido observador de pássaros que acompanha quantos pássaros visitaram seu jardim. 
Normalmente, você usa uma contagem em um caderno para contar os pássaros, mas deseja 
trabalhar melhor com seus dados. Você já digitalizou as contagens de aves por dia das 
últimas semanas que guardou no caderno. 

Agora você deseja determinar o número total de aves que contou, calcular a contagem de aves 
para uma semana específica e corrigir um erro de contagem.

Observação

Para praticar, use um loop for para resolver cada uma das tarefas abaixo. 
*/

/*
1. Determine o número total de pássaros que você contou até agora

Vamos começar a analisar os dados obtendo uma visão de alto nível. Descubra quantos pássaros 
você contou no total desde que iniciou seus registros. 

Implemente uma função totalBirdCount que aceite um array que contém a contagem de pássaros 
por dia. Ele deve retornar o número total de pássaros que você contou.
*/

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(birdsPerDay){

    let numberTotalBirds = 0;

    for(let i = 0; i < birdsPerDay.length; i++){

       numberTotalBirds += birdsPerDay[i];
    }

    return numberTotalBirds;
}

//console.log(totalBirdCount(birdsPerDay));

/*
2. Calcular o número de aves visitantes em uma semana específica

Agora que você tem uma noção geral dos números de contagem de pássaros, deseja fazer uma 
análise mais refinada.

Implemente uma função birdsInWeek que aceite uma matriz de contagens de pássaros por dia e 
um número de semana. Ele retorna o número total de aves que você contou naquela semana 
específica. Você pode presumir que as semanas são sempre rastreadas completamente.

*/

function birdsInWeek(birdsPerDay, numSemana){

    let avesSemana = 0; 

    for(let i = 1; i  <= numSemana; i++){
        for(let j = 0; j < 7; j++){
            if(numSemana == i){
                avesSemana += birdsPerDay[j + ((numSemana - 1) * 7)];
            } else {
                break;
            }
        }
    }

    return avesSemana;
}

console.log(birdsInWeek(birdsPerDay, 2));

/*

*/