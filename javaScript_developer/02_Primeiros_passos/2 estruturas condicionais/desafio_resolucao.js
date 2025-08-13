const precoEtanol = 4.59;
const precoGasolina = 5.79;
const tipoDeCombustivel = "etanol";
const kmPorLitros = 10;
const distanciaEmKm = 100;

if (tipoDeCombustivel === "etanol") {
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`O valor gasto em ${distanciaEmKm}km, utilizando etanol é de R$${valorGasto.toFixed(2)}`);
}
else if (tipoDeCombustivel === "gasolina") {
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`O valor gasto em ${distanciaEmKm}km, utilizando gasolina é de R$${valorGasto.toFixed(2)}`);
}
else {
    console.log("Tipo de combustível inválido");
}



