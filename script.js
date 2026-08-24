function mostrar(seccion) {

    const secciones = document.querySelectorAll("section");

    secciones.forEach(function(elemento) {
        elemento.classList.remove("active");
    });

    document
        .getElementById(seccion)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function mensajeCampana() {

    document.getElementById("mensaje").innerHTML =
        "🌱 ¡Cada elección cuenta! Conoce los alimentos de tu comunidad, aprovecha los recursos y reduce el desperdicio.";

}