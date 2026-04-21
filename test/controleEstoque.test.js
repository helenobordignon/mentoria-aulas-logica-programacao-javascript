import { adicionarProduto } from '../src/services/aula-06/controleEstoque.js'
import assert, { Assert } from 'node:assert'

describe('Teste controleEstoque()', function () {
    describe('cadastrar um produto', function () {
        it('deve cadastrar um produto válido', function () {
            const produtoCadastrado = adicionarProduto(10, 'Monitor', 12, 500.01)
            const resultadoEsperado = { codigo: 10, nome: 'Monitor', estoque: 12, valor: 500.01 }
            assert.deepEqual(produtoCadastrado, resultadoEsperado)
        })

        it('deve lançar erro para valor menor que 0.01', function () {
            assert.throws(() => adicionarProduto(10, 'Monitor', 12, 0), /Valor não podem ser menor que 0.01/)
        })

        it('deve lançar erro para estoque negativo', function () {
            assert.throws(() => adicionarProduto(10, 'Monitor', -1, 500.01), /Estoque não podem ser menor que 0/)
        })
    })
})