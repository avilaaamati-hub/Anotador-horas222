let horas = 0;

function actualizar() {
  document.getElementById("contador").innerText = horas;
}

function sumar() {
  horas++;
  actualizar();
}

function restar() {
  if (horas > 0) {
    horas--;
    actualizar();
  }
}
