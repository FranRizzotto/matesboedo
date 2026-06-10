function abrirMenu() {
    document.getElementById("menu").classList.add("abierto");
}

function cerrarMenu() {
    document.getElementById("menu").classList.remove("abierto");
}

document.querySelectorAll(".slider").forEach(slider => {
    let index = 0;
    const imagenes = slider.querySelectorAll("img");

    const mostrarImagen = (i) => {
        imagenes.forEach(img => img.classList.remove("imagen-activa"));
        imagenes[i].classList.add("imagen-activa");
    };

    slider.querySelector(".next").onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        index = (index + 1) % imagenes.length;
        mostrarImagen(index);
    };

    slider.querySelector(".prev").onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        index = (index - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(index);
    };
});
function toggleSubMenu() {
    const subMenu = document.getElementById("sub-menu-productos");
    subMenu.classList.toggle("mostrar");
}

// Opcional: Modifica tu función cerrarMenu para que también cierre el desplegable
function cerrarMenu() {
    document.getElementById("menu").classList.remove("abierto");
    document.getElementById("sub-menu-productos").classList.remove("mostrar");
}