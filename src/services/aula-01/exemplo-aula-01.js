/* 
Exemplo de ALGORITMO

Instruções para fazer a média de 3 números

1. Informe um número
2. Informe outro número
3. Informe mais um número
4. Some esses 3 números
5. Escreva o resultado
6. divida o resultado por 3
7. Escreva o resultado da divisão (essa é a média)

No computador, todo bloco de instrução é feito dentro de uma função. 
*/

function media(num1, num2, num3){
    const soma = num1 + num2 + num3
    return soma / 3
}

const resultado = media(2,3,4)

console.log('A média é ' + resultado)

/*
Para executar no terminal, enviar: node src/services/aula-01/exemplo-aula-01.js
*/