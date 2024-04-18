const presupuestoinicial = parseFloat(prompt("Ingrese su presupuesto inicial"));
const costoalojamiento = parseFloat(prompt("Ingrese el costo del alojamiento"));
const costotransporte = parseFloat(prompt("Ingrese el costo del transporte"));
const costocomida = parseFloat(prompt("Ingrese el costo de la comida"));

const costotal = costoalojamiento + costotransporte + costocomida;

const opcionesextras = parseInt(prompt("Ingrese la cantidad de articulos a considerar"));
const Opcionextra = [];

for (let i = 0;i<opcionesextras;i++){
    const nombrearticulo = prompt(`Ingrese el nombre del articulo ${i+1}: `);
    const valorarticulo = parseFloat(prompt(`Ingrese el valor del articulo ${i+1}: `));

    Opcionextra.push({
        nombre: nombrearticulo,
        costo: valorarticulo});
}

const presupuestorestante = presupuestoinicial - costotal;

let mensaje = `El presupuesto restante despues de cubrir los gastos basicos ${presupuestorestante}: \n\n`;

let mejor = null;
let costomejor = Infinity;

Opcionextra.forEach((opcion) => {
    if(opcion.costo <= presupuestorestante && opcion.costo < costomejor){
        mejor = opcion.nombre;
        costomejor = opcion.costo;
    }
});

if(mejor){
    mensaje += `Puedes considerar comprar el articulo extra "${mejor}" por ${costomejor} `;
}else{
    mensaje += "Te recomiendo no hacer gastos adicionales ya que excede tu presupuesto";
}

alert(mensaje);