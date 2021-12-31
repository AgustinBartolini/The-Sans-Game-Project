<?php

include("con_db.php");

$callData = "SELECT * FROM `requests` order by `score` desc LIMIT 0, 17";
$data = mysqli_query ($conection, $callData);
$fila= mysqli_fetch_array ($data);

while ($fila = mysqli_fetch_array($data)){
    echo '<p>';
    echo $fila ["score"];
    echo '</p>';
};

?>