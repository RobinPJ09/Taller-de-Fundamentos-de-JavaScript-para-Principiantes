const clima = prompt("Ingrese el clima: (despejado / lluvia)").toLowerCase();
const espaciomaleta = parseFloat(prompt("Ingrese el espacio disponible en su maleta"));
const espaciopermitido = parseFloat(prompt("Ingrese el espacio total permitido del viaje"));


    const articulo = prompt("Ingrese el articulo que desea llevar:");
    const espacioarticulo = parseFloat(prompt("Ingrese el espacio que ocupa el articulo:"));


function puedellevar(clima, pesodisp, pesomax, pesoarticulo){
    if(clima === 'lluvia' && articulo !== 'paraguas'){
        alert("El pronostico es lluvia, por lo cual debes llevar paraguas");
        return false;
    }

    if(pesodisp < pesoarticulo || pesomax < pesoarticulo){
        alert("El articulo no puede ser llevado");
        return false;
    }
    return true;
}

if(puedellevar(clima, espaciomaleta, espaciopermitido, espacioarticulo)){
    alert(`El articulo ${articulo} puede ser llevado`);

}else{
    alert(`El articulo ${articulo} no puede ser llevado`);
}