document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item"); // Seleccionamos los contenedores de las preguntas
    const faqButtons = document.querySelectorAll(".faq-question");
  
    // Abre el primer elemento por defecto (o el que tenga la clase 'open' en el HTML)
    const initialOpenItem = document.querySelector(".faq-item.open");
    if (initialOpenItem) {
      initialOpenItem.classList.add("open"); // Aseguramos que tenga la clase 'open'
    } else if (faqItems.length > 0) {
      faqItems[0].classList.add("open"); // Abre el primer elemento si ninguno tiene 'open' inicialmente
    }
  
    faqButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        item.classList.toggle("open");
  
        // Cierra los demás
        document.querySelectorAll(".faq-item").forEach(other => {
          if (other !== item) {
            other.classList.remove("open");
          }
        });
      });
    });
  });