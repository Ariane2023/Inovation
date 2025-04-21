document.addEventListener('DOMContentLoaded', function () {
  // Desktop
  const inputDesktop = document.getElementById('search-desktop');
  const btnDesktop = inputDesktop?.nextElementSibling;
  const resultDesktop = document.getElementById('search-result-desktop');
  

  btnDesktop?.addEventListener('click', () => {
    const term = inputDesktop.value.trim();
    if (term) {
      resultDesktop.textContent = `Você buscou por: '${term}'`; 
      
      inputDesktop.value = ''; // 👉 limpa o campo de busca

      setTimeout(() => {
        resultDesktop.textContent = ''; // 👉 apaga o resultado após 7s
      }, 7000);
    
    };
  });
  

  // Mobile
  const inputMobile = document.getElementById('search-mobile');
  const btnMobile = inputMobile?.nextElementSibling;

  btnMobile?.addEventListener('click', () => {
    const term = inputMobile.value.trim();
    if (term) {
      // Remove se já tiver
      let existing = document.querySelector('.search-result-message.mobile');
      if (existing) existing.remove();

      const p = document.createElement('p');
      p.className = 'search-result-message mobile';
      p.textContent = `Você buscou por: '${term}'`;
      p.style.marginTop = '0.5rem';
      p.style.textAlign = 'center';

      inputMobile.parentElement.insertAdjacentElement('afterend', p);

      // 👉 Limpa o campo de busca
      inputMobile.value = '';

      // 👉 Remove o resultado depois de 7 segundos
      setTimeout(() => {
        p.remove();
      }, 7000);
    }
  });
});



const btnMobile = document.getElementById("btn-categorias-mobile");
const listaMobile = document.getElementById("menu-categorias__lista--mobile");
console.log(listaMobile); // deve mostrar o <ul>
btnMobile.addEventListener("click", (e) => {
  e.stopPropagation();
  listaMobile.classList.toggle("none");
});

// Esconde o menu se clicar fora
document.addEventListener("click", () => {
  listaMobile.classList.add("invisible");
});

// Desktop (se quiser alternar visibilidade também)
const btnDesktop = document.getElementById("btn-categorias-desktop");
const listaDesktop = document.getElementById("lista-categorias-desktop");

btnDesktop.addEventListener("click", (e) => {
  e.stopPropagation();
  listaDesktop.style.display = listaDesktop.style.display === "block" ? "none" : "block";
});

// Fechar quando clicar fora
document.addEventListener("click", (e) => {
  // mobile
  if (!btnMobile.contains(e.target)) {
    listaMobile.classList.add("invisible");
  }
  // desktop
  if (!btnDesktop.contains(e.target) && !listaDesktop.contains(e.target)) {
    listaDesktop.style.display = "none";
  }
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = link.nextElementSibling;
    submenu.classList.toggle('ativo');
  });
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

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});

