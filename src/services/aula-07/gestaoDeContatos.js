export function listarContatos() {
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

    const contatosFormatoModelo = []
    contatos.forEach(function(contato) {
        contatosFormatoModelo.push('Contato: ' + contato.nome + ' / Telefone: ' + contato.telefone)
    })

    return contatosFormatoModelo
}