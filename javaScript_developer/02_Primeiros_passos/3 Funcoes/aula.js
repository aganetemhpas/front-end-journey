function teste() {
    console.log('Teste');
}

teste();


function sayMyName(name) {
    console.log('Meu nome é ' + name); // Função que recebe um parâmetro e imprime uma mensagem sem retornar nada
}

sayMyName('João');
sayMyName('Maria');

function quadrado(valor) {
    return valor * valor; // Função que recebe um valor e retorna o quadrado desse valor
}

console.log(quadrado(5));
console.log(quadrado(10));


function incrementarJuros (valor, percentualJuros) {
    const juros = (percentualJuros / 100) * valor; // Calcula os juros
    return valor + juros; // Retorna o valor com os juros adicionados
}

console.log(incrementarJuros(100, 10)); // Exibe o resultado da