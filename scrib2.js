function toggleAccordion(button) {
    const item = button.parentElement;
    const isOpen = item.classList.contains("open");

    // Cierra todos los acordeones menos el actual
    document.querySelectorAll(".accordion-item").forEach(el => {
      if (el !== item) {
        el.classList.remove("open");
      }
    });

    // Alterna el actual
    if (!isOpen) {
      item.classList.add("open");
    }
  }