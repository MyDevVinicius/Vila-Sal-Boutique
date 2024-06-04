function toggleButton() {
    var btn = document.getElementById('whatsapp-btn');
    if (btn.style.display === 'none') {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  }
  
  // Chama a função para mostrar o ícone inicialmente e a cada 15 segundos
  toggleButton();
  setInterval(toggleButton, 15000);
  
  document.getElementById('whatsapp-btn').addEventListener('click', function() {
    var btn = document.getElementById('whatsapp-btn');
    var message = 'Olá, vim através do seu site, gostaria de algumas informações';
    
    // Número de telefone para o qual você quer enviar a mensagem
    var phoneNumber = 'SEU-NÚMERO-DE-TELEFONE-AQUI';
    
    // Cria a URL com o link do WhatsApp
    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    
    // Abre uma nova janela/redireciona para a URL do WhatsApp
    window.open(url, '_blank');
  });
  