const nivelenergia = parseFloat(prompt(" Ingrese el nivel de energia que crees tener (0-10)"));
const clima = prompt("Esta haciendo un buen clima? (si/no):").toLowerCase() === 'si';
const trabajo = prompt("Tienes trabajos que hacer?  (true/false)") === 'true';

if(!nivelenergia || nivelenergia <= 3){
    console.log("Energia baja o no escrita correctamente. Deberias tomar el dia libre");
}else if(trabajo){
    console.log("Carga de trabajo alta, deberias quedarte en casa haciendo tus proyectos");
}else if(clima){
    console.log("Hace un buen dia. Deberias salir a correr");
}else{
    console.log("No esta haciendo un buen dia, lo mejor es tomarse el dia en casa");
}