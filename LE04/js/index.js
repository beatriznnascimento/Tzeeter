document.addEventListener("DOMContentLoaded", function () {
    const tzeetInput = document.getElementById("tzeet-input");
    const contador = document.getElementById("contador");
    const enviarBtn = document.getElementById("enviar-btn");
    const adicionarTzeet = document.querySelector(".adicionar-tzeet");

    function atualizarContador() {
        const texto = tzeetInput.value;
        const caracteresRestantes = 140 - texto.length;

        if (texto.length === 0) {
            contador.style.display = "none"; // Oculta o contador se a mensagem estiver vazia
        } else {
            contador.style.display = "inline"; // Mostra o contador
            contador.textContent = caracteresRestantes;

            // Altera a cor do contador conforme o número de caracteres restantes
            if (caracteresRestantes < 0) {
                contador.style.color = "rgb(255, 0, 0)"; 
            } else if (caracteresRestantes <= 40) {
                contador.style.color = "rgb(255, 200, 0)"; 
            } else {
                contador.style.color = "inherit"; 
            }
        }

        if (texto.length === 0 || texto.length > 140) {
            enviarBtn.disabled = true; 
        } else {
            enviarBtn.disabled = false; 
        }
    }

    // Adiciona um listener para o evento de input no campo de texto
    tzeetInput.addEventListener("input", atualizarContador);

    adicionarTzeet.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "rgba(158, 158, 158, 0.1)";
        this.style.borderRadius = "4px";
        this.style.padding = "4px";
    });

    adicionarTzeet.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        this.style.borderRadius = "";
        this.style.padding = "";
    });
});