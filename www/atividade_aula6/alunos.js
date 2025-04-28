class Alunos {
    nome;
    idade;
    curso;

    informacoes(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
        console.log("O nome do aluno é: " + this.nome + ", " + "Possui " + this.idade + " anos " + "e está realizando o curso de: " + this.curso) 
    }
}

var aluno1 = new Alunos
aluno1.informacoes("Marcos Guilherme", 17, "Progamação Back-End")

var aluno2 = new Alunos
aluno1.informacoes("Felipe Figueira", 17, "Progamação Front-End")