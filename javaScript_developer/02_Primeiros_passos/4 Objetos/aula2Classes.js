class Pessoa {
    nome;
    idade;
    exibirInfo() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
  }

const vitor = new Pessoa();
vitor.nome = "Vitor J Guerra";
vitor.idade = 30;
vitor.exibirInfo();

const renan = new Pessoa();
renan.nome = "Renan G Junior";
renan.idade = 25;
renan.exibirInfo();


// Usando constructor

class Carro {
    marca;
    modelo;
    ano;
    idadeCarro;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.idadeCarro = new Date().getFullYear() - ano;

    }

    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Idade: ${this.idadeCarro} anos`);
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
carro1.exibirInfo();