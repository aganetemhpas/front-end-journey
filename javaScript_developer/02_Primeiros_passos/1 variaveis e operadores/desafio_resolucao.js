// Variaveis

const precoGasolina = 5.79;
const kmPorLitros = 10;
let distanciaPercorridaEmKm = 100;

let valorGasto = (distanciaPercorridaEmKm / kmPorLitros) * precoGasolina;
console.log("Valor gasto com gasolina:", valorGasto.toFixed(2));