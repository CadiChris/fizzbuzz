const fizzbuzz = (chiffre) => {

    const estModuloDe = (modulo) => chiffre % modulo === 0

    return estModuloDe(3) && estModuloDe(5)
        ? 'FizzBuzz'
        : estModuloDe(3)
            ? 'Fizz'
            : estModuloDe(5)
                ? 'Buzz'
                : chiffre
}


export {
    fizzbuzz
}
