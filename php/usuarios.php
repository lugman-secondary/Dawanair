<?php
  include("conexion.php");

  if (isset($_POST["nam"])) {
    $name = $_POST["nam"];
    $apellidos = $_POST["ape"];
    $email = $_POST["ema"];
    $movil = $_POST["pho"];
    $pais = $_POST["coun"];
    $sexo = $_POST["sex"];
    $usuario = $_POST["use"];
    $contraseña = $_POST["pas"];

  }else {
    echo "error";
  }


  $orden = 'INSERT INTO `Usuarios`(`Nombre`, `Apellidos`, `Telefono`, `Email`, `Sexo`, `Usuario`, `Contrasenia`) VALUES
  ("'.$name.'","'.$apellidos.'","'.$email.'","'.$movil.'","'.$sexo.'","'.$usuario.'","'.$contraseña.'")';



   if (mysqli_query($conexion,$orden)) {
     echo "Nada encontrado";
   }elseif ($usuarios->num_rows == 0) {
     echo "Error".mysqli_error($conexion);
   }

  while ($fila = mysqli_fetch_array($usuarios)) {
    echo "Nombre  ".$fila["Nombre"]."<br />";
  }
  mysqli_close($conexion);





 ?>
