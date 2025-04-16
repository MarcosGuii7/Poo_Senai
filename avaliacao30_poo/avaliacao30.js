var nome = 'Marcos'
var idade = 17
var cidade = 'Valença-RJ'
var estudando = true

console.log("O nome do usuário é: " + nome + '!')
console.log("Sua idade é: " + idade + ' anos !')
console.log('A cidade onde o usuario ' + nome + ' reside é: ' + cidade)
console.log("Está estudando? " + estudando)

if (idade >= 13) {
    console.log('Acesso liberado à plataforma!')
} else {
    console.log("Você ainda não tem idade suficiente para participar.")
}

function saudacao(nome, cidade) {
    console.log('Olá, ' + nome + "! Seja bem-vindo(a) à nossa plataforma. Vejo que você é de " + cidade + '!')
}

saudacao('Marcos', 'Valença-RJ')

function mediaNotas(Nota1, Nota2, Nota3) {
    var soma = Nota1 + Nota2 + Nota3
    var total = soma / 3
    console.log('Sua média total foi: ' + total + ' pontos!')

    if(total >= 7){
        console.log("Desempenho bom!")
    } else {
        console.log("É necessário melhorar!")
    }
}


mediaNotas(1, 1, 1)
