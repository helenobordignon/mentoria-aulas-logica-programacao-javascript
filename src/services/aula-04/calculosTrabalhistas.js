export function calcularSalarioLiquido(salarioBruto, tempoDeCasaEmMeses) {
    
    if (tempoDeCasaEmMeses < 36){
        return salarioBruto - (salarioBruto * 0.3);
    }

    if (tempoDeCasaEmMeses >= 36){
       return salarioBruto - (salarioBruto * 0.25);
    }
}