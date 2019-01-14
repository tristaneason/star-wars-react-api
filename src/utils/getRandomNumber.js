export const getRandomNumber = max => {
    const number = Math.floor(Math.random() * Math.floor(max))
    return number.toString()
}
