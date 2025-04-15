function converterParaFahrenheit(C) {
    var calculo = (C * 1.8) + 32
    return calculo
}

var resultado = converterParaFahrenheit(30)
console.log("A conversão para graus fahrenheit é: " + resultado)
