<?php
    $to = "info@vatsalshah.in"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "Form submission from " .$name;
    $subject2 = "Copy of your form submission";
    $message = "From: " . $name .",\n\nYour Message is: " . $_POST['message'] ."\n\nEmail is: " .$email;
    $message2 = "Here is a copy of your message " . $name.",\n\nYour message is:" .$_POST['message'] . "\n\nThanks for contact me " . $name . ", I will contact you shortly. \n\nFrom, \nVatsal Shah" ;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    
   echo "success";

?>