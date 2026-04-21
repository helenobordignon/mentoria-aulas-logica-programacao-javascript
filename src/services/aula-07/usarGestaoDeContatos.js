import { listarContatos, adicionarContato } from './gestaoDeContatos.js'

// listar todos os contatos
console.log(listarContatos())

// inserir novo contato
adicionarContato('Hospital', 198)
console.log(listarContatos())

// inserir novo contato no modelo formatado
console.log(listarContatos(adicionarContato('Hospital', 198)))