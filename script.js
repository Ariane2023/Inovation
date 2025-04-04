document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('serch');
  const searchButton = searchInput.nextElementSibling; // Assuming the button is the next sibling
  const header = document.querySelector('header'); // Or any other suitable parent element

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      const searchMessage = document.createElement('p');
      searchMessage.classList.add('search-result-message');
      searchMessage.textContent = `Você buscou por: '${searchTerm}'`;
      searchMessage.style.marginTop = '0.8rem'; // Add some spacing
      searchMessage.style.justifySelf = 'center'
      header.after(searchMessage); // Insert the message after the header
    }
  });
});

const botaoMenu = document.querySelector('.menu-categorias__botao');
const listaMenu = document.querySelector('.menu-categorias__lista');

botaoMenu.addEventListener('click', () => {
  listaMenu.style.display = listaMenu.style.display === 'block' ? 'none' : 'block';
});

// Ocultar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-categorias')) {
    listaMenu.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const agreementInput = document.getElementById('agreement');

    let isValid = true;
    let errors = [];

    // Validação do nome
    if (!nameInput.value.trim()) {
      isValid = false;
      errors.push('Por favor, digite seu nome.');
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
      isValid = false;
      errors.push('Por favor, digite um e-mail válido.');
    }

    // Validação do acordo
    if (!agreementInput.checked) {
      isValid = false;
      errors.push('Por favor, concorde com a Política de Privacidade.');
    }

    // Exibir erros ou sucesso
    if (!isValid) {
      alert(errors.join('\n'));
    } else {
      // Enviar dados para o servidor
      const formData = new FormData(form);

      fetch('cadastrar_email.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        alert(data); // Exibe a resposta do servidor
        nameInput.value = '';
        emailInput.value = '';
        agreementInput.checked = false;
      })
      .catch(error => {
        alert('Ocorreu um erro ao cadastrar o email.');
        console.error('Erro:', error);
      });
    }
  });
});

