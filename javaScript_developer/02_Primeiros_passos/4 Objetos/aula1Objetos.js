

const vitoria = {
  nome: "Vitória",
  idade: 25
};

console.log("Nome: " + vitoria.nome);
console.log("Idade: " + vitoria.idade); 
console.log(vitoria); // Exibe o objeto completo

vitoria.altura = 1.60 // Adiciona uma nova propriedade ao objeto

console.log(vitoria);

delete vitoria.idade; // Remove a propriedade 'idade' do objeto
console.log(vitoria); // Exibe o objeto após a remoção da propriedade


const pessoa = {
  nome: "Vitória",
  idade: 25,

  // Metodo para exibir informações do objeto
  exibirInfo: function() {
    console.log("Meu nome é " + this.nome + " e minha idade é: " + this.idade);
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // usa `
  }
};

pessoa.exibirInfo(); // Chama o método para exibir as informações da pessoa



// Acessando dinamicamente uma propriedade do objeto
const atributo = "nome";
console.log(pessoa[atributo]); // Exibe "Vitória"