<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
function send_mail($mensaje_enviar, $mail_destino, $nombre_cliente){    
    require 'PHP_MAILER/Exception.php';
    require 'PHP_MAILER/PHPMailer.php';
    require 'PHP_MAILER/SMTP.php';
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
            try {
                //Server settings
                $mail->SMTPDebug = 0;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'solsismailer@gmail.com';                     // SMTP username
                $mail->Password   = 'solsis502*+';                               // SMTP password
                $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            
                //Recipients
                $mail->setFrom('solsismailer@gmail.com', 'Soluciones con Sisitemas');
                $mail->addAddress("solsis502.gt@gmail.com", 'Soluciones con Sistemas');     // Add a recipient
                $mail->addAddress($mail_destino,$nombre_cliente);    
                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'Contraraciones, NO RESPONDER ESTE MENSAJE';
                $mail->Body    = $mensaje_enviar;
                $mail->send();
                return True ;
            } catch (Exception $e) {
                return FALSE;
            }
}
    
    
if (isset($_POST['nombre'],$_POST['apellido'],$_POST['correo'], $_POST['mensaje'])){
        $nombre = $_POST['nombre']." ". $_POST['apellido'];
        $correo = $_POST['correo'];
        $telefono = $_POST['telefono'];
        $s1 = $_POST['serv1'];
        $s2 = $_POST['serv2'];
        $s3 = $_POST['serv3'];
        $msg = $_POST['mensaje'];
        $mensaje_a_enviar = "Nombre:". $nombre."<br>"."Correo: ".$correo."<br>"."Teléfono: ".$telefono."<br>"."Servicios: ".$s1.",".$s2.",".$s3."<br>"."Mensaje: ".$msg;
        //$result=send_mail($mensaje_a_enviar);
        $result= send_mail($mensaje_a_enviar,$correo,$nombre);
        if(!$result){
            die("Correo no enviado");
        }else{
            echo'Correo enviado';
        }

}else{
    die('no pasan los datos');
}
?>