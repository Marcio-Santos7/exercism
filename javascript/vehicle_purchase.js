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

/*
2. Escolha entre dois veículos em potencial para comprar

Você avalia suas opções de veículos disponíveis. Você consegue reduzi-lo a duas opções, mas 
precisa de ajuda para tomar a decisão final.  Para isso implemente a função 
chooseVehicle(option1, option2) que recebe dois veículos como argumentos e retorna uma 
decisão que inclui a opção que vem primeiro na ordem do dicionário.
*/

function chooseVehicle(option1, option2){
    
    let vehicle;

    if(option1 < option2){
        vehicle = option1;
    } else {
        vehicle = option2;
    }

    return (vehicle + " is clearly the better choice");
}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));
