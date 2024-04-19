const presupuestodiario = parseFloat(prompt("Ingrese su presupuesto diario. "));
const costocomida = parseFloat(prompt("Ingrese el costo estimado de comer fuera"));
const costolibro = parseFloat(prompt("Ingrese el costo estimado de comprar un libro"));
const minimoahorro = parseFloat(prompt("Ingrese el minimo de ahorro que le gustaria alcanzar"));

const presupuestorestante = presupuestodiario - costocomida - costolibro;

if(presupuestorestante >= 0){
    if(presupuestorestante >= minimoahorro){
        alert(`Puedes permitirte comer afuera y comprar un libro. Presupuesto restante: ${presupuestorestante}`);
    }else{
        alert(`Puedes comer afuera y comprar un libro pero no alcanzaras tu objetivo de ahorro diario. Presupuesto restante: ${presupuestorestante}`);
    }
}else if(presupuestodiario >= costocomida && presupuestodiario < costolibro){
    alert(`Puedes comer afuera pero no comprar un libro. Presupuesto restante: ${presupuestorestante}.`);
}else if(presupuestodiario < costocomida && presupuestodiario >= costolibro){
    alert(`Puedes comprar un libro pero no comer afuera. Presupuesto restante: ${presupuestorestante}.`);
}else{
    alert(`No puedes comer afuera ni comprar un libro. Presupuesto restante: ${presupuestorestante}.`);
}