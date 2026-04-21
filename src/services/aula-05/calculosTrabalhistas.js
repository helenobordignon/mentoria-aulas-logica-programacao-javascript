export function calcularLicenca(sexo) {
    //SE, CASO, QUANDO (Condicionais)
    //.toLowerCase() converte tudo para minúscula antes de comparar
    if (sexo.toLowerCase() == 'masculino') {
        return 2
    } else if (sexo.toLowerCase() == 'feminino') {
        return 12
    } else {
        throw new Error('Entrada inválida. Por favor, informe se é masculino ou feminino.'); // exceção para casos onde o sexo não é identificado
    }
}