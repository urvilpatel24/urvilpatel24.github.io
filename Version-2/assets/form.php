<?php

require_once('PHPMailer/PHPMailerAutoload.php');

#$name = $_POST["name"];
#$email = $_POST["email"];
#$message = $_POST["message"];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "lalit444shah@gmail.com";
$mail->Password = "lal444lal";
$mail->setFrom('lalit444shah@gmail.com', 'Lalit Shah');
$mail->addReplyTo('lalit444shah@gmail.com', 'Lalit Shah');
$mail->AddAddress('urvilpatel24@gmail.com', 'Urvil Patel');
$mail->Subject = "Hello Subject";
$mail->Body = "body of mail";

if (!$mail->send())
	echo "Mailer Error: ".$mail->ErrorInfo;
else
	echo "<p>Message Successfully Sent.</p>";

?>