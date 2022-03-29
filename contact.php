<?php

$errors = [];

if (!array_key_exists('firstname', $_POST) || $_POST['firstname'] == '') {
    $errors['firstname'] = "J'aimerais bien savoir qui me contacte tout de même.";
}

if (!array_key_exists('name', $_POST) || $_POST['name'] == '') {
    $errors['name'] = "J'aimerais bien savoir qui me contacte tout de même.";
}

if (!array_key_exists('email', $_POST) || $_POST['email'] == '') {
    $errors['email'] = "Si vous ne renseigner pas votre mail, je ne pourrais pas vous recontacter.";
}

if (!array_key_exists('message', $_POST) || $_POST['message'] == '') {
    $errors['message'] = "Il faudrait que je sache pourquoi vous voulez me contacter.";
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Vous n'avez pas renseigné un e-mail valide.";
}

session_start();

if (!empty($errors)) {
    $_SESSION['errors'] = $errors;
    $_SESSION['inputs'] = $_POST;
    header('Location : ./#contact');
} else {
    $subject = 'Contacts | Portfolio deborah-bude.fr';
    $name = $_POST['name'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    // Create email headers
    $headers .= 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $mailMessage = '<h3>Vous avez reçu un message provenant de votre portfolio !</h3>' .
        '<p> Nom :' . $firstname . '</p>' .
        '<p> Prénom : ' . $name . '</p>' .
        '<p> Mail : ' . $email . '</p>' .
        '<p> Message : ' . $message . '</p>';
    mail('deborah.bude@gmail.com', $subject, $mailMessage, $headers);
    $_SESSION['success'] = 'Votre message a bien été envoyé';
    header('Location : ./#contact');
}