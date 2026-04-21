import { calcularMedia, somarDoisNumeros, subtrairDoisNumeros, multiplicarDoisNumeros } from '../src/services/aula-04/calculosMatematicos.js'
import assert, { Assert } from 'node:assert'

describe('Testes de Cálculos Matemáticos', function () {
    describe('Testes calcularMedia()', function () {
        it('retorna média correta', function () {
            assert.equal(calcularMedia(2,4), 3)
        })

        it('retorna média incorreta', function () {
            assert.notEqual(calcularMedia(2,4), 4)
        })
    })

    describe('Testes somarDoisNumeros()', function () {
        it('retorna a soma de dois números', function () {
            assert.equal(somarDoisNumeros(200,201), 401)
        })

        it('não retorna a soma de dois números', function () {
            assert.notEqual(somarDoisNumeros(200,201), 402)
        })
    })
})