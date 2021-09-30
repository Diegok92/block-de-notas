const listarTareas = require("./listarTareas");

function filtrarPorEstado(tareas, estadoAFiltirar) {
  let filtrado = tareas.filter(function (tareas) {
    return tareas.estado == estadoAFiltirar;
  });
  listarTareas(filtrado);
}

module.exports = filtrarPorEstado;
