import React from 'react'
import background from '../images/banner.jpg'
import background1 from '../images/katie-zaferes.png'
import background2 from '../images/mountain-bike.png'
import background3 from '../images/photo-grid.png'
import background4 from '../images/wedding-photography.png'

export const ListaGeneral = (props) => {
    /*
    <span>{props.stats.rating}</span>
    <span className="gray">({props.stats.reviewCount}) • </span>
    */
//let image = source;
/* <img
src={image}
className="card--image" 
/>
*/
let source;
let fecha = props.date ? "Fecha: " +props.date : "";

    if(props.coverImg === "katie-zaferes.png"){
    source = background1;
    } else if(props.coverImg === "mountain-bike.png"){
        source= background2;
    } else if(props.coverImg === "photo-grid.png"){
        source= background3; 
    }else if(props.coverImg === "wedding-photography.png"){
        source= background4;
    }

let precio;
    if(props.price <= 0) {
    precio = "¡GRATIS!";
    } else if(props.price > 0){
        precio = "Precio: " + props.price + " $ / persona";
    } else if(typeof(props.price) === "string"){
        precio = "Precio: " + props.price
    };

let valoracion = Math.round(props.stat);

let numEstrellas = (valoracion == 5) ? <input className="bg-orange-400 mask mask-star-2 rating-sm" /> : "";

  return (
    <>
    <div className="card">
           
            <div className="card--stats">      
            </div>
            <p className="text-base font-bold card--title">{props.titulo}</p>
            <div className="rating">
            <input className="bg-orange-400 mask mask-star-2 rating-sm" />
            <input className="bg-orange-400 mask mask-star-2 rating-sm" />
            <input className="bg-orange-400 mask mask-star-2 rating-sm" />
            <input className="bg-orange-400 mask mask-star-2 rating-sm" />
            {numEstrellas}
            </div>
            <br></br>
            <p>Descripcion:</p>
            <p className="card--title">{props.descrip}</p>
            <p className='text-yellow-700'>{fecha}</p>
            <br></br>
            
            <p className="text-sm card--price">
                <span className="font-bold text-yellow-500">{precio}</span>
            </p>
        </div>

    </>
  )
}