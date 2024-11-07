document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('icone-botao');
    if (button) { // Verifique se o botão existe
        button.addEventListener('click', function() {
            const navbar = document.getElementById('navbar');
            if (navbar) { // Verifique se a navbar existe
                if (navbar.style.maxHeight) {
                    navbar.style.maxHeight = null; // Fecha a navbar
                } else {
                    navbar.style.maxHeight = navbar.scrollHeight + "px"; // Abre a navbar
                }
            }
        });
    } else {
        console.error("Elemento com ID 'icones-button' não encontrado.");
    }
});