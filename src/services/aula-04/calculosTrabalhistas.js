export function calcularSalarioLiquido(salarioBruto, tempoDeCasaEmMeses) {
    
    if (tempoDeCasaEmMeses < 36){
        return salarioBruto - (salarioBruto * 0.3);
    }

    if (tempoDeCasaEmMeses >= 36){
       return salarioBruto - (salarioBruto * 0.25);
    }
}

export function calcularBonus(salario, senioridade){

    if (senioridade == 'Sênior'){
        return salario + 500
    } else {
        return salario
    }
}