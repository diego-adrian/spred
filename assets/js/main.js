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

$(document).scroll(function () {
  var element = document.getElementById('menuNavegacion');
  if (window.scrollY > 600) {
    $('#menuNavegacion').addClass('backgroundBlue');
  } else {
    $('#menuNavegacion').removeClass('backgroundBlue');
  }
});