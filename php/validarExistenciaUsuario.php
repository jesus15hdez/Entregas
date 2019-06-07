<?php
include 'conexionMYSQL.php';
$con=conexion();
$nombre=$_POST['nombre'];
$verificarNombre=$con->query("select * from user where user like '$nombre'");
$count = mysqli_num_rows($verificarNombre);
if ($count == 0) {
  echo 0;
} else {
  $_SESSION['nombreAnterior']=$nombre;
  echo 1;
}
