import { calcularSalarioLiquido } from './calculosTrabalhistas.js';

//Variáveis Constantes
const salarioBruto = 20000;
const tempoDeCasaEmMeses = 5;

// Apresentar o resultado do cálculo do salário líquido no console
console.log("\n##########  RESPOSTA:  ###############");
console.log("\nO salário líquido é: ", calcularSalarioLiquido(salarioBruto, tempoDeCasaEmMeses));
console.log("\n######################################\n");