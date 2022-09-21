import React, {useState} from 'react';
import ContadorCarrito from './ContadorCarrito';

const ItemListContainer = ({numero}) => {
    const[posicion] = useState([
        {
            id: 0,
            tipo: "Libreta",
            nombre: "Chicas Gamer",
            precio: 12.5,
            stock: 10,
            imagen: "../resources/imagenes/chicasgamer.webp"
        },
        {
            id: 1,
            tipo: "Libreta",
            nombre: "Six Fanarts",
            precio: 10.5,
            stock: 15,
            imagen: "../resources/imagenes/sixfanarts.webp"
        },
        {
            id: 2,
            tipo: "Libreta",
            nombre: "Lulu Martins",
            precio: 11.0,
            stock: 6,
            imagen: "../resources/imagenes/lulumartins.webp"
        },
        {
            id: 3,
            tipo: "Libreta",
            nombre: "Christine Hug",
            precio: 12.0,
            stock: 8,
            imagen: "../resources/imagenes/christinehug.webp"
        },
        {
            id: 4,
            tipo: "Sticker",
            nombre: "Sirenas",
            precio: 3.50,
            stock: 6,
            imagen: "../resources/imagenes/sirenas.webp"
        },
        {
            id: 5,
            tipo: "Sticker",
            nombre: "Chicas",
            precio: 3.0,
            stock: 7,
            imagen: "../resources/imagenes/chicas.webp"
        },
        {
            id: 6,
            tipo: "Sticker",
            nombre: "Halloween",
            precio: 2.75,
            stock: 10,
            imagen: "../resources/imagenes/halloween.webp"
        },
        {
            id: 7,
            tipo: "Sticker",
            nombre: "Animales",
            precio: 3.5,
            stock: 10,
            imagen: "../resources/imagenes/animales.webp"
        },
        {
            id: 8,
            tipo: "Poster",
            nombre: "Una Noche de Verano",
            precio: 5.75,
            stock: 6,
            imagen: "../resources/imagenes/nocheverano.webp"
        },
        {
            id: 9,
            tipo: "Poster",
            nombre: "Amantes Mariposa",
            precio: 6.0,
            stock: 8,
            imagen: "../resources/imagenes/amantesmariposa.webp"
        },
        {
            id: 10,
            tipo: "Poster",
            nombre: "San Valentín espacial",
            precio: 5.0,
            stock: 10,
            imagen: "../resources/imagenes/sanvalentin.webp"
        },
        {
            id: 11,
            tipo: "Poster",
            nombre: "Gatos",
            precio: 5.50,
            stock: 7,
            imagen: "../resources/imagenes/gatos.webp"
        }
    ])

    const producto = posicion[parseInt(numero)]

    return (
        <div className='cart-container'>
            <div className='image-container'>
                <img className='image-producto' src={producto.imagen} alt="" />
            </div>
            <div className='cart-description-container'>
                <p className='titulo-producto'>Nombre: {producto.nombre}</p>
                <p className='titulo-producto'>Tipo: {producto.tipo}</p>
                <p className='titulo-producto'>Precio: ${producto.precio}</p>
                <p className='titulo-producto'>stock: {producto.stock} unidades</p>
            </div>
            <ContadorCarrito/>
        </div>
    );
}

export default ItemListContainer;

