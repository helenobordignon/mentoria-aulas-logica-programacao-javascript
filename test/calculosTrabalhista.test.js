import { calcularLicenca } from '../src/services/aula-05/calculosTrabalhistas.js' // importa a classe a ser testada
import assert, { Assert } from 'node:assert' // utilizada para fazer asserções

// cria uma suite de teste
describe('Testes de Cálculos Trabalhistas', function () { // grupo de testes
    it('Quando informar masculino deve retornar 2', function () { // teste
        const semanasDeLicenca = calcularLicenca('masculino')
        assert.equal(semanasDeLicenca, 2) // validação [ expectativa x realidade ]
    })

    it('Quando informar MASCULINO deve retornar 2', function () { // teste
        const semanasDeLicenca = calcularLicenca('masculino')
        assert.equal(semanasDeLicenca, 2) // validação [ expectativa x realidade ]
    })

    it('Quando informar feminino deve retornar 12', function () {
        const semanasDeLicenca = calcularLicenca('feminino')
        assert.equal(semanasDeLicenca, 12) 
    })

    it('Quando informar FEMININO deve retornar 12', function () {
        const semanasDeLicenca = calcularLicenca('feminino')
        assert.equal(semanasDeLicenca, 12) 
    })

    it('Quando informar entrada inválida FFeminino deve retornar erro', function () { // validar mensagens de erro
        assert.throws(
            function() { calcularLicenca('FFeminino')},
            {
                name: 'Error',
                message: 'Entrada inválida. Por favor, informe se é masculino ou feminino.'
            }
        )
    })

    it('Quando informar entrada inválida M deve retornar erro', function () { // validar mensagens de erro
        assert.throws(
            function() { calcularLicenca('M')},
            {
                name: 'Error',
                message: 'Entrada inválida. Por favor, informe se é masculino ou feminino.'
            }
        )
    })
})

    