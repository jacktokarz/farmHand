<?php


$db = new mysqli('11.56.0.22', 'otterowl', '12@1Jack', 'otterowl_farmHand');
if ($db->connect_error) {
    $db = new mysqli('localhost', 'otterowl', '12@1Jack', 'otterowl_farmHand');
} 

$query= $_POST['query'];

$results = mysqli_query($db, $query);
echo $results;

?>