const fizzbuzz = (chiffre) => {

    const estMultipleDe = (modulo) => chiffre % modulo === 0

    return estMultipleDe(3) && estMultipleDe(5) ? 'FizzBuzz'
        : estMultipleDe(3) ? 'Fizz'
        : estMultipleDe(5) ? 'Buzz'
        : chiffre
}


export {
    fizzbuzz
}
