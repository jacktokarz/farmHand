<?php

$serverIP = $_SERVER['REMOTE_ADDR'];

if ( $serverIP == '::1' ){
	$db = new mysqli('localhost', 'root', '', 'data');
} else {
	$db = new mysqli('localhost', 'otterowl', '12@1Jack', 'otterowl_farmHand');
}

$query= $_POST['query'];

$results = mysqli_query($db, $query);
$array = array();
while ($row = $results->fetch_array(MYSQL_ASSOC))
{	
	array_push($array, $row);
}
$final = json_encode($array);

echo $final;

?>