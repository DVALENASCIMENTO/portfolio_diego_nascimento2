// Função de rolagem suave para os links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu de navegação móvel
document.querySelector('header nav ul').addEventListener('click', function() {
    this.classList.toggle('open');
});

// Validação do formulário de contato
document.querySelector('#contato form').addEventListener('submit', function(e) {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault();
    }
});

// (Opcional) Animações de entrada ao rolar a página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
            section.classList.add('show');
        }
    });
});
