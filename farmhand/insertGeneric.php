<?php

$serverIP = $_SERVER['REMOTE_ADDR'];

if ( $serverIP == '::1' ){
	$db = new mysqli('localhost', 'root', '', 'data');
} else {
	$db = new mysqli('localhost', 'otterowl', '12@1Jack', 'otterowl_farmHand');
}

$query= $_POST['query'];

$results = mysqli_query($db, $query);
echo $results;

?>