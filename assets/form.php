<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$date = date("l jS \of F Y h:i:s A");

$con = mysqli_connect("localhost:3306","root","root");
mysqli_select_db($con,"my");
$sql = mysqli_query($con,"insert into msg(name,msg,email,date) values('".$name."','".$message."','".$email."','".$date."')");
if($sql == 1){
    echo "Message Sent Successfully.";
}
else{
 	echo "Error !!! Please Try Again.";   
}

/*
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
*/
?>