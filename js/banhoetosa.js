document.addEventListener('DOMContentLoaded', function () {
  // Cupom de Desconto e Agendamento
  const cupomElement = document.getElementById('cupom');
  const agendarBtn = document.getElementById('agendar-btn');
  const mainContainer = document.getElementById('main-container');
  const cadastroContainer = document.getElementById('cadastro-container');
  const cadastroForm = document.getElementById('cadastro-form');
  agendarBtn.addEventListener('click', function () {
    // Alternar a exibição entre a página principal e a página de cadastro
    mainContainer.style.display = 'none';
    cadastroContainer.style.display = 'block';
  });
})
