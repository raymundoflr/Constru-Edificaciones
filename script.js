document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        const formData = new FormData(contactForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
            alert('¡Gracias por tu solicitud! Nos pondremos en contacto a la brevedad.');
            contactForm.reset(); 
        })
        .catch((error) => {
            alert('Hubo un error al enviar el mensaje. Por favor, intente más tarde.');
        });
    });
});