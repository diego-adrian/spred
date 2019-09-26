function mostrarMenu () {
  if (document.getElementById('menuLateral').classList.contains('mostrarMenuMobile')) {
    document.getElementById('menuLateral').classList.remove('mostrarMenuMobile');
  } else {
    document.getElementById('menuLateral').classList.add('mostrarMenuMobile');
  }
}
function ocultarMenu () {
  document.getElementById('menuLateral').classList.remove('mostrarMenuMobile');
}