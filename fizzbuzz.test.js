import { describe, it } from 'mocha'
import { expect } from 'chai'

import { fizzbuzz } from './fizzbuzz'

describe('fizzbuz', () => {
    it('renvoie un chiffre', () => {
        expect(fizzbuzz(1)).to.equal(1)
    })

    it('renvoie Fizz pour un multiple de 3', () => {
        expect(fizzbuzz(3)).to.equal('Fizz')
    })

    it('renvoie Buzz pour un multiple de 5', () => {
        expect(fizzbuzz(5)).to.equal('Buzz')
    })

    it('renvoie FizzBuzz pour un multiple des 2', () => {
        expect(fizzbuzz(15)).to.equal('FizzBuzz')
    })

    it('imprime les 100 premiers', () => {
        const cent = []
        for (let i = 1; i <= 100; i++) cent.push(i)

        console.log(cent.map(fizzbuzz))
    })
})