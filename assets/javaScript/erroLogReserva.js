const url = 'https://secured.sirvoy.com/widget/book_widget_cors.js';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro de rede ao carregar o widget Sirvoy');
    }
    return response.text();
  })
  .then(data => {
    // Faça algo com os dados recebidos, como carregar o widget Sirvoy
    console.log('Dados recebidos:', data);
  })
  .catch(error => {
    console.error('Erro ao carregar o widget Sirvoy:', error.message);
    // Trate o erro aqui, como exibir uma mensagem de erro para o usuário
    alert('Erro na Integração com Sirvoy')
  });
