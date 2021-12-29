<?php

include("con_db.php");

if(isset($_POST['enviar'])) {
    if(strlen($_POST['user']) >= 1) {
        $user = trim($_POST['user']);
        $score = trim($_POST['points']);
        $request = "INSERT INTO `requests`(`user`, `score`) VALUES ('$user','$score')";
        $result = mysqli_query($conection, $request);
    }
};

?>