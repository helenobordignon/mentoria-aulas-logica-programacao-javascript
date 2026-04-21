import { calcularLicenca } from '../services/aula-05/calculosTrabalhistas.js';

//CONSTANTES
const sexo = 'Feminino'

console.log("\n##########  RESPOSTA:  ###############");
console.log('O funcionário(a) tem direito a %d semanas de licença', calcularLicenca(sexo));
console.log("######################################\n");