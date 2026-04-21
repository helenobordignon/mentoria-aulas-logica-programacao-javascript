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

