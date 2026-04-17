export function calcularLicenca(sexo) {
    //SE, CASO, QUANDO (Condicionais)
    //.toLowerCase() converte tudo para minúscula antes de comparar
    if (sexo.toLowerCase() == 'masculino') {
        return 'O funcionário tem direito a 2 semanas de licença paternidade'
    } else if (sexo.toLowerCase() == 'feminino') {
        return 'A funcionária tem direito a 12 semanas de licença maternidade'
    } else {
        throw new Error('Sexo não identificado. Por favor, informe se é Masculino ou Feminino.'); // exceção para casos onde o sexo não é identificado
    }
}