
function canExecuteFastAttack(knightIsAwake){
    if (knightIsAwake == true){
        return false;
    } else{
        return true;
    }
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
    if((KnightIsAwake || archerIsAwake || prisonerIsAwake) == true){
        return true;
    } else {
        return false;
    }
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if(prisonerIsAwake == true && archerIsAwake == false){
        return true;
    } else{
        return false;
    }
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    if(knightIsAwake == true && archerIsAwake == false && prisonerIsAwake == true && 
        petDogIsPresent == true){
            return true;
        } else if(knightIsAwake == false && archerIsAwake == false && prisonerIsAwake == true && 
            petDogIsPresent == false){
                return true;
        } else if(knightIsAwake == false && archerIsAwake == false && prisonerIsAwake == false && 
            petDogIsPresent == true){
                return true; 
             } 
        else{
            return false;
        }
}