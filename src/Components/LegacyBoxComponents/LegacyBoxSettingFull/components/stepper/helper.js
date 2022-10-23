export const generateCountStepsArray = (number) => {
    let array = {};
    for (let i = 1; i <= number; i++) {
        array[i] = { id: i-1, status: false }
    }
    return array;
}