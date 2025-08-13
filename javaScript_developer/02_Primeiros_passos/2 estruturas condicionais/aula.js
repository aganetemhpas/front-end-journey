const camisetaRenanAzul = true;
const camisetaJoaoAzul = false;


if (camisetaRenanAzul && camisetaJoaoAzul) {
    console.log("Ambos estão de camiseta azul");
}

if (camisetaRenanAzul || camisetaJoaoAzul) {
    console.log("Pelo menos um está de camiseta azul");
}

const numero = 14;
const eNumeroDivisivelpor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log(`Número ${numero} é zero`);
} 

else if (eNumeroDivisivelpor5) {
    console.log(`O número ${numero} é divisível por 5 e é ímpar`);
}

else {
    console.log(`O número ${numero} não é divisível por 5 e é ímpar`);
}