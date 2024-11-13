// Obtém todos os elementos de imagem com a classe 'clickable-img'
let images = document.querySelectorAll('.clickable-img');

// Obtém o modal
let modal = document.getElementById('imageModal');

// Obtém o elemento <img> dentro do modal
let modalImg = document.getElementById('modalImg');

// Obtém o elemento <span> para fechar a modal
let closeBtn = document.getElementsByClassName('close')[0];

// Quando uma imagem for clicada
images.forEach(image => {
    image.onclick = function() {
        modal.style.display = 'block'; // Exibe o modal
        modalImg.src = this.src; // Define o src da imagem no modal
    };
});

// Quando o usuário clicar no botão de fechar (X)
closeBtn.onclick = function() {
    modal.style.display = 'none'; // Fecha o modal
};

// Quando o usuário clicar fora da imagem (na área escura)
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Fecha o modal
    }
};
