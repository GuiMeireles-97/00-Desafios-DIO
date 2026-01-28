class Heroi{ // Criando a Classe de Heroi 
    constructor(nome, idade, classe, ataque){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.ataque = ataque;
    }

    atacar(){ // Definindo o método de atacar
        console.log(`O ${this.classe} atacou usando ${this.ataque}.`)
    }

}


// Definição de classes e armas
let classes = {
    Mago: {
        nomeClasse: "mago",
        armaClasse: "magia"},

    Ninja: {
        nomeClasse: "ninja",
        armaClasse: "shuriken"},

    Guerreiro: {
        nomeClasse: "guerreiro",
        armaClasse: "espada"},

    Ranger: {
        nomeClasse: "ranger",
        armaClasse: "arco e flecha"},

    Monge: {
        nomeClasse: "monge",
        armaClasse: "artes marciais"}
}


// Definição dos heróis
let herois = { 
    1: {
        nome: "Mugetsu",
        idade: 28,
        classe: classes.Guerreiro
    },
    2: {
    	nome: "Pedrinho123",
        idade: 22,
        classe: classes.Ranger
    },
    3:{
    	nome: "Ninja Calculista",
        idade: 18,
        classe: classes.Ninja
    }
};

let index = 1

for (let index in herois){ // Todos os heróis existentes atacam
    let personagem = new Heroi( // Cria o objeto dentro da classe heroi
        herois[index].nome,
        herois[index].idade,
        herois[index].classe.nomeClasse,
        herois[index].classe.armaClasse
    )

    personagem.atacar()
}
