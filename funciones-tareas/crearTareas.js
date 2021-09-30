function crearTarea(tarea, estado, tareasHastaAhora) {
  console.log(tareasHastaAhora);
  const nuevaTarea = {
    titulo: tarea, //limpiar baño
    estado: estado, // en proceso
  };
  tareasHastaAhora.push(nuevaTarea); // meto la nueva tarea(objeto) al array de objetos original
  console.log(tareasHastaAhora);
  const arrayJson = JSON.stringify(tareasHastaAhora, null, 4); //null no se, y el 4 para tabular .json
  console.log(arrayJson);
  const fs = require("fs");
  fs.writeFileSync("./tareas.json", arrayJson);
}

module.exports = crearTarea;
