function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la sección de bienvenida por defecto
    showSection('welcome');
});


