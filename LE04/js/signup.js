document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("signupForm");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const confirmarSenhaInput = document.getElementById("confirmarSenha");
const mesInput = document.getElementById("mes");
const diaInput = document.getElementById("dia");
const anoInput = document.getElementById("ano");
const concordaSim = document.getElementById("concordaSim");
const submitButton = document.getElementById("submitButton");


const errorMessages = {
    nome: "Por favor, informe um nome de usuário.",
    email: "Informe um email válido.",
    senha: "A senha é obrigatória e deve ter pelo menos 6 caracteres.",
    confirmarSenha: "As senhas não coincidem.",
    data: "Campo obrigatório.",
    termos: "Você deve concordar com os termos.",
};

  // Preencher meses, dias e anos

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

const anoAtual = new Date().getFullYear();
const anos = Array.from({ length: 99 - 18 + 1 }, (_, i) => anoAtual - 18 - i);


  // Preencher meses
meses.forEach((mes, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = mes;
    mesInput.appendChild(option);
});

  // Preencher anos
anos.forEach((ano) => {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    anoInput.appendChild(option);
});

  // Atualizar dias com base no mês e ano selecionados
function atualizarDias() {
    const mes = parseInt(mesInput.value);
    const ano = parseInt(anoInput.value);
    const diasNoMes = new Date(ano, mes, 0).getDate();

    diaInput.innerHTML = '<option value="">Dia</option>';
    for (let i = 1; i <= diasNoMes; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      diaInput.appendChild(option);
    }
}

mesInput.addEventListener("change", atualizarDias);
anoInput.addEventListener("change", atualizarDias);

  // Validação do formulário
function validateForm() {
    let valido = true;

    // Validação do nome
    if (nomeInput.value.trim() === "") {
      document.getElementById("nomeError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("nomeError").style.display = "none";
    }

    // Validação do email
    if (!validateEmail(emailInput.value)) {
      document.getElementById("emailError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    // Validação da senha
    if (senhaInput.value.length < 6) {
      document.getElementById("senhaError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("senhaError").style.display = "none";
    }

    // Validação da confirmação de senha
    if (confirmarSenhaInput.value !== senhaInput.value) {
      document.getElementById("confirmarSenhaError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("confirmarSenhaError").style.display = "none";
    }

    // Validação da data de nascimento
    if (
      mesInput.value === "" ||
      diaInput.value === "" ||
      anoInput.value === ""
    ) {
      document.getElementById("dataError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("dataError").style.display = "none";
    }

    // Validação dos termos
    if (!concordaSim.checked) {
      document.getElementById("termosError").style.display = "block";
      valido = false;
    } else {
      document.getElementById("termosError").style.display = "none";
    }

    submitButton.disabled = !valido;
}

  // Função para validar email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

nomeInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
senhaInput.addEventListener("input", validateForm);
confirmarSenhaInput.addEventListener("input", validateForm);
mesInput.addEventListener("change", validateForm);
diaInput.addEventListener("change", validateForm);
anoInput.addEventListener("change", validateForm);
concordaSim.addEventListener("change", validateForm);

  // impede envio se tivwr erros
form.addEventListener("submit", function (event) {
    validateForm();
    if (submitButton.disabled) {
      event.preventDefault();
    }
  });
});
