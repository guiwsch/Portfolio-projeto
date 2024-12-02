document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('icone-botao');
    if (button) {
        button.addEventListener('click', function() {
            const navbar = document.getElementById('navbar');
            if (navbar) { 
                if (navbar.style.maxHeight) {
                    navbar.style.maxHeight = null;
                } else {
                    navbar.style.maxHeight = navbar.scrollHeight + "px";
                }
            }
        });
    } else {
        console.error("Elemento com ID 'icones-button' não encontrado.");
    }
});