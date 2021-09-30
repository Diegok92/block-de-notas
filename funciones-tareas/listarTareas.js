function listarTareas(tareas) {
  tareas.forEach(function (valor) {
    const mostrarTarea = "[" + valor.estado + "] " + valor.titulo;
    console.log(mostrarTarea);
  });

  //for (let i = 0; i < tareas.length; i++) {
  //  const muestraTarea = "[" + tareas[i].estado + "] " + tareas[i].titulo;
  //  console.log(muestraTarea);
  //}
}

module.exports = listarTareas;
