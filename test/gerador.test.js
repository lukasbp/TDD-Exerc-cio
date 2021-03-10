const Generator = require('../lib/gerador');
const Objeto = require('../node_modules/validate');
const { toBeDeepCloseTo, ToMatchCloseTo } = require('jest-matcher-deep-close-to');
const { validate } = require('@babel/types');
const { expect } = require('@jest/globals');

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
            valorDoEmprestimo: 1000
        }

        validate({ Nome: 'Lucas' }, Cliente);

        const ClienteTeste = Gerador.Proposta(Cliente);
        expect(ClienteTeste.length).toBe(2);
        expect(ClienteTeste[0].Parcelass).toBe(2);
        expect(ClienteTeste[0].total).toBeCloseTo(2000.00);
        expect(ClienteTeste[0].valorDaParcela).toBeCloseTo(1000.00);

        expect(ClienteTeste.length).toBe(2);
        expect(ClienteTeste[1].Parcelass).toBe(3);
        expect(ClienteTeste[1].total).toBeCloseTo(2000.00);
        expect(ClienteTeste[1].valorDaParcela).toBeCloseTo(666.67);
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
            Salario: 2500,
            Idade: 24,
            valorDoEmprestimo: 1000
        }


        validate({ Nome: 'Josue' }, Cliente);

        const ClienteTeste = Gerador.Proposta(Cliente);
        expect(ClienteTeste.length).toBe(3);
        expect(ClienteTeste[0].Parcelass).toBe(2);
        expect(ClienteTeste[0].total).toBeCloseTo(1300.00);
        expect(ClienteTeste[0].valorDaParcela).toBeCloseTo(650.00);


        expect(ClienteTeste[1].Parcelass).toBe(4);
        expect(ClienteTeste[1].total).toBeCloseTo(1500.00);
        expect(ClienteTeste[1].valorDaParcela).toBeCloseTo(375.00);

        expect(ClienteTeste[2].Parcelass).toBe(10);
        expect(ClienteTeste[2].total).toBeCloseTo(1500.00);
        expect(ClienteTeste[2].valorDaParcela).toBeCloseTo(150.00);
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
            Salario: '7500',
            Idade: 40,
            valorDoEmprestimo: '3000'
        }


        validate({ Nome: 'Matias' }, Cliente);

        const ClienteTeste = Gerador.Proposta(Cliente);
        expect(ClienteTeste.length).toBe(4);
        expect(ClienteTeste[0].Parcelass).toBe(2);
        expect(ClienteTeste[0].total).toBeCloseTo(3300.00);
        expect(ClienteTeste[0].valorDaParcela).toBeCloseTo(1650.00);


        expect(ClienteTeste[1].Parcelass).toBe(4);
        expect(ClienteTeste[1].total).toBeCloseTo(3900.00);
        expect(ClienteTeste[1].valorDaParcela).toBeCloseTo(975.00);

        expect(ClienteTeste[2].Parcelass).toBe(10);
        expect(ClienteTeste[2].total).toBeCloseTo(3900.00);
        expect(ClienteTeste[2].valorDaParcela).toBeCloseTo(390.00);

        expect(ClienteTeste[3].Parcelass).toBe(20);
        expect(ClienteTeste[3].total).toBeCloseTo(4200.00);
        expect(ClienteTeste[3].valorDaParcela).toBeCloseTo(210.00);

    })
})