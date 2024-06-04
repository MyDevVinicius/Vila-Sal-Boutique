var indice = 0;

function mover(direcao) {
  var imagens = document.querySelectorAll('.carousel img');
  if (direcao === -1 && indice > 0) {
    indice--;
  } else if (direcao === 1 && indice < imagens.length - 1) {
    indice++;
  } else if (direcao === 1 && indice === imagens.length - 1) {
    // Se estiver na última imagem, volte para a primeira
    indice = 0;
  }
  var novaPosicao = -indice * 400; // 450 é a largura do carrossel
  imagens.forEach(function(img) {
    img.style.transform = 'translateX(' + novaPosicao + 'px)';
  });
}
