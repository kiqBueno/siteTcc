const botoesCompra = document.querySelectorAll('.comprar');

botoesCompra.forEach(botao => {
  botao.addEventListener('click', () => {
    if (!botao.classList.contains('confirmacao')) {
      botao.classList.add('confirmacao');
      botao.innerHTML = 'Confirmar';
      
      const recusarBotao = document.createElement('button');
      recusarBotao.classList.add('recusar');
      recusarBotao.innerHTML = 'Recusar';
      recusarBotao.addEventListener('click', () => {
        botao.classList.remove('confirmacao');
        botao.innerHTML = 'Comprar';
        botao.parentNode.removeChild(recusarBotao);
      });
      
      botao.parentNode.insertBefore(recusarBotao, botao.nextSibling);
    } else {
      enviarSinalArduino();
      botao.disabled = true;
      botao.innerHTML = 'Compra realizada';
      const recusarBotao = document.querySelector('.recusar');
      if (recusarBotao) {
        recusarBotao.parentNode.removeChild(recusarBotao);
      }
    }
  });
});

function enviarSinalArduino() {
  // Adicione aqui o código para enviar o sinal para o Arduino via servidor local
  // Você pode usar a função fetch() ou XMLHttpRequest() para fazer uma requisição HTTP para o servidor do Arduino
  console.log("sinal enviado!")
}

