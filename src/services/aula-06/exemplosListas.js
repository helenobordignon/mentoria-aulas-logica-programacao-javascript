/* EXEMPLO DE LISTAS */

// Uma lista
const produtos = [
    // Objeto -> item que possui propriedades
    {
        codigo: 1, // propriedade e valor
        nome: 'Trackinas',
        estoque: 3,
        valor: 1.59       
    },
    {
        codigo: 2,
        nome: 'PlayStation',
        estoque: 2,
        valor: 5000.99
    }
]

// inserir um produto com o push
produtos.push(
    {
        codigo: 3,
        nome: 'MacBook',
        estoque: 2,
        valor: 37500.43
    }
)

// mostra o nome do primeiro produto
console.log(produtos[0].nome)

// mostra o estoque do terceiro produto
console.log(produtos[2].estoque)

// mostra o valor do segundo produto
console.log(produtos[1].valor)

// mostra o terceiro produto 
console.log(produtos[2])

// mostrar duas propriedades de um produto (nome e valor)
console.log(produtos[0].nome, produtos[0].valor)