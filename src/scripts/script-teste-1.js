import { somarDoisNumeros, subtrairDoisNumeros, multiplicarDoisNumeros, calcularMedia } from '../calculosMatematicos.js';

//CONSTANTES
const NUMERO_1 = 5;
const NUMERO_2 = 15;

console.log("\n##########  RESPOSTA:  ###############");

console.log("\n # Somar:", somarDoisNumeros(NUMERO_1, NUMERO_2));
console.log("\n # Subtrair:", subtrairDoisNumeros(NUMERO_2, NUMERO_1));
console.log("\n # Multiplicar:", multiplicarDoisNumeros(NUMERO_1, NUMERO_2));
console.log("\n # Média:", calcularMedia(NUMERO_1, NUMERO_2));

console.log("\n######################################\n");