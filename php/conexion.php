<?php
  function conexion(){
    session_start();
	  $con=new mysqli("localhost",$_SESSION["user"],$_SESSION["password"],"control_tienda");
	  if($con-> connect_errno){
		    echo "Error al conectar con la base de datos.";
	  }
	  else
	  {
		  return $con;
	  }
  }
?>
