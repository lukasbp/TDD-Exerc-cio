const Gerador = require('../lib/gerador');
const Objeto = require('validate');
const { toBeDeepCloseTo, ToMatchCloseTo } = require('jest-matcher-deep-close-to');

expect.extend({ toBeDeepCloseTo, ToMatchCloseTo });

const Gerador = new Gerador();

const Cliente = new Objeto({
    Nome: String,
    Salario: Number,
    Idade: Number,
    valorDoEmprestimo: Number
})

describe('Teste geral',()=>{
    test('até R$ 1000', ()=>{
        const Cliente1 = {
            Nome: 'Lucas',
            Salario: 600,
            Idade: 20,
            valorDoEmprestimo: 900
        }
    })
    test('de R$ 1000,1 até R$ 5000', ()=>{
        const Cliente1 = {
            Nome: 'João',
            Salario: 2000,
            Idade: 30,
            valorDoEmprestimo: 4500
        }
    })
    test('de R$ 5000 para cima', ()=>{
        const Cliente1 = {
            Nome: 'Matias',
            Salario: 10000,
            Idade: 45,
            valorDoEmprestimo: 25000
        }
    })
})