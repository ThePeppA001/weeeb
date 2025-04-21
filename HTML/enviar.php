<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $whatsapp = htmlspecialchars($_POST["whatsapp"]);
    $proyecto = htmlspecialchars($_POST["proyecto"]);

    $para = "acevedobismar5@gmail.com"; // Cambia al correo donde querés recibirlo
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    $mensaje = "
    Nombre: $nombre\n
    Correo: $correo\n
    WhatsApp: $whatsapp\n
    Proyecto: $proyecto\n
    ";

    $cabeceras = "From: $correo" . "\r\n" .
                 "Reply-To: $correo" . "\r\n" .
                 "X-Mailer: PHP/" . phpversion();

    if (mail($para, $asunto, $mensaje, $cabeceras)) {
        echo "<script>alert('Mensaje enviado correctamente');window.location.href='contacto.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Intenta más tarde');window.history.back();</script>";
    }
}
?>
