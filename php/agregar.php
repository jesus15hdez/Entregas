<?php
	include 'conexion.php';
	$con=conexion();
	$costo=$_POST['costo'];
	$estado=$_POST['estado'];
	if(!mysqli_query($con,"call anadir ('$estado', $costo)")){
		echo("Error: No tienes permisos para añadir registros");
	}
	else{
		$resultado=$con->query("select * from entregados");
		echo "<table><tr><th>ID</th><th>Estado</th><th>Costo</th></tr>";
		while($reg=mysqli_fetch_array($resultado)){
			echo "<tr><td>".$reg[0]."</td><td>". $reg[1]."</td><td>".$reg[2]."</td></tr>";
		}
		echo "</table>";
	}
?>
