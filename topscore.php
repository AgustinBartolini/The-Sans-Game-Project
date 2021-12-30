<?php

include("con_db.php");

$callData = "SELECT * FROM `requests` order by `score` desc";
$data = mysqli_query ($conection, $callData);
$fila= mysqli_fetch_array ($data);

while ($fila = mysqli_fetch_array($data)){
    echo '<p style="color: white">';
    echo $fila ["score"];
    echo '</p>';
};

?>