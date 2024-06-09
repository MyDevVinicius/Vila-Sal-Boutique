const url = 'https://secured.sirvoy.com/widget/book_widget_cors.js';

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Erro de rede ao carregar o widget Sirvoy');
    }
  })
  .then(data => {
    if (data.includes('SirvoyBookWidget')) {
      exibirMensagem('Integração com reservas bem-sucedida!');
    } else {
      throw new Error('O widget Sirvoy não foi carregado corretamente');
    }
  })
  .catch(error => {
    exibirMensagem('Erro ao integrar com reservas: ' + error.message);
  });

function exibirMensagem(mensagem) {
  const mensagemElement = document.createElement('div');
  mensagemElement.textContent = mensagem;
  document.body.appendChild(mensagemElement);
}