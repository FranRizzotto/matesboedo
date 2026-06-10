const productos = {
    imperial_liso: {
        nombre: "Mate Imperial liso",
        precio: "$25.000",
        descripcion: "Mate imperial de calabaza con virola de alpaca.",
        imagenes: ["./Fotos/imperiallisonegro.jpeg", "./Fotos/imperiallisorojo.jpeg", "./Fotos/imperiallisosuela.jpeg"]
    },

    imperial_croco: {
        nombre: "Mate imperial croco con bolitas",
        precio: "$33.000",
        descripcion: "Imperial con virola de alpaca y base con bolitas de bronce.",
        imagenes: ["./Fotos/imperialcrococonbolitas.jpeg"]
    },

    torpedo_cincelado: {
        nombre: "Torpedo cincelado",
        precio: "$25.000",
        descripcion: "Mate torpedo con virola de alpaca sincelada.",
        imagenes: ["./Fotos/torpedocincelado.jpeg",]
    },

    torpedo_liso: { 
        nombre: "Torpedo liso",
        precio:"$23.000",
        descripcion: "Mate torpedo liso con virola de alpaca.Disponible en negro y bordo",
        imagenes: ["./Fotos/torpedoliso.jpeg" ]
},

    matera_cuero: { 
        nombre: "Matera cuero",
        precio:"$35.000",
        descripcion: "Matera de cuero con diseño premium.",
        imagenes: ["./Fotos/materadecuero.jpeg"]
    
},

    verdecita: { 
        nombre: "Verdecita Kg",
        precio:"$9.000",
        descripcion: "yerba con padron uruguayo.",
        imagenes: ["./Fotos/verdecitakg.jpeg"]
},



    Baldo_kg: { 
        nombre: "Baldo kg",
        precio:"$11.500",
        descripcion: "Yerba con padron uruguayo.",
        imagenes: ["./Fotos/baldokg.jpeg"]
    },
    
    sara_kg: {
        nombre: "Sara Kg",
        descripcion: "Yerba con padron uruguayo.",
        precio:"$9.000",
        imagenes: ["./Fotos/Sarakg.jpeg"]
    },
    


}
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const producto = productos[id];

if (producto) {
    document.getElementById("nombre-producto").textContent = producto.nombre;
    document.getElementById("descripcion-producto").textContent = producto.descripcion;
    document.getElementById("precio-producto").textContent = producto.precio;

    const imagenPrincipal = document.getElementById("imagen-principal");
    imagenPrincipal.src = producto.imagenes[0];

    const miniaturas = document.getElementById("miniaturas");

    producto.imagenes.forEach(imagen => {
        const img = document.createElement("img");
        img.src = imagen;

        img.onclick = function () {
            imagenPrincipal.src = imagen;
        };

        miniaturas.appendChild(img);
    });

    const mensaje = `Hola, quiero comprar el ${producto.nombre} de ${producto.precio}`;
    document.getElementById("boton-whatsapp").href =
        `https://wa.me/5491150371281?text=${encodeURIComponent(mensaje)}`;
} else {
    document.querySelector(".detalle-producto").innerHTML = "<h1>Producto no encontrado</h1>";
}