<?php
    $to = 'thibaultriviere2@gmail.com';
    $subject = $_POST['sujet'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['emailContact'] . "\r\n" . 'Reply-To: ' . $_POST['emailContact'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    // On envoie le mail et on stocke le résultat
    $result = mail($to, $subject, $message, $headers);
    // Le contenu sera renvoyé au format JSON
    header('Content-Type: application/json');
    echo json_encode([
        'result' => $result
	]);
?>