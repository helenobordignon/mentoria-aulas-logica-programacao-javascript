import { calcularSalarioLiquido, calcularBonus } from './calculosTrabalhistas.js';

//Variáveis Constantes
const salarioBruto = 20000;
const tempoDeCasaEmMeses = 5;

// Apresentar o resultado do cálculo do salário líquido no console
console.log("\n##########  RESPOSTA:  ###############");
console.log("\nO salário líquido é: ", calcularSalarioLiquido(salarioBruto, tempoDeCasaEmMeses));
console.log("\n######################################\n");

//Variáveis Constantes
const salario = 20000;
const senioridade = 'Pleno';

// Apresentar o resultado do calcular bônus no console
console.log("\n##########  RESPOSTA:  ###############");
console.log("\nO salário com Bônus é ", calcularBonus(salario, senioridade));
console.log("\n######################################\n");
