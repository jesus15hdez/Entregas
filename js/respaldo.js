function respaldo() {
  if ($("#ruta").val() == "") {
    alert("No has ingresado la ruta donde se guardara tu respaldo.");
  } else {
    var ruta = $("#ruta").val();
    $.ajax({
      type: "POST",
      url: "php/respaldar.php",
      data: "ruta=" + ruta,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        if (data == "") {
          alert("Respaldo creado en su unidad " + ruta.toUpperCase() + " exitosamente.");
		  $("#ruta").val("");
        } else {
          alert("No existe la unidad de memoria para almacenar su respaldo.");
        }
      }
    })
  }
}

$("#ruta").keypress( function(e) {
  if(e.which == 13){
    respaldo();
    return false;
  }
  if(e.which >=48 && e.which <=57){
    return false;
  }
});
