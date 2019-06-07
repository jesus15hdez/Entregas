<?php
	include 'conexion.php';
	$con=conexion();
	$id=$_POST['idm'];
	$costo=$_POST['costom'];
	$estado=$_POST['estadom'];
	if(!mysqli_query($con,"CALL modificar ($id, '$estado', $costo)")){
		echo("Error: No tienes permisos para modificar registros");
	}
	else {
		$resultado=$con->query("select * from entregas where id_ent like '$id'");
		echo "<table><tr><th>ID</th><th>Estado</th><th>Costo</th></tr>";
		while($reg=mysqli_fetch_array($resultado)){
			echo "<tr><td>".$reg[0]."</td><td>". $reg[1]."</td><td>".$reg[2]."</td></tr>";
		}
		echo "</table>";
	}
?>
