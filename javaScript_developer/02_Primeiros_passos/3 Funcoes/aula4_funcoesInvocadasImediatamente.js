function main() {
    console.log("Programa principal");}

main();




// Imediately Invoked Function Expression (IIFE)
(function() {
    console.log("Função invocada imediatamente");
})(); // Chama a função imediatamente após sua definição

// Exemplo de IIFE com parâmetros
(function(nome) {   
    console.log("Olá, " + nome + "!");
})("João"); // Passa "João" como argumento para a função imediatamente invocada 


