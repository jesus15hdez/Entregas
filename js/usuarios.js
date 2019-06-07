function validarExistenciaUsuario() {
  if ($("#nameUser3").val() != "") {
    var nombre = $("#nameUser3").val();
    $.ajax({
      type: "POST",
      url: "php/validarExistenciaUsuario.php",
      data: "nombre=" + nombre,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        if (data == 0) {
          alert("El usuario " + nombre + " no existe.")
          $("#nameUser3").val("");
        } else if (data == 1) {
          $("#nameUser3").prop("disabled", true);
          $("#newNameUser").prop("disabled", false);
          $("#pwd3").prop("disabled", false);
          $("#privilegio6").prop("disabled", false);
          $("#privilegio7").prop("disabled", false);
          $("#privilegio8").prop("disabled", false);
          $("#privilegio9").prop("disabled", false);
          $("#privilegio10").prop("disabled", false);
          $("#modificarUsuarioB").prop("disabled", false);
          $("#newNameUser").focus();
        }
      }
    });
  }
};

$('#nameUser3').keypress(function(e) {
  if (e.which == 13) {
    validarExistenciaUsuario();
    return false;
  } else if (e.which == 32) {
    return false;
  }
});

function crearUsuario() {
  if ($("#nameUser").val() == "" || $("#pwd").val() == "") {
    alert("El nombre de usuario y la contraseña son obligatorios");
  } else {
    var informacion = $("#usuarioForm").serialize();
    var p1 = "",
      p2 = "",
      p3 = "",
      p4 = "",
      p5 = "";
    if ($("#privilegio1").prop('checked')) {
      p1 = "" + $("#privilegio1").val();
    }
    if ($("#privilegio2").prop('checked')) {
      p2 = "" + $("#privilegio2").val();
    }
    if ($("#privilegio3").prop('checked')) {
      p3 = "" + $("#privilegio3").val();
    }
    if ($("#privilegio4").prop('checked')) {
      p4 = "" + $("#privilegio4").val();
    }
    if ($("#privilegio5").prop('checked')) {
      p5 = "" + $("#privilegio5").val();
    }
    $.ajax({
      type: "POST",
      url: "php/crearUsuario.php",
      data: informacion + "&p1=" + p1 + "&p2=" + p2 + "&p3=" + p3 + "&p4=" + p4 + "&p5=" + p5,
      dataType: "html",
      error: function() {
        alert("Error de peticion de ajax");
      },
      success: function(data) {
        if (data == 1) {
          alert("Error: El nombre de usuario ya está en uso.");
        } else {
          alert("Usuario creado satisfactoriamente.");
          $("#nameUser").val("");
          $("#pwd").val("");
          $("#privilegio1").prop("checked", false);
          $("#privilegio2").prop("checked", false);
          $("#privilegio3").prop("checked", false);
          $("#privilegio4").prop("checked", false);
          $("#privilegio5").prop("checked", false);
        }
      }
    })
  }
};

function eliminarUsuario() {
  if ($("#nameUser2").val() == "") {
    alert("No has ingresado el nombre de usuario");
  } else if ($("#nameUser2").val() == "root") {
    alert("NO PUEDES ELIMINAR AL USUARIO ROOT");
  } else {
    var nombre = $("#nameUser2").val();
    $.ajax({
      type: "POST",
      url: "php/eliminarUsuario.php",
      data: "nombre=" + nombre,
      dataType: "html",
      error: function() {
        alert("Error de peticion de ajax");
      },
      success: function(data) {
        if (data == 1) {
          alert("Error: El usuario " + nombre + " no existe.");
        } else {
          alert("Usuario eliminado satisfactoriamente.");
          $("#nameUser2").val("");
        }
      }
    })
  }
};

function modificarUsuario() {
  if ($("#newNameUser").val() == "" || $("#pwd3").val() == "") {
    alert("El nombre de usuario o la Contraseña no pueden quedar en blanco.");
  } else {
    var nombreAnterior = $("#nameUser3").val();
    var nombre = $("#newNameUser").val();
    var contrasena = $("#pwd3").val();
    var p1 = "",
      p2 = "",
      p3 = "",
      p4 = "",
      p5 = "";
    if ($("#privilegio6").prop('checked')) {
      p1 = "" + $("#privilegio6").val();
    }
    if ($("#privilegio7").prop('checked')) {
      p2 = "" + $("#privilegio7").val();
    }
    if ($("#privilegio8").prop('checked')) {
      p3 = "" + $("#privilegio8").val();
    }
    if ($("#privilegio9").prop('checked')) {
      p4 = "" + $("#privilegio9").val();
    }
    if ($("#privilegio10").prop('checked')) {
      p5 = "" + $("#privilegio10").val();
    }
    $.ajax({
      type: "POST",
      url: "php/modificarUsuario.php",
      data: "nombreAnterior=" + nombreAnterior + "&nombre=" + nombre + "&contraseña=" + contrasena + "&p1=" + p1 + "&p2=" + p2 + "&p3=" + p3 + "&p4=" + p4 + "&p5=" + p5,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        if (data == 1) {
          alert("Usuario modificado con exito.");
          $("#nameUser3").val("");
          $("#newNameUser").val("");
          $("#newNameUser").prop("disabled", true);
          $("#pwd3").val("");
          $("#pwd3").prop("disabled", true);
          $("#privilegio10").prop("checked", false);
          $("#privilegio10").prop("disabled", true);
          $("#privilegio6").prop("checked", false);
          $("#privilegio7").prop("disabled", true);
          $("#privilegio7").prop("checked", false);
          $("#privilegio8").prop("disabled", true);
          $("#privilegio8").prop("checked", false);
          $("#privilegio9").prop("disabled", true);
          $("#privilegio9").prop("checked", false);
          $("#privilegio10").prop("disabled", true);
          $("#modificarUsuarioB").prop("disabled", true);
          $("#nameUser3").prop("disabled", false);
        } else if (data == 0) {
          alert("Error Fatal. Vuelva e crear el usuario.");
        }
      }
    });
  }
};
