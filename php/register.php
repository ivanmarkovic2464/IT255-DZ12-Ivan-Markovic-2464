<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("funkcije.php");
include("conn.php");
if(isset($_POST['k_ime']) && isset($_POST['lozinka']) && isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['email'])){
	
$k_ime = $_POST['k_ime'];
$lozinka = md5($_POST['lozinka']);
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$email = $_POST['email'];

echo register($k_ime, $lozinka, $ime, $prezime, $email);
}
?>
