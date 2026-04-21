/* lista de contatos inicial */
const contatos = [
        {
            nome: "Polícia",
            telefone: 190
        },
        {
            nome: "SAMU",
            telefone: 192               
        },
        {
            nome: "Bombeiros",
            telefone: 193
        }
    ]

export function listarContatos() {
    const contatosFormatoModelo = []
    contatos.forEach(function(contato) {
        contatosFormatoModelo.push('Contato: ' + contato.nome + ' / Telefone: ' + contato.telefone)
    })
    return contatosFormatoModelo
}

export function adicionarContato(nome, telefone) {
    contatos.push({
        nome: nome,
        telefone: telefone
    })
    return contatos.at(-1)
}