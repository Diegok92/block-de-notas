function listarTareas(tareas) {
  for (let i = 0; i < tareas.length; i++) {
    const muestraTarea = "[" + tareas[i].estado + "] " + tareas[i].titulo;
    console.log(muestraTarea);
  }
}

module.exports = listarTareas;
