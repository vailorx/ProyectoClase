import React from 'react'
import artilleria from '../../images/desconocida/artilleria.jpeg'
import atarazanas from '../../images/desconocida/atarazanas.jpg'
import ceramica from '../../images/desconocida/ceramica.jpg'
import condesa from '../../images/desconocida/condesa.jpg'
import marruecos from '../../images/desconocida/marruecos.jpg'
import panteon from '../../images/desconocida/panteon.jpg'
import bodeguita from '../../images/restaurantes/bodeguita.jpg'
import burguer from '../../images/restaurantes/burguer.jpg'
import golondrina from '../../images/restaurantes/golondrina.jpg'
import hans from '../../images/restaurantes/hans.jpg'
import kinu from '../../images/restaurantes/kinu.jpg'
import mexico from '../../images/restaurantes/mexico.jpg'
import alcazar from '../../images/monumentos/alcazar.jpg'
import caac from '../../images/monumentos/caac.jpg'
import catedral from '../../images/monumentos/catedral.jpg'
import italica from '../../images/monumentos/italica.jpg'
import museo from '../../images/monumentos/museo.jpg'
import plaza from '../../images/monumentos/plaza.jpg'

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
let imagen;
    if(props.coverImg == "artilleria"){
        imagen = artilleria
    }else if(props.coverImg == "atarazanas"){
        imagen = atarazanas
    }else if(props.coverImg == "ceramica"){
        imagen = ceramica
    }else if(props.coverImg == "condesa"){
        imagen = condesa
    }else if(props.coverImg == "marruecos"){
        imagen = marruecos
    }else if(props.coverImg == "panteon"){
        imagen = panteon
    }else if(props.coverImg == "bodeguita"){
        imagen = bodeguita
    }else if(props.coverImg == "burguer"){
        imagen = burguer
    }else if(props.coverImg == "golondrina"){
        imagen = golondrina
    }else if(props.coverImg == "hans"){
        imagen = hans
    }else if(props.coverImg == "kinu"){
        imagen = kinu
    }else if(props.coverImg == "mexico"){
        imagen = mexico
    }else if(props.coverImg == "alcazar"){
        imagen = alcazar
    }else if(props.coverImg == "caac"){
        imagen = caac
    }else if(props.coverImg == "catedral"){
        imagen = catedral
    }else if(props.coverImg == "italica"){
        imagen = italica
    }else if(props.coverImg == "museo"){
        imagen = museo
    }else if(props.coverImg == "plaza"){
        imagen = plaza
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
            <img src={imagen} className=" card--star h-2/6" />
            <br></br>
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