// Selecionar todos os itens de menu que têm links âncora
const menuItems = document.querySelectorAll('nav .nav-list a[href^="#"]');

// Função para obter a posição de rolagem com base no href do elemento
function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    if (id === '#' || !id) {
        return 0; // Retornar 0 se o atributo href for vazio ou '#'
    }
    const targetElement = document.querySelector(id);
    if (!targetElement) {
        console.error("Elemento alvo não encontrado para o ID:", id);
        return 0; // Retornar 0 se o elemento alvo não for encontrado
    }
    return targetElement.offsetTop - document.querySelector('header').offsetHeight; // Ajustar a compensação aqui
}

// Função para rolar suavemente até uma posição específica
function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

// Função chamada quando um item de menu é clicado
function scrollToIdOnClick(event) {
    event.preventDefault(); // Evitar comportamento padrão do link
    const to = getScrollTopByHref(event.currentTarget);
    scrollToPosition(to);
}

// Adicionar event listener para cada item de menu
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});
