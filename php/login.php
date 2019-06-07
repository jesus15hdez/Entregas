<?php
  session_start();
  $_SESSION["user"]=$_POST['usuario'];
  $_SESSION["password"]=$_POST['contrasena'];
  $con=new mysqli("localhost",$_SESSION["user"],$_SESSION["password"],"control_tienda");
  if($con-> connect_errno){
	  echo 0;
  }
  else
  {
	  if ($_SESSION["user"]=="root") {
      echo 2;
    }
    else {
      echo 1;
    }
  }
?>
