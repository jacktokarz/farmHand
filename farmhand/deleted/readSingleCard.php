<?php

$serverIP = $_SERVER['REMOTE_ADDR'];

if ( $serverIP == '::1' ){
	$db = new mysqli('localhost', 'root', '', 'data');
} else {
	$db = new mysqli('localhost', 'otterowl', '12@1Jack', 'otterowl_farmHand');
}

$idValue= $_POST['idValue'];

$querySELECTURL="SELECT * FROM `primaryEffect` WHERE id= '" . $idValue . "'";
$results = mysqli_query($db, $querySELECTURL);
$array = array();
while ($row = $results->fetch_array(MYSQL_ASSOC))
{	
	array_push($array, $row);
}
$final = json_encode($array);

echo $final;

?>