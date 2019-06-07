function agregar() {
  if ($("#costoText").val() == "") {
    alert("Ingresa el costo del envio.");
  } else {
    var informacion = $("#agregar").serialize();
    $("#costoText").val('');
    $.ajax({
      type: "POST",
      url: "php/agregar.php",
      data: informacion,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        $("#resultado").empty();
        $("#resultado").append(data);
      }
    })
  }
};

function eliminar() {
  if ($("#ide").val() == "") {
    alert("Ingresa el id del envio.");
  } else {
    var informacion = $("#ide").val();
    $("#ide").val('');
    $.ajax({
      type: "POST",
      url: "php/eliminar.php",
      data: "a=" + informacion,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        $("#resultado").empty();
        $("#resultado").append(data);
      }
    })
  }
};

function modificar() {
  $("#idm").prop("disabled", false);
  if ($("#idm").val() == "" || $("#costom").val() == "") {
    alert("Ingresa los campos requeridos.");
  } else {
    var informacion = $("#modificar1").serialize();
    $("#idm").val('');
    $("#costom").val('');
    $("#idm").prop("disabled", true);
    $.ajax({
      type: "POST",
      url: "php/modificar.php",
      data: informacion,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        $("#resultado").empty();
        $("#resultado").append(data);
        $("#idm").prop("disabled", false);
        $("#costom").prop("disabled", true);
        $("#listam").prop("disabled", true);
      }
    })
  }
};

$("#ide").keyup(function(e) {
  if (e.which != 13) {
    var id = $("#ide").val();
    if(id != ""){
    $.ajax({
      type: "POST",
      url: "php/consultar.php",
      data: "a=" + id,
      dataType: "html",
      error: function() {
        alert("error de peticion de ajax");
      },
      success: function(data) {
        if (data != 0) {
          $("#resultado").empty();
          $("#resultado").append(data);
        } else {
          $("#resultado").empty();
          $("#resultado").load("html/imagen2.html");
        }
      }
    })
  }
  }
});

$("#busqueda").click(function(e) {
  var id = $("#idm").val();
  $.ajax({
    type: "POST",
    url: "php/consultar.php",
    data: "a=" + id,
    dataType: "html",
    error: function() {
      alert("error de peticion de ajax");
    },
    success: function(data) {
      if (data != 0) {
        $("#resultado").empty();
        $("#resultado").append(data);
        $("#idm").prop("disabled", true);
        $("#listam").prop("disabled", false);
        $("#costom").prop("disabled", false);
        $("#activar").prop("disabled", false);
      }
    }
  })
});
