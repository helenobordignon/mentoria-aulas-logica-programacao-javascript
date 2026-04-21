# Aula de lógica e programação em Javascript: Listas, Objetos e constantes fora do escopo da função

relatórios dos testes Mocha em html

instalar a biblioteca mochawesome:

```bash
npm i -D mochawesome
```

obs.: -D serve para a dependencia ficar só dentro do porjeto local, não vai para 'produção'

e para executar:

```bash
npx mocha --reporter mochawesome
```

Podemos adicionar no package.json, assim:

"test": "mocha",
"test-reporter": "mocha --reporter mochawesome"

**para executar:**
npm test
npm run test-reporter

# EXERCÍCIO

Preciso de uma função capaz de registrar produtos de uma mercearia. 
Eles possuem as seguintes informações: codigo, nome, estoque, valor. 
O nome  pode ser repetido, desde que o código não se repita. 
O valor e o estoque precisam ser maiores que 0.
A função deve retornar o último produto da lista

1. ENTRADAS
- codigo
- nome
- estoque
- valor 

2. PROCESSAMENTO (sequência lógica das ações)
- o código não pode ser repetido
- o valor precisa ser maior que 0
- o estoque precisa ser maior que 0
- registrar o produto

3. SAÍDAS
- N/A

# EXEMPLOS DE LISTAS

const produtos = [] // lista vazia

produtos.push('produto1') // função que insere elementos na lista

produtos[0] // captura elemento na lista pelo indice