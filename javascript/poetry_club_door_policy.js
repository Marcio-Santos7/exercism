/*
Instruções


Um novo clube de poesia abriu na cidade, e você está pensando em participar. Porque houve incidentes no passado, o clube tem uma política de porta muito específica que você precisa dominar, antes de tentar entrar.

Há duas portas no clube de poesia, uma da frente e outra dos fundos, e ambas são vigiadas. Para entrar, você precisará descobrir a senha do dia.

A senha é sempre baseada em um poema e pode ser derivada em um processo de duas etapas.

1. O guarda irá recitar o poema, uma linha de cada vez e você deve responder com uma letra apropriada dessa linha.
2. O guarda agora lhe dirá todas as cartas com as quais você respondeu de uma só vez, e você precisa anotá-las em um pedaço de papel em um formato específico.

Os detalhes do processo dependem de qual porta você está tentando entrar.
*/

/*
1. Pegue a primeira letra de uma frase


Para determinar as letras para a senha da porta da frente, você precisa responder com a primeira letra da linha do poema, que o guarda recita para você. 

Para terminar com uma boa senha, os membros do clube de poesia gostam de usar poemas acrósticos. Isso significa que a primeira letra de cada frase forma uma palavra. Aqui está um exemplo de um de seus escritores favoritos, Michael Lockwood.  

Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave

Então, quando o guarda recita Stands so high, você responderá S, quando o guarda recitar 
Huge hooves too, você responderá H.

Implemente a função frontDoorResponse que recebe uma linha do poema como argumento e retorna 
a primeira letra dessa linha.
*/ 

function frontDoorResponse(frase){
    return frase[0];
}

console.log(frontDoorResponse('Stands so high'));

/*
2. Coloque uma palavra em maiúscula

Agora que você tem todas as letras corretas, tudo o que você precisa fazer para obter a 
senha da porta da frente é colocar a palavra corretamente em maiúscula.

Implemente a função frontDoorPassword que aceita uma string (as letras combinadas que você 
encontrou na tarefa 1) e a retorna corretamente em maiúscula.
*/


function frontDoorPassword(frase){

    let letraModificada = '';

    for(let i=0; i<frase.length; i++){   

        

        if(i==0){
            letraModificada += frase.charAt(i).toUpperCase();
        }else {
            letraModificada += frase.charAt(i).toLowerCase();
        }
    }
    return letraModificada;
}

console.log(frontDoorPassword('SHIRE'));

/*
3. Obtenha a última letra de uma frase


Para determinar as letras da senha da porta dos fundos, você precisa responder com a última 
letra do verso do poema que o guarda recita para você.

Os membros do clube de poesia são muito inteligentes. O poema mencionado anteriormente 
também é telestich, o que significa que a última letra de cada frase também forma uma 
palavra:

Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave

Quando o guarda recitar Stands so high, você responderá h, quando o guarda recitar Huge 
hooves too, você responderá o.

Observe que às vezes o guarda faz pausas estilísticas (na forma de espaço em branco) no 
início ou no final de uma linha. Você precisará ignorar essas pausas para derivar a letra 
correta.

Implemente a função backDoorResponse que recebe uma linha do poema como argumento e retorna 
a última letra dessa linha que não seja um caractere de espaço em branco.
*/

function backDoorResponse(frase){
    
    let fraseSemEspacoBranco = frase.trim();
    let ultimaLetra = fraseSemEspacoBranco.charAt(fraseSemEspacoBranco.length - 1);

    return ultimaLetra;

}

console.log(backDoorResponse('Stands so high   '));

/*
4. Seja educado

Para entrar no clube de poesia pela porta dos fundos, você precisa ser muito educado.  
Então, para derivar a senha, desta vez você precisa colocar a palavra corretamente em 
maiúscula e adicionar ', please' no final. 

Implemente a função backDoorPassword que aceita uma string (as letras combinadas que você 
encontrou na tarefa 3) e retorna a versão educada da senha em maiúscula.
*/

function backDoorPassword(frase){
    
    let letraModificada = '';

    for(i=0; i<frase.length; i++){

        if(i==0){
            letraModificada += frase.charAt(i).toUpperCase();
        } else{
            letraModificada += frase.charAt(i).toLowerCase();
        }
    }

    return letraModificada + ', please';
}

console.log(backDoorPassword('horse'));