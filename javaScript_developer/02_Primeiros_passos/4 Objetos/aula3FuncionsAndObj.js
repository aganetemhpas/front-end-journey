class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInfo() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo(a) que ${p2.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor J Guerra', 30);
const renan = new Pessoa('Renan G Junior', 25);

compararPessoas(vitor, renan);