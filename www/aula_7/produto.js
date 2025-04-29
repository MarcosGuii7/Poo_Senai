class Produto {
    nome;
    preco;
    quantidade;

    exibirDetalhes(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        console.log("O Produto: " + nome + ", " + "custa " + preco + " reais" + "e possui o estoque de: " + quantidade)
    }

    calcularTotal(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        var calculo = preco * quantidade
        console.log("O valor da multiplicação é: " + calculo)
    }
}

var info = new Produto()

info.exibirDetalhes("Arroz", 10, 20)

info.calcularTotal("Arroz", 10, 20)