$(document).ready(function() {
  $('#usuario').keypress(function(e) {
    if (e.which == 13) {
      $('#contrasena').focus();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#contrasena').keypress(function(e) {
    if (e.which == 13) {
      $('#accederB').click();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#ide').keypress(function(e) {
    if (e.which == 13) {
      eliminar();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#costoText').keypress(function(e) {
    if (e.which == 13) {
      agregar();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#idm').keypress(function(e) {
    if (e.which == 13) {
      $('#busqueda').click();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#nameUser').keypress(function(e) {
    if (e.which == 13) {
      $('#pwd').focus();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#nameUser2').keypress(function(e) {
    if (e.which == 13) {
      $('#eliminarUsuarioB').click();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#newNameUser').keypress(function(e) {
    if (e.which == 13) {
      $('#pwd3').focus();
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#pwd').keypress(function(e) {
    if (e.which == 13) {
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });

  $('#pwd3').keypress(function(e) {
    if (e.which == 13) {
      return false;
    }
    else if (e.which == 32) {
      return false;
    }
  });
});
