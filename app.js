//guardo el cont del archivo tareas.json en una const "tareasJSON" (trae la info como string)
const fs = require("fs");
const tareasJSON = fs.readFileSync("tareas.json");
//console.log(tareasJSON); //duda por q se ve asi?
//ahora, dicho string lo paso a un array de js y lo guardo en "tareas" (array de objetos)
const tareas = JSON.parse(tareasJSON);
//en la const tareas tengo el array de obj q esta en tareas.json
// ahora quiero mostrar en terminal con el sig formato:
// [pendiente] limpiar depto, para hacerlo, debo recorrer el array de objetos "tareas"

const listarTareas = require("./funciones-tareas/listarTareas");
const crearTarea = require("./funciones-tareas/crearTareas");

//ahora leo por consola y actuo en consecuencia:
//"node app.js crear "limpiar baño" "en proceso""
// [ 0     1       2         3             4]
const action = process.argv[2];
switch (action) {
  case "crear":
    crearTarea(process.argv[3], process.argv[4], tareas); // (tarea, estado)
    break;
  case "listar":
    listarTareas(tareas);
    break;
  case undefined:
    console.log("Atención - Tenes q escribir una accion");
    break;
  default:
    console.log("No entiendo que queres hacer");
}

//pendiente borrar y cambio de estado
