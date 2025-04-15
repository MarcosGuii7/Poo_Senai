function mediaNotas(Nota1, Nota2, Nota3) {
    var soma = Nota1 + Nota2 + Nota3
    var total = soma / 3
    return total

}

var notas = mediaNotas(10, 10, 10)
console.log("A média do aluno foi de: " + notas)