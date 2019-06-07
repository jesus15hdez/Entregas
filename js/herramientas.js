function usuario(opc) {
  switch (opc) {
    case 1:
      $(document).ready(function() {
        $("#resultado").load("html/agregarUsuario.html");
      });
      break;
    case 2:
      $(document).ready(function() {
        $("#resultado").load("html/eliminarUsuario.html");
      });
      break;
    case 3:
      $(document).ready(function() {
        $("#resultado").load("html/modificarUsuario.html");
      });
  }
}
