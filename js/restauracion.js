function restaurarDatos() {
  if ($("#ruta2").val() == "") {
    alert("No has ingresado la ruta donde se encuentra el archivo de respaldo.");
  } else {
    var ruta = $("#ruta2").val();
    $.ajax({
      type: "POST",
      url: "php/restaurar.php",
      data: "ruta=" + ruta,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        if (data == "") {
          alert("La restauracion se ha completado exitosamente.");
          $("#ruta2").val("");
        } else {
          alert("No existe el archivo de su respaldo.");
        }
      }
    })
  }
}

$("#ruta2").keypress(function(e) {
  if (e.which == 13) {
    restaurarDatos();
    return false;
  } else if (e.which >= 48 && e.which <= 57) {
    return false;
  }
});
