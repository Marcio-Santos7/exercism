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

Então, quando o guarda recita Stands so high, você responderá S, quando o guarda recitar Huge hooves too, você responderá H.

Implemente a função frontDoorResponse que recebe uma linha do poema como argumento e retorna a primeira letra dessa linha.
*/ 

function frontDoorResponse(frase){
    return frase[0];
}

console.log(frontDoorResponse('Stands so high'));

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