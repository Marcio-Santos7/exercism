export const EXPECTED_MINUTES_IN_OVEN = 40;
export const TIME_LAYERS = 2;

export function remainingMinutesInOven(timeActual){
    return EXPECTED_MINUTES_IN_OVEN - timeActual;
}

export function preparationTimeInMinutes(numbersLayers){
    return numbersLayers * TIME_LAYERS;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    let minutesTotal = numberOfLayers * TIME_LAYERS + actualMinutesInOven;
    return minutesTotal;
}