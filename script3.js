(function() {
    emailjs.init("service_rtizwzi"); // Reemplaza con tu Public Key
  })();

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_rtizwzi", "template_goypfuh", {
      name: document.getElementById("nombre").value,
      email: document.getElementById("correo").value,
      whatsapp: document.getElementById("whatsapp").value,
      title: document.getElementById("titulo").value,
      message: document.getElementById("proyecto").value
    })
    .then(function(response) {
      alert("Mensaje enviado correctamente.");
      window.location.href = "contacto.html";
    }, function(error) {
      alert("Error al enviar el mensaje. Intenta más tarde.");
      console.error("Error de EmailJS:", error);
    });
  });