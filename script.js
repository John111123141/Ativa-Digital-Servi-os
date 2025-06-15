// Enviar pedido via WhatsApp com mensagem formatada
document.getElementById('pedidoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Montar mensagem para WhatsApp
  let text = `Olá, meu nome é *${nome}*.\n`;
  text += `Meu e-mail é: ${email}\n`;
  text += `Gostaria de contratar o seguinte serviço:\n${mensagem}`;

  const phone = '5534991829416'; // Seu número no WhatsApp com código do país (55) e DDD (34)
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  // Abrir WhatsApp em nova aba
  window.open(url, '_blank');
});
