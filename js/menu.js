function menu(opc) {
  switch (opc) {
    case 1:
      $(document).ready(function() {
        $("#informacion").load("html/agregar.html");
        $("#resultado").load("html/imagen1.html");
      });
      break;
    case 2:
      $(document).ready(function() {
        $("#informacion").load("html/eliminar.html");
        $("#resultado").load("html/imagen2.html");
      });
      break;
    case 3:
      $(document).ready(function() {
        $("#informacion").load("html/modificar.html");
        $("#resultado").load("html/imagen3.html");
      });
      break;
    case 4:
			$(document).ready(function(){
				$("#informacion").load("html/herramientas.html");
				$("#resultado").load("html/fondoInicial.html");
			});
      break;
  }
}
