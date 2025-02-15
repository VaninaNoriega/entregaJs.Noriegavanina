/*section bebes*/ 
const productos=[
    {
        id:1,
        img:"./imagenes/bautismo0.jpeg",
        nombre:"Conjunto celeste",
        descripcion:"Camisa, tiradores y short celeste haciendo juego.",
        precio:45000
    },
    {
        id:2,
        img:"./imagenes/bautismo1.jpeg",
        nombre:"Conjunto beige",
        descripcion:"Camisa, tiradores y pantalon largo en beige.",
        precio:50000
    },
    {
        id:3,
        img:"./imagenes/bautismo4.jpeg",
        nombre:"Vestido bordado",
        descripcion:"Vestido con flores bordadas y tull.",
        precio: 30000
    },
    {
        id:4,
        img:"./imagenes/bautismo5.jpeg",
        nombre:"Vestido",
        descripcion:"Vestido blanco de broderie.",
        precio:20000
    },
    {
        id:5,
        img:"./imagenes/recien-nacido2.jpeg",
        nombre:"Combo de algodon verde",
        descripcion:"Batita,medio osito, campera, gorro.",
        precio:20000
    },
    {
        id:6,
        img:"./imagenes/recien-nacido6.jpeg",
        nombre:"Combo de algodon rosa-gris",
        descripcion:"Batita,medio osito, campera, gorro,babero,babita.",
        precio:20000
    },
    {
        id:7,
        img:"./imagenes/recien-nacido7.jpeg",
        nombre:"Combo de algodon rosa",
        descripcion:"Batita,medio osito, campera, gorro.",
        precio:20000
    },
    {
        id:8,
        img:"./imagenes/recien-nacido8.jpeg",
        nombre:"Combo de algodon amarillo",
        descripcion:"Body, medio osito,gorro.",
        precio:20000
    }
]

const carrito = []
const bebes= document.getElementById("bebes");
const carritoLista = document.getElementById("carritoLista")

function agregarProductos(){

    productos.forEach(producto=>{
        
        const card1= document.createElement("article");
        card1.classList.add("card1");

        card1.innerHTML=`
            <img src="${producto.img}" alt"ropabautismo">
            <h3>"${producto.nombre}"</h3>
            <p>${producto.descripcion}</p>
            <p>Precio$ ${producto.precio}</p>
            <button onclick = "agregarAlCarrito(${producto.id})">Comprar</button>
        `
        bebes.appendChild(card1)
    })
}


function agregarAlCarrito (id){
    const producto = productos.find(p => p.id === id)
    carrito.push(producto)

    mostrarCarrito()
    
}

function mostrarCarrito(){
    carritoLista.innerHTML= "";
    carrito.forEach((producto, index)=>{

        const item = document.createElement("li");

        item.innerHTML=`
            ${producto.nombre} ${producto.precio}
            
            `
            carritoLista.appendChild(item)
    })

}

agregarProductos()