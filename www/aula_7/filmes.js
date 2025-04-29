class Filme {
    titulo;
    genero;

    informacoes(titulo, genero) {
        this.genero = genero
        this.titulo = titulo
        console.log("Os gêneros dos filmes são: " + genero)
    }
}

var filmes = new Filme()

filmes.informacoes("Capitão Cueca", "Romance")
filmes.informacoes("Sunga do BEN 10", "Ação")
filmes.informacoes("Os três Patetas", "Comédia")