<?php
include 'conexionMYSQL.php';
$con=conexion();
$nombre=$_POST['nameUser'];
$contraseña=$_POST['pwd'];
$p1=$_POST['p1'];
$p2=$_POST['p2'];
$p3=$_POST['p3'];
$p4=$_POST['p4'];
$p5=$_POST['p5'];
$verificarNombre=$con->query("select * from user where user like '$nombre'");
$count = mysqli_num_rows($verificarNombre);
if($count<1){
	$con->query("create user '$nombre'@'localhost' IDENTIFIED BY '$contraseña'");

	if($p1=="select"){
		$con->query("GRANT select ON control_tienda.entregas TO '$nombre'@'localhost'");
		$con->query("GRANT select ON control_tienda.entregados TO '$nombre'@'localhost'");
	}
	if($p2=="insert"){
		$con->query("GRANT insert ON control_tienda.entregas TO '$nombre'@'localhost'");
		$con->query("GRANT execute ON PROCEDURE control_tienda.anadir TO '$nombre'@'localhost'");
	}
	if($p3=="update"){
		$con->query("GRANT update ON control_tienda.entregas TO '$nombre'@'localhost'");
		$con->query("GRANT execute ON PROCEDURE control_tienda.modificar TO '$nombre'@'localhost'");
	}
	if($p4=="delete"){
		$con->query("GRANT delete ON control_tienda.entregas TO '$nombre'@'localhost'");
		$con->query("GRANT execute ON PROCEDURE control_tienda.eliminar TO '$nombre'@'localhost'");
	}
	if($p5=="file"){
		$con->query("GRANT file ON control_tienda.entregas TO '$nombre'@'localhost'");
	}
}
else {
	echo 1;
}
 ?>
