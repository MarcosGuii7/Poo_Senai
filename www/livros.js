class Livro {
    titulo;
    autor;

    exibirInfo(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        console.log("O título do livro é: " + this.titulo)
        console.log("O autor da obra é: " + this.autor)
    }
}

var meulivro1 = new Livro
var meulivro2 = new Livro
var meulivro3 = new Livro

meulivro1.exibirInfo("As 48 Leis do Poder", "Robert Greene")

meulivro2.exibirInfo("A psicologia financeira", "Morgan Housel")

meulivro3.exibirInfo("Pai rico Pai pobre", "Robert T. Kiyosaki")