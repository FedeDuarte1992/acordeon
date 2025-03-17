document.addEventListener("DOMContentLoaded", function () {
    const pestaniaBoton = document.querySelectorAll(".pestaniaBoton");
    const contenido = document.querySelectorAll(".contenido");

    // Botones secundarios (Biografía, Desarrollo, Fallecimiento)
    const sectionButtons = document.querySelectorAll(".botonBiografia, .botonAcademico, .botonMuerte");

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
            return;
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
    if (contenido.length > 0) contenido[0].classList.add("visible");

    // Ocultar todas las secciones secundarias al inicio
    document.querySelectorAll(".seccionSecundaria").forEach(section => section.style.display = "none");
});
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar los botones del acordeón
    const botones = document.querySelectorAll(".botonBiografia, .botonAcademico, .botonMuerte");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            // Encuentra el div relacionado al botón
            const contenido = this.nextElementSibling;

            // Alternar visibilidad y clase activa
            contenido.classList.toggle("activo");
            this.classList.toggle("activo");

            // Cerrar otros acordeones dentro de la misma sección
            let seccion = this.parentElement;
            seccion.querySelectorAll("div").forEach(div => {
                if (div !== contenido && div.classList.contains("activo")) {
                    div.classList.remove("activo");
                    div.previousElementSibling.classList.remove("activo");
                }
            });
        });
    });
});

