export const generateCountStepsArray = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
        array = [...array, i];
    }
    return array;
}