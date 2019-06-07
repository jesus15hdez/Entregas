<?php
include 'conexionMYSQL.php';
$con=conexion();
$nombre=$_POST['nombre'];
$verificarNombre=$con->query("select * from user where user like '$nombre'");
$count = mysqli_num_rows($verificarNombre);
if($count==1){
	$con->query("drop user '$nombre'@'localhost'");
}
else {
	echo 1;
}
?>
