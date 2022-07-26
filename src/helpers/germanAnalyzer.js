const germanAnalyzer = (prestamo, interes, periodos) => {
    let resultado = [];
    let datos = {
        'id': 0, 
        'amortizacion': '', 
        'paInteres': '', 
        'paMensual': '', 
        'saldo': prestamo
    };

    
    let saldo = prestamo;
    resultado.push(datos);
    datos = {};

    const amortizacion = Amortizacion(prestamo, periodos);
    

    

    for (let i = 1; i <= periodos; i++) {
        let paInteres = PagoInteres(saldo,interes);
        let paMensual = PagoMensual(amortizacion, paInteres);
        saldo = Saldo(amortizacion, saldo);

        datos['id'] = i;
        datos['amortizacion'] = amortizacion;
        datos['paInteres'] = paInteres;
        datos['paMensual'] = paMensual;
        datos['saldo'] = saldo;

        resultado.push(datos);
        datos = {};
    }

    return resultado;

}




const PagoInteres = (saldo, interes) => {
    let variable = saldo * interes;
    return variable.toFixed(3);
}


const PagoMensual = (amortizacion, paInteres) => {
    let oper = parseFloat(amortizacion) + parseFloat(paInteres);
    return oper.toFixed(2);
}


const Amortizacion = (saldo, periodos) => {
    let oper = saldo/periodos;
    return oper.toFixed(3);
}

const Saldo = (amortizacion, saldo) => {
    let oper = parseFloat(saldo) - parseFloat(amortizacion);
    return oper.toFixed(2);
}

export default germanAnalyzer;