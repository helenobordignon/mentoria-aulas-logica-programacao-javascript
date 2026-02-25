# Mentoria - Aulas de Lógica JavaScript

Projeto educacional da **MENTORIA 2.0** com foco em lógica de programação, operações matemáticas e conceitos trabalhistas em JavaScript.

## 📋 Descrição

Este projeto demonstra conceitos de JavaScript, incluindo:
- Importação e exportação de módulos
- Funções matemáticas (soma, subtração, multiplicação, média)
- Cálculos de salário e descontos trabalhistas
- Cálculo de licenças
- Executação de scripts Node.js
- Estruturação de projetos JavaScript em múltiplas aulas

## 📁 Estrutura do Projeto

```
AULAS-LOGICA-JAVASCRIPT/
├── src/
│   ├── scripts/
│   │   └── script-teste-1.js
│   └── services/
│       ├── aula-04/
│       │   ├── calcularSalario.js
│       │   ├── calculosMatematicos.js
│       │   ├── calculosTrabalhistas.js
│       │   ├── usarMedia.js
│       │   ├── usarMultiplicar.js
│       │   ├── usarSomar.js
│       │   └── usarSubtrair.js
│       └── aula-05/
│           ├── calculosTrabalhistas.js
│           └── usarCalculoLicenca.js
├── package.json
└── README.md
```

## 🛠️ Requisitos

- Node.js (versão 12 ou superior)
- npm (incluído com Node.js)

## 📦 Instalação

Para iniciar um novo projeto JavaScript:

```bash
npm init -y
```

Para instalar dependências:

```bash
npm install
```

## 🚀 Como Usar

### Executar Scripts

Execute os scripts disponíveis com:

```bash
npm run script-1
```

Ou execute um arquivo diretamente:

```bash
node src/usarMedia.js
```

### Importar Módulos

Para importar funções dos módulos matemáticos (aula-04):

```javascript
import { calcularMedia } from './services/aula-04/calculosMatematicos.js';
import { calcularDesconto } from './services/aula-04/calculosTrabalhistas.js';
import { calcularSalario } from './services/aula-04/calcularSalario.js';
```

Para importar funções de cálculo de licença (aula-05):

```javascript
import { calcularLicenca } from './services/aula-05/calculosTrabalhistas.js';
```

## 📝 Módulos Disponíveis

### Aula 04 - Cálculos Matemáticos e Trabalhistas
- **calculosMatematicos.js** - Funções básicas: soma, subtração, multiplicação, média
- **calculosTrabalhistas.js** - Cálculos de descontos e benefícios
- **calcularSalario.js** - Cálculo de salário com descontos
- **usarMedia.js** - Exemplo de uso da função média
- **usarSomar.js** - Exemplo de uso da função soma
- **usarSubtrair.js** - Exemplo de uso da função subtração
- **usarMultiplicar.js** - Exemplo de uso da função multiplicação

### Aula 05 - Cálculos de Licença
- **calculosTrabalhistas.js** - Cálculos específicos de licença
- **usarCalculoLicenca.js** - Exemplo de uso do cálculo de licença

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
