/*
Instruções
Neste exercício, você escreverá algum código para ajudá-lo a se preparar para comprar um 
veículo.

Você tem três tarefas, uma para determinar se precisará obter uma licença, uma para ajudá-lo 
a escolher entre dois veículos e uma para estimar o preço aceitável para um veículo usado.
*/

/*
1. Determine se você precisará de uma carteira de motorista

Alguns tipos de veículos exigem uma carteira de motorista para operá-los. Suponha que apenas 
os tipos 'carro' e 'caminhão' exijam uma licença, todo o resto pode ser operado sem licença.

Implemente a função needsLicense(kind) que pega o tipo de veículo e retorna um booleano 
indicando se você precisa de uma licença para aquele tipo de veículo.
*/

function needsLicense(kind){
    if(kind == 'car' || kind == 'truck'){
        return true;
    } else {
        return false;
    }
}

console.log(needsLicense('car'));
console.log(needsLicense('bike'));

