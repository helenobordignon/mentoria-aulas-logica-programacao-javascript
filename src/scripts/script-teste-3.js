import { calcularBonus } from '../services/aula-04/calculosTrabalhistas.js';

//CONSTANTES
const salario = 50000
const senioridade = "Sênior"

console.log("\n##########  RESPOSTA:  ###############");

console.log("\n # Salário Líquido é ", calcularBonus(salario, senioridade));

console.log("\n######################################\n");