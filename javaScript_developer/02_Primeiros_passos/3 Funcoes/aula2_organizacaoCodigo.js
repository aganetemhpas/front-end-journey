
function incrementarJuros (valor, percentualJuros) {
    const juros = (percentualJuros / 100) * valor; // Calcula os juros
    return valor + juros; // Retorna o valor com os juros adicionados
}


function main() {
   console.log("Progrmaa principal");
   console.log(incrementarJuros(100, 10));
}

main();