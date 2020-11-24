// Function to generate random number
export function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min
}
