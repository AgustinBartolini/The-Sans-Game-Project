<?php
include("con_db.php");

if(isset($_POST['enviar'])) {
    $user = trim($_POST['user']);
    $score = trim($_POST['points']);
    $request = "INSERT INTO requests(user, score) VALUES ('$user','$score')";
    $result = mysqli_query($conection, $request);
    if ($result) {
        ?> <h1 class="ok"> Ta to gucci </h1>
        <?php
    }
    else {
        ?> <h1 class="mal"> Ta to mal </h1>
        <?php
    }
}
?>