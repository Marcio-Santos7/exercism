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
    return Math.round((budget / (hourRate * 8))); 
}
