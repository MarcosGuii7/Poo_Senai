class Calculadora {
    valor1;
    valor2;

    somar(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        var resultado = valor1 + valor2;
        console.log("O resultado da soma será: " + resultado)
    }

    multiplicar(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        var resultado = valor1 * valor2
        console.log("O resultado será: " + resultado)
    }

    divisao(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        var resultado = valor1 / valor2 
        console.log("O resultado da divisão é: " + resultado)
    }
}

var calc = new Calculadora()

calc.somar(7,3)

calc.multiplicar(4,4)

calc.divisao(2,2)