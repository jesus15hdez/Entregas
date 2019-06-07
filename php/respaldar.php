<?php
session_start();
$ruta=$_POST['ruta'];
$nombre=$_SESSION['user'];
$contraseña=$_SESSION['password'];
$dump = 'C:\xampp\mysql\bin\mysqldump'." -u$nombre -p$contraseña --routines --opt control_tienda > $ruta:\control_tienda.sql";
system($dump, $output);
if($output)
{
  echo "error";
}
  ?>
