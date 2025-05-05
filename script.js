document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const lista = document.getElementById('lista-de-itens');
    const limparBtn = document.getElementById('limpar-lista');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const produto = document.getElementById('produto').value.trim();
      const quantidade = document.getElementById('quantidade').value.trim();
  
      if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira um produto e uma quantidade válida.');
        return;
      }
  
      const item = document.createElement('li');
      item.textContent = `${quantidade} x ${produto}`;
      item.addEventListener('click', () => {
        item.classList.toggle('comprado');
      });
  
      lista.appendChild(item);
  
      form.reset();
    });
  
    limparBtn.addEventListener('click', () => {
      lista.innerHTML = '';
    });
  });

  