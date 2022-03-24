<?php

header('Content-Type: text/html; charset=utf-8');
header('P3P:CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');

if(isset($_POST['ajaxFunction']) && $_POST['ajaxFunction'] != '') {
    $ajax_function = $_POST['ajaxFunction'];
    
    if($ajax_function == "sendMail") {
        $name = $_POST['name'];
        $mail = $_POST['email'];
        $message = $_POST['message'];

        $to = "info@authink.org";
        $subject = "[authink.org] Kontakt poruka od " . $name;
        $message = "Someone sent a message using the contact form on authink.org!\n\Name: " . $name . "\n\nE-mail address: " . $mail . "\n\Message: " . $message;
        $from = "info@authink.org";
        $headers = "From: " . $from;
        
        $return['message'] = mail($to,$subject,$message,$headers);
        
        echo json_encode($return);
    }
}

?>