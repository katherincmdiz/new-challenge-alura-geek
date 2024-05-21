export async function listaDeProductos() {
    const conexion = await fetch("https://la-api-fake.vercel.app/product");
    const conexionConvertida = await conexion.json(); // Esperar la conversión a JSON
    return conexionConvertida;
}

const nuevoProducto = async (name, price, imagen) => {
    try {
        const res = await fetch("https://la-api-fake.vercel.app/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, imagen }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const borrarProducto = async (id) => {
    try {
        const res = await fetch(`https://la-api-fake.vercel.app/product/${id}`, {
            method: "DELETE",
        });
        return res.ok;
    } catch (err) {
        console.log(err);
    }
};

export const conexionApi = {
    listaDeProductos,
    nuevoProducto,
    borrarProducto,
};