 // Freelancer Rates

/*
Instruções 

Neste exercício, você escreverá código para ajudar um freelancer a se comunicar com seus 
clientes sobre os preços de determinados projetos. Você escreverá algumas funções utilitárias
para calcular rapidamente os custos para os clientes.

1. Calcular a taxa diária dada uma taxa horária
   
Um cliente entra em contato com o freelancer para saber sobre suas taxas. O freelancer 
explica que trabalha 8 horas por dia. No entanto, o freelancer sabe apenas suas taxas 
horárias para o projeto. Ajude-os a estimar uma taxa diária dada uma taxa horária.

*/

function dayRate(hourRate){
    return hourRate * 8;
}

/* 
2. Calcular o número de dias de trabalho dado um orçamento fixo

Outro dia, um gerente de projeto oferece ao freelancer para trabalhar em um projeto com 
orçamento fixo. Dado o orçamento fixo e a taxa horária do freelancer, ajude-os a calcular 
o número de dias que ele trabalharia até que o orçamento se esgotasse. O resultado deve ser 
arredondado para o número inteiro mais próximo.

*/

function daysInBudget(budget, hourRate){
    return Math.floor((budget / (hourRate * 8))); 
}

/*
3. Calcular a taxa de desconto para grandes projetos

Muitas vezes, os clientes do freelancer os contratam para projetos que duram vários meses. 
Cada mês tem 22 dias faturáveis. Ajude-os a estimar o custo desses projetos, considerando 
uma taxa horária, o número de dias que o projeto abrange e uma taxa de desconto mensal.  
O desconto é sempre passado como um número, onde 42% se torna 0,42. O resultado deve ser 
arredondado para o número inteiro mais próximo. 
*/ 

function priceWithMonthlyDiscount(hourRate, numberDays, monthRate){
    if(numberDays < 22){
        return ((numberDays * (8 * hourRate)) * (1 - monthRate))
    } else if ((numberDays % 22) == 0){
        return Math.ceil(((numberDays / 22) * (22 * 8 * hourRate)) * (1 - monthRate))
    } else {
        return Math.ceil((((numberDays - ((Math.floor(numberDays / 22 )) * 22 )) * 8 * hourRate) +
        (Math.floor(numberDays / 22 ) * 22 * 8 * hourRate) * (1 - monthRate)))
    }
     
}

