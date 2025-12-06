function bloquear(id) {
  const elemento = document.getElementById(id);

  if (elemento.classList.contains("bloqueada")) {
    alert("Este material ya está bloqueado");
  } else {
    elemento.classList.add("bloqueada");
    alert("Material bloqueado");
  }
}
