<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');

include("funkcije.php");
echo getRooms();
?>