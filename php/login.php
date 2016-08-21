<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("conn.php");
include("funkcije.php");
if(isset($_POST['k_ime']) && isset($_POST['lozinka'])){
	
$k_ime = $_POST['k_ime'];
$lozinka = $_POST['lozinka'];

echo login($k_ime,$lozinka);
}

?>

