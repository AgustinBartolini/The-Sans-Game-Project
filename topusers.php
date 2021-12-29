<?php

$callData = "SELECT * FROM `requests`";
$data = mysqli_query ($conection, $callData);
$fila= mysqli_fetch_array ($data);

while ($fila = mysqli_fetch_array($data)){
    echo "<p>";
    echo $fila ["user"];
    echo $fila["score"];
    echo "</p>";
};

?>