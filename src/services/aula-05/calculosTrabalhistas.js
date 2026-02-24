export function calcularLicenca(sexo) {
    //SE, CASO, QUANDO (Condicionais)
    if (sexo == 'Masculino') {
        return 'O funcionário tem direito a 5 dias de licença paternidade'
    } else if (sexo == 'Feminino') {
        return 'A funcionária tem direito a 120 dias de licença maternidade'
    } else {
        throw new Error('Sexo não identificado. Por favor, informe se é Masculino ou Feminino.'); // exceção para casos onde o sexo não é identificado
    }
}