<?php
/*session_start();*/
include 'conexionMYSQL.php';
$con=conexion();
$dbHost     = 'localhost';
$dbUsername = $_SESSION['user'];
$dbPassword = $_SESSION['password'];
$dbName     = 'control_tienda';
$filePath   = $_POST['ruta'].':\control_tienda.sql';
$con->query("drop database control_tienda");
if(!mysqli_query($con,"create database control_tienda")){
  echo("Error description: " . mysqli_error($con));
}
$dump = 'C:\xampp\mysql\bin\mysql'." -u".$_SESSION['user']." -p".$_SESSION['password']." control_tienda < $filePath";
system($dump, $output);
if($output)
{
  echo "error";
}
?>
