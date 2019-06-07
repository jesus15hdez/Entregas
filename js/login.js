function acceder() {
  if ($("#usuario").val() == "" || $("#contrasena").val() == "") {
    alert("Llena los campos requeridos.");
  } else {
    var informacion = $("#validarUsuario").serialize();
    $.ajax({
      type: "POST",
      url: "php/login.php",
      data: informacion,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data){
        if (data != 1 && data != 2) {
          alert("Usuario o contraseña incorrectos, o no tienes privilegios para entrar.");
        } else if(data == 1){
          $("#informacion").load("html/fondoInicial.html");
          $("#encabezado").load("html/encabezadoNormal.html");
        }
        else if (data == 2) {
          $("#informacion").load("html/fondoInicial.html");
          $("#encabezado").load("html/encabezadoAdmin.html");
        }
      }
    })
  }
};
