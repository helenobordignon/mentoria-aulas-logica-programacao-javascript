/* RESOLVENDO EXERCÍCIO */ 

// Só a definição da função. A chamada será feita em outro lugar

const produtos = []

export function adicionarProduto(codigo, nome, estoque, valor) {
    if (valor < 0.01) {
        throw new Error('Valor não podem ser menor que 0.01')
    } 

    if (estoque < 0) {
        throw new Error('Estoque não podem ser menor que 0')
    }

    produtos.push(
        {
            codigo: codigo,
            nome: nome,
            estoque: estoque,
            valor: valor
        }
    )
    // -1 pega o último elemento da lista
    return produtos.at(-1)
}
