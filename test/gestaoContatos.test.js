import { listarContatos, adicionarContato } from '../src/services/aula-07/gestaoDeContatos.js'
import assert, { Assert } from 'node:assert'

describe('Teste gestaoContatos()', () => {
    describe('Teste listarContatos()', () => {
        it('deve listar os contatos já cadastrados', () => {
            const contatosFormatados = listarContatos()
            assert.deepEqual(contatosFormatados, [
                'Contato: Polícia / Telefone: 190',
                'Contato: SAMU / Telefone: 192',
                'Contato: Bombeiros / Telefone: 193'
            ])
        })
    })

    describe('Teste adicionarContato()', () => {
        it('deve adicionar um novo contato', () => {
            const contatoAdicionado = adicionarContato('Novo Contato', 4699999999)
            assert.deepEqual({
                nome: 'Novo Contato',
                telefone: 4699999999
            }, contatoAdicionado)
        })
    })
})