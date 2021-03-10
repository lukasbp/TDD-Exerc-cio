const Generator = require('../lib/gerador');
const Objeto = require('../node_modules/validate');
const { toBeDeepCloseTo, ToMatchCloseTo } = require('jest-matcher-deep-close-to');
const { validate } = require('@babel/types');

const Gerador = new Generator();

const Cliente = new Objeto({
    Nome: String,
    Salario: Number,
    Idade: Number,
    valorDoEmprestimo: Number
})

describe('Teste geral', () => {
    test('até R$ 1000', () => {
        const Cliente = {
            Nome: {
                presence: true,
                exclusion: {
                    within: ['Lucas'],
                    message: "apenas letras permitidas"
                }
            },
            Salario: 500,
            Idade: 20,
            valorDoEmprestimo: 900
        }

        validate({Nome: 'Lucas'}, Cliente);

    })
    test('de R$ 1000,1 até R$ 5000', () => {
        const Cliente = {
            Nome: {
                presence: true,
                exclusion: {
                    within: ['Josue'],
                    message: "apenas letras permitidas"
                }
            },
            Salario: 2000,
            Idade: 24,
            valorDoEmprestimo: 4000
        }


        validate({Nome: 'Josue'}, Cliente);


    })
    test('de R$ 5000 para cima', () => {
        const Cliente = {
            Nome: {
                presence: true,
                exclusion: {
                    within: ['Matias'],
                    message: "apenas letras permitidas"
                }
            },
            Salario: 11500,
            Idade: 40,
            valorDoEmprestimo: 25000
        }


        validate({Nome: 'Matias'}, Cliente);

    })
})