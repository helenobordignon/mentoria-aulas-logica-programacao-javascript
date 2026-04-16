# AULA DE LÓGICA E PROGRAMAÇÃO EM JAVASCRIPT: Iniciando um Projeto, Importanddo e Exportando funções

Para iniciar um projeto javascript, executar no terminal:

```
npm init -y
```

Inicia o projeto na pasta.

**OBSERVAÇÃO IMPORTANTE:**
Javascript é uma linguagem de programação que não tem tipagem forte

*CRIAR UMA FUNÇÃO*

--> calculosMatematicos.js

export function calcularMedia(n1, n2){
    return (n1 + n2)/2
}

Criar um outro arquivo para usar essa função

--> usarMedia.js

import { calcularMedia } from "./calculosMatematicos";

console.log(calcularMedia(10, 20))

Para usar uma função em outros arquivos, precisa usar a palavra chave *export* na classe que será exportada e *import* na classe que será importada.

para executar no terminal:

```
node src/services/aula-03/usarMedia.js
```

Ou criar um script no *package.json*

"scripts": {
    "executar-usarMedia": "node src/services/aula-03/usarMedia.js",
}

chamar no terminal:
```
npm run executar-usarMedia
```




