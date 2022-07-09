let numero1 = Number(prompt('Dame un primer valor numérico'));
let numero2 = Number(prompt('Dame un segundo valor numérico'));
let numero3 = Number(prompt('Dame un tercer valor numérico'));

function numeroMax(pnumero1, pnumero2, pnumero3) {
    let numeroMax = Math.max(pnumero1, pnumero2, pnumero3);
    return numeroMax;
}

function numeroMin(pnumero1, pnumero2, pnumero3) {
    let numeroMin = Math.min(pnumero1, pnumero2, pnumero3);
    return numeroMin;
}

function numeroMed(pnumero1, pnumero2, pnumero3, pnumMax, pnumMin) {
    let numeroMed = (pnumero1 + pnumero2 + pnumero3) - pnumMax - pnumMin;
    return numeroMed;
}

function numerosDecrecientes(pnumero1, pnumero2, pnumero3, pnumMax, pnumMed, pnumMin) {
    document.write(`Orden inicial de los números introducidos: ${pnumero1}, ${pnumero2}, ${pnumero3}<br>`);
    document.write(`Orden decreciente de los números introducidos: ${pnumMax}, ${pnumMed}, ${pnumMin}`);
}

let numMax = numeroMax(numero1, numero2, numero3);
let numMin = numeroMin(numero1, numero2, numero3);
let numMed = numeroMed(numero1, numero2, numero3, numMax, numMin);
numerosDecrecientes(numero1, numero2, numero3, numMax, numMed, numMin);