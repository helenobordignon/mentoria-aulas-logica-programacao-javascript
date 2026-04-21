# Mentoria - Aulas de Lógica JavaScript

Projeto educacional da **MENTORIA 2.0** com foco em lógica de programação em JavaScript.

## 📋 Descrição

Este projeto demonstra conceitos fundamentais de JavaScript, incluindo:
- Importação e exportação de módulos ES6
- Funções matemáticas (soma, subtração, multiplicação, média)
- Cálculos trabalhistas (salário, descontos, licenças)
- Controle de estoque com listas
- Gestão de contatos
- Testes automatizados com Mocha
- Relatórios de testes com Mochawesome
- Execução de scripts Node.js
- Estruturação de projetos JavaScript em múltiplas aulas

## 📁 Estrutura do Projeto

```
mentoria-aulas-logica-programacao-javascript/
├── src/
│   ├── scripts/
│   │   ├── script-teste-1.js
│   │   ├── script-teste-2.js
│   │   ├── script-teste-3.js
│   │   └── script-teste-4.js
│   └── services/
│       ├── aula-01/
│       │   ├── aula-01.md
│       │   └── exemplo-aula-01.js
│       ├── aula-02/
│       │   ├── aula-02.md
│       │   └── exemplo-aula-02.js
│       ├── aula-03/
│       │   ├── aula-03.md
│       │   ├── calculosMatematicos.js
│       │   └── usarMedia.js
│       ├── aula-04/
│       │   ├── aula-04.md
│       │   ├── calculosMatematicos.js
│       │   ├── calculosTrabalhistas.js
│       │   ├── usarCalculosMatematicos.js
│       │   └── usarCalculosTrabalhistas.js
│       ├── aula-05/
│       │   ├── aula-05.md
│       │   ├── calculosTrabalhistas.js
│       │   └── usarCalculoLicenca.js
│       ├── aula-06/
│       │   ├── aula-06.md
│       │   ├── controleEstoque.js
│       │   ├── exemplosListas.js
│       │   └── usarControleEstoque.js
│       └── aula-07/
│           ├── aula-07.md
│           ├── gestaoDeContatos.js
│           └── usarGestaoDeContatos.js
├── test/
│   ├── calculosMatematicos.test.js
│   ├── calculosTrabalhistas.test.js
│   ├── controleEstoque.test.js
│   └── gestaoContatos.test.js
├── mochawesome-report/
│   ├── mochawesome.html
│   ├── mochawesome.json
│   └── assets/
├── package.json
└── README.md
```

## 🛠️ Requisitos

- Node.js (versão 14 ou superior)
- npm (incluído com Node.js)

## 📦 Instalação

Para instalar as dependências do projeto:

```bash
npm install
```

## 🚀 Como Usar

### Executar Scripts de Teste

Execute os scripts básicos com:

```bash
npm run script-1
npm run script-2
npm run script-3
npm run script-4
```

### Executar Exemplos das Aulas

Execute exemplos específicos das aulas:

```bash
npm run executar-usarMedia
```

Ou execute um arquivo diretamente:

```bash
node src/services/aula-03/usarMedia.js
```

### Executar Testes

Execute todos os testes com Mocha:

```bash
npm test
```

Para gerar relatórios de teste em HTML:

```bash
npm run test-reporter
```

O relatório será gerado em `mochawesome-report/mochawesome.html`.

### Importar Módulos

Para importar funções dos módulos:

```javascript
// Cálculos matemáticos (aula-03 e aula-04)
import { somar, subtrair, multiplicar, calcularMedia } from './services/aula-04/calculosMatematicos.js';

// Cálculos trabalhistas (aula-04 e aula-05)
import { calcularDesconto, calcularLicenca } from './services/aula-05/calculosTrabalhistas.js';

// Controle de estoque (aula-06)
import { adicionarProduto, removerProduto, listarProdutos } from './services/aula-06/controleEstoque.js';

// Gestão de contatos (aula-07)
import { listarContatos, adicionarContato } from './services/aula-07/gestaoDeContatos.js';
```

## 📝 Módulos Disponíveis

### Aula 01 - Introdução
- **exemplo-aula-01.js** - Exemplos básicos de JavaScript

### Aula 02 - Conceitos Básicos
- **exemplo-aula-02.js** - Exemplos de conceitos fundamentais

### Aula 03 - Cálculos Matemáticos Básicos
- **calculosMatematicos.js** - Funções: soma, subtração, multiplicação, média
- **usarMedia.js** - Exemplo de uso da função média

### Aula 04 - Cálculos Matemáticos e Trabalhistas
- **calculosMatematicos.js** - Funções matemáticas avançadas
- **calculosTrabalhistas.js** - Cálculos de descontos trabalhistas
- **usarCalculosMatematicos.js** - Exemplos de uso das funções matemáticas
- **usarCalculosTrabalhistas.js** - Exemplos de uso dos cálculos trabalhistas

### Aula 05 - Cálculos de Licença
- **calculosTrabalhistas.js** - Funções de cálculo de licença
- **usarCalculoLicenca.js** - Exemplo de uso do cálculo de licença

### Aula 06 - Controle de Estoque
- **controleEstoque.js** - Funções para gerenciar produtos em estoque
- **exemplosListas.js** - Exemplos de manipulação de listas
- **usarControleEstoque.js** - Exemplos de uso do controle de estoque

### Aula 07 - Gestão de Contatos
- **gestaoDeContatos.js** - Funções para gerenciar lista de contatos
- **usarGestaoDeContatos.js** - Exemplos de uso da gestão de contatos

## 🧪 Testes

O projeto inclui testes automatizados para os módulos principais:

- **calculosMatematicos.test.js** - Testes das funções matemáticas
- **calculosTrabalhistas.test.js** - Testes dos cálculos trabalhistas
- **controleEstoque.test.js** - Testes do controle de estoque
- **gestaoContatos.test.js** - Testes da gestão de contatos

Execute os testes com `npm test` e visualize os relatórios em `mochawesome-report/mochawesome.html`.

## 👤 Autor

- **Heleno Bordignon**

## 📚 Instrutoria

- **Julio de Lima** - MENTORIA 2.0

## 📄 Licença

ISC

## 📖 Referências

- [Node.js Documentation](https://nodejs.org/)
- [MDN - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [npm Documentation](https://docs.npmjs.com/)
- [Mocha - Testing Framework](https://mochajs.org/)
- [Mochawesome - Test Reporter](https://www.npmjs.com/package/mochawesome)
