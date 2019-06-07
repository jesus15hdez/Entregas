<?php
	include 'conexion.php';
	$con=conexion();
	$id=$_POST['a'];
	if(mysqli_query($con,"select * from entregados where id_ent like '$id'")){
		$resultado=$con->query("select * from entregados where id_ent like '$id'");
		$count= mysqli_num_rows($resultado);
		if($count == 0){
	  	echo 0;
		}else{
			echo "<table><tr><th>ID</th><th>Estado</th><th>Costo</th></tr>";
			while($reg=mysqli_fetch_array($resultado)){
				echo "<tr><td>".$reg[0]."</td><td>". $reg[1]."</td><td>".$reg[2]."</td></tr>";
			}
			echo "</table>";
		}
	}
	else {
		echo "Error: No tienes permisos para buscar registros";
	}
?>
