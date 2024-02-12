<?php
    IF($_SERVER['REQUEST_METHOD'] == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['message'];
        $message = $_POST['message'];


        $to = 'edsonhermosa@gmail.com';

        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Subject: $subject\n";
        $body .= "Message:\n$message";

        $headers = "From: $name <$email>";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for contacting us. We will get back to you soon.";
        } else {
            echo "Sorry, there was an error sending your message.";
        }

    }