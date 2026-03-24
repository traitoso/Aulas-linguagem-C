<script>
  // Seleciona todos os botões e links com classe 'button'
  const botoes = document.querySelectorAll('.button, .search-form button');

  botoes.forEach(botao => {
    // Efeito de "Clique" ao pressionar
    botao.addEventListener('mousedown', () => {
      botao.style.transform = 'scale(0.95) translateY(4px)';
      botao.style.boxShadow = 'none';
    });

    botao.addEventListener('mouseup', () => {
      botao.style.transform = 'translateY(2px)';
      botao.style.boxShadow = '0 2px 0px rgba(0, 0, 0, 0.2)';
    });

    // Simulação de ação
    botao.addEventListener('click', (e) => {
      if(botao.textContent === 'Buscar') return; // Ignora o botão de busca
      
      e.preventDefault();
      const pizzaNome = botao.closest('.pizza-card')?.querySelector('h3')?.textContent || "sua pizza";
      alert(`🍕 Excelente escolha! ${pizzaNome} foi adicionada ao seu pedido.`);
    });
  });
</script>