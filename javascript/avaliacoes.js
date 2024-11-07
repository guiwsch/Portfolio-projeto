function addComment() {
    const input = document.getElementById('commentInput');
    const display = document.getElementById('commentDisplay');

    // Cria um novo parágrafo para o comentário
    const newComment = document.createElement('p');
    newComment.textContent = input.value;

    display.appendChild(newComment);

    input.value = '';
}