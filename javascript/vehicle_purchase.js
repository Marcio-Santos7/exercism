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

/*
3. Calcule uma estimativa do preço de um veículo usado

Agora que você tomou sua decisão, deseja garantir um preço justo na concessionária. Como 
você está interessado em comprar um veículo usado, o preço depende da idade do veículo. Para 
uma estimativa aproximada, suponha que se o veículo tiver menos de 3 anos, custa 80% do 
preço original que tinha quando era novo. Se tiver mais de 10 anos, custa 50%. Se o veículo 
tiver pelo menos 3 anos, mas não mais de 10 anos, custa 70% do preço original. 

Implemente a função calculateResellPrice(originalPrice, age) que aplica essa lógica usando 
if, else if e else (existem outras maneiras, mas você deseja praticar). Toma como argumentos 
o preço original e a idade do veículo e retorna o preço estimado na concessionária. 
*/

function calculateResellPrice(originalPrice, age){
    let costVehicle;
    
    if(age < 3){
        costVehicle = (0.8 * originalPrice);
    } else if(age > 10){
        costVehicle = (0.5 * originalPrice);
    } else{
        costVehicle = (0.7 * originalPrice);
    }

    return costVehicle;
}

console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 15));