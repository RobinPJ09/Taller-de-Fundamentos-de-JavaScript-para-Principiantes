const destino=prompt("Ingresa tu lugar de destino")
let presupuesto = prompt("Ingrese su presupuesto")
let dias = prompt("Ingrese la duracion de su viaje")
let costo = prompt("Ingrese el gasto por dia de su viaje");

const costoestimado = dias * costo;

alert(`Destino: ${destino}\n Presupuesto: ${presupuesto}\n Duracion del viaje: ${dias}\n Costo por dia: ${costo}`);

if(presupuesto>=costoestimado){
    alert("Tienes suficiente dinero para tu viaje")
}else{
    alert("Tienes el presupuesto insuficiente para tu viaje, te sugiero ajustar tu presupuesto o los dias de tu viaje")
}