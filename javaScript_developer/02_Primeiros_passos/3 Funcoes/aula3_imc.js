function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function main() {
    let peso = 70; // em kg
    let altura = 1.63; // em metros
    let imc = calcularIMC(peso, altura);
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log("Classificação: " + classificarIMC(imc));
}

main();

