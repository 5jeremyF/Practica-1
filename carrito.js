let carrito = [];
let total = 0;

// BOTONES AGREGAR
document.querySelectorAll(".producto button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const producto = document.querySelectorAll(".producto")[index];
        
        const nombre = producto.querySelector("h3").textContent;
        const precio = parseFloat(producto.querySelector(".precio").textContent.replace("$", ""));

        agregarProducto(nombre, precio);
    });
});

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedor = document.querySelector(".carrito");
    
    // Limpiar
    contenedor.innerHTML = "<h2>Tu carrito</h2>";

    carrito.forEach(item => {
        contenedor.innerHTML += `
            <div class="item">
                <span>${item.nombre}</span>
                <span>$${item.precio}</span>
            </div>
        `;
    });

    contenedor.innerHTML += `
        <hr>
        <h3>Total: $${total}</h3>
        <button class="checkout-btn">Finalizar compra</button>
    `;
}