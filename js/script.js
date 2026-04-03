// Quando a página rolar, a função será chamada
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    // Percorre cada seção para verificar qual está na viewport
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Verifica se o usuário está na seção
        if (this.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});
