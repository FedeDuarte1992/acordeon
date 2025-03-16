document.addEventListener("DOMContentLoaded", function () {
    const pestaniaBoton = document.querySelectorAll(".pestaniaBoton");
    const contenido = document.querySelectorAll(".contenido");
    const contenidoFoto = document.querySelectorAll(".contenidoFoto");

    // Botones secundarios (Biografía, Desarrollo, Muerte)
    const sectionButtons = document.querySelectorAll(".botonBiografia, .botonAcademico, .botonMuerte");
    const sectionContents = document.querySelectorAll(".seccionSecundaria");

    // Función para cambiar de pestaña principal
    function switchTab(event) {
        const tabId = event.currentTarget.getAttribute("data-tab");

        if (event.currentTarget.classList.contains("pestania-activada")) return;

        // Ocultar todas las secciones principales
        contenido.forEach(content => content.classList.remove("visible"));

        // Mostrar la pestaña activa
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add("visible");
        }

        // Quitar la clase activa de los botones
        pestaniaBoton.forEach(button => button.classList.remove("pestania-activada"));
        event.currentTarget.classList.add("pestania-activada");

        // Siempre mostrar la imagen
        contenidoFoto.forEach(foto => foto.style.display = "block");

        // Ocultar las secciones secundarias cuando se cambia de pestaña
        sectionContents.forEach(content => content.style.display = "none");
    }

    // Agregar eventos a los botones principales
    pestaniaBoton.forEach(button => button.addEventListener("click", switchTab));

    // Función para cambiar de sección secundaria
    function switchSecondary(event) {
        const targetId = event.currentTarget.getAttribute("data-tab");
        const targetContent = document.getElementById(targetId);

        if (!targetContent) return;

        // Obtener la pestaña principal del contenido
        const parentTab = targetContent.closest(".contenido");
        
        // Verificar si la pestaña principal está activa antes de mostrar la secundaria
        if (!parentTab || !parentTab.classList.contains("visible")) {
            return; // No hace nada si la pestaña principal no está visible
        }

        // Ocultar todas las secciones secundarias dentro de la pestaña activa
        parentTab.querySelectorAll(".seccionSecundaria").forEach(section => {
            section.style.display = "none";
        });

        // Mostrar solo la sección secundaria seleccionada
        targetContent.style.display = "block";
    }

    // Agregar eventos a los botones secundarios
    sectionButtons.forEach(button => button.addEventListener("click", switchSecondary));

    // Mostrar solo la primera pestaña al cargar
    const firstTab = document.querySelector(".contenido");
    if (firstTab) firstTab.classList.add("visible");
});
