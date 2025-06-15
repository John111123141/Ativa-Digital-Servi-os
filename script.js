document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
