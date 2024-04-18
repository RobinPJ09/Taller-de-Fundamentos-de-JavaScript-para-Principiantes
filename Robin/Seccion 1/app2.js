
const nombres = [];
const costos = [];
const disponibles = [];

for (let i = 0; i < 3; i++) {
    const nombre = prompt("Ingrese el nombre del souvenir:");
    const costo = parseFloat(prompt("Ingrese el costo del souvenir:"));
    const disponible = prompt("El souvenir está disponible? (true/false):") === 'true';

    nombres.push(nombre);
    costos.push(costo);
    disponibles.push(disponible);

    alert(`Souvenir "${nombre}" agregado correctamente.`);
}

let lista = "LISTA DE SOUVENIRS\n\n";

for (let i = 0; i < nombres.length; i++) {
    lista += `Souvenir ${i + 1}:\n`;
    lista += `Nombre: ${nombres[i]}\n`;
    lista += `Costo: ${costos[i]} dólares\n`;
    lista += `Disponible: ${disponibles[i] ? 'Sí' : 'No'}\n\n`;
}

alert(lista);

const presupuestoDisponible = parseFloat(prompt("Ingrese su presupuesto disponible en dólares:"));
let recomendados = "Souvenirs recomendados para comprar:\n\n";

for (let i = 0; i < nombres.length; i++) {
    if (disponibles[i] && costos[i] <= presupuestoDisponible) {
        recomendados += - `${nombres[i]}\n`;
    }
}

alert(recomendados);