<?php

require_once 'config.php';
$db = new MySQLi(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($db->connect_error) {
    $db = new mysqli('11.56.0.22', DB_USER, DB_PASS, DB_NAME);
} 

$query= $_POST['query'];
$results = mysqli_query($db, $query);

if($results == '') {
	echo $results;
}
else {
	$array = array();
	while ($row = $results->fetch_array(MYSQL_ASSOC))
	{	
		array_push($array, $row);
	}
	$final = json_encode($array);

	echo $final;
}

?>