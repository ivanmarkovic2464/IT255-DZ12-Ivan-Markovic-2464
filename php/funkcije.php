<?php
	
	include("conn.php");
	
function checkIfLoggedIn(){
global $conn;
if(isset($_SERVER['HTTP_TOKEN'])){
$token = $_SERVER['HTTP_TOKEN'];
$result = mysqli_query($conn, "SELECT * FROM korisnici WHERE token='$token'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}
else{
return false;
}
}


function login($k_ime, $lozinka){
global $conn;
$rarray = array();
if(checkLogin($k_ime,$lozinka)){
$id = sha1(uniqid());
$result2 = mysqli_query($conn,"UPDATE korisnici SET `token`='$id' WHERE `Korisnicko ime`='$k_ime'");
$rarray['token'] = $id;
} else{
$rarray['error'] = "Nevažeće korisničko ime ili lozinka!";
}
return json_encode($rarray);
}


function checkLogin($k_ime, $lozinka){
global $conn;
$k_ime = mysqli_real_escape_string($conn,$k_ime);
$lozinka = md5(mysqli_real_escape_string($conn,$lozinka));
$result = mysqli_query($conn, "SELECT * FROM korisnici WHERE `Korisnicko ime`='$k_ime' AND `Lozinka`='$lozinka'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}


function register($k_ime, $lozinka, $ime, $prezime, $email){
global $conn;
$rarray = array();
$errors = "";
if(checkIfUserExists($k_ime)){
$errors .= "Username already exists\r\n";
}
if(strlen($k_ime) < 4){
$errors .= "Username must have at least 4 characters\r\n";
}
if(strlen($lozinka) < 4){
$errors .= "Password must have at least 4 characters\r\n";
}
if(strlen($ime) < 3){
$errors .= "First name must have at least 3 characters\r\n";
}
if(strlen($prezime) < 3){
$errors .= "Last name must have at least 3 characters\r\n";
}
if($errors == ""){
$stmt = $conn->prepare("INSERT INTO korisnici (korisnicko ime, lozinka, ime, prezime, email) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $k_ime, md5($lozinka), $ime, $prezime, $email);
if($stmt->execute()){
$id = sha1(uniqid());
$result2 = mysqli_query($conn,"UPDATE korisnici SET token='$id' WHERE `Korisnicko ime`='$k_ime'");
$rarray['token'] = $id;
}else{
$rarray['error'] = "Konekcija sa bazom nije uspostavljena";
}
} else{
$rarray['error'] = json_encode($errors);
}
return json_encode($rarray);
}

function checkIfUserExists($k_ime){
global $conn;
$result = mysqli_query($conn, "SELECT * FROM `korisnici` WHERE `Korisnicko ime`='$k_ime'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}	
	
	
function getRooms(){
global $conn;
$rarray = array();
$result = mysqli_query($conn, "SELECT * FROM sobe");
$num_rows = mysqli_num_rows($result);
$rooms = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_room = array();
$one_room['id'] = $row['id'];
$one_room['tipSobe'] = $row['tipSobe'];
$one_room['kvadrata'] = $row['kvadrata'];
$one_room['brojKreveta'] = $row['brojKreveta'];
$one_room['pogledNa'] = $row['pogledNa'];
array_push($rooms,$one_room);
}
}
$rarray['rooms'] = $rooms;
return json_encode($rarray);
 
}
?>