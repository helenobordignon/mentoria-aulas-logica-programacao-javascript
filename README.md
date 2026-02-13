# Mentoria Aula 3 - JavaScript

Projeto educacional da **MENTORIA 2.0** - Aula 3 de JavaScript com foco em fundamentos e operações matemáticas.

## 📋 Descrição

Este projeto demonstra conceitos básicos de JavaScript, incluindo:
- Importação e exportação de módulos
- Funções matemáticas (soma, subtração, multiplicação, média)
- Executação de scripts Node.js
- Estruturação de projetos JavaScript

## 📁 Estrutura do Projeto

```
AULA-03/
├── src/
│   ├── scripts/
│   │   └── script-teste-1.js
│   └── services/
│       ├── calculosMatematicos.js
│       ├── usarMedia.js
│       ├── usarMultiplicar.js
│       ├── usarSomar.js
│       └── usarSubtrair.js
├── package.json
├── README.md
└── info.md
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

Para importar uma função ou classe:

```javascript
import { calcularMedia } from './services/calculosMatematicos.js';
```

Exemplo completo:

```javascript
import { calcularMedia } from './services/calculosMatematicos.js';

const notas = [7.5, 8.0, 9.5];
const media = calcularMedia(notas);
console.log(`A média é: ${media}`);
```

## 📝 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| script-1 | `npm run script-1` | Script de teste 1 |

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
