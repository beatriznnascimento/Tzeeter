document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal-tzeet");
    const btnTzeet = document.getElementById("b_tzeet"); 
    const closeModal = document.querySelector(".close-modal");

    // Abre o modal ao clicar no botão "Tzeet"
    btnTzeet.addEventListener("click", function () {
        modal.style.display = "flex"; // Exibe o modal
    });

    // Fecha o modal ao clicar no botão de fechar
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; 
        }
    });
});