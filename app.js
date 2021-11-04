// Ingresos
let income = prompt('¿Cuánto es el ingreso?');
// Costos
let costs = prompt('¿Cuánto es el costo?');
// Porcentaje de impuestos
let taxPercent= prompt('¿Cuánto es el porcentaje de impuestos?');
// Ganancia bruta
let grossProfit = income - costs;
// Obteniendo cantidad de impuestos
let tax = grossProfit*taxPercent/100;
// Ganancia neta
let netIncome = grossProfit - tax;
// Mostrando ganancia neta en documento
document.write('Tu ganancia neta es $' + netIncome);