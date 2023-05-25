import React from 'react'
import background from '../images/banner.jpg'
import background1 from '../images/katie-zaferes.png'
import background2 from '../images/mountain-bike.png'
import background3 from '../images/photo-grid.png'
import background4 from '../images/wedding-photography.png'

export const ListaRestaurantes = (props) => {
    /*
    <span>{props.stats.rating}</span>
    <span className="gray">({props.stats.reviewCount}) • </span>
    */
   let source;
    if(props.coverImg === "katie-zaferes.png"){
    source = background1;
    } else if(props.coverImg === "mountain-bike.png"){
        source= background2;
    } else if(props.coverImg === "photo-grid.png"){
        source= background3; 
    }else if(props.coverImg === "wedding-photography.png"){
        source= background4;
    }
let image = source;
  return (
    <>
    <div className="card">
            <img
                src={image}
                className="card--image" 
            />
            <div className="card--stats">
            <div className="rating">
                <input className="mask mask-star-2 bg-orange-400 rating-sm" />
                <input className="mask mask-star-2 bg-orange-400 rating-sm" />
                <input className="mask mask-star-2 bg-orange-400 rating-sm" />
                <input className="mask mask-star-2 bg-orange-400 rating-sm" />
                <input className="mask mask-star-2 bg-orange-400 rating-sm" />
            </div>
                
                
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>

    </>
  )
}