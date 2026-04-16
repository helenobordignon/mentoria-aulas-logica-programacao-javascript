import { calcularSalarioLiquido } from '../services/aula-04/calculosTrabalhistas.js';

//CONSTANTES
const salarioBruto = 50000;
const tempotempoDeCasaEmMeses = 15;

console.log("\n##########  RESPOSTA:  ###############");

console.log("\n # Salário Líquido é ", calcularSalarioLiquido(salarioBruto, tempotempoDeCasaEmMeses));

console.log("\n######################################\n");