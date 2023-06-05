import React from 'react'
import Banner from '../herramientasGenerales/Footerybanner/Banner.jsx'
import Footer from '../herramientasGenerales/Footerybanner/Footer.jsx'
import data from "../../data.js"
import { ListaGeneral } from '../Listas/ListaGeneral.jsx'
export const Explorar = () => {   
  return(
    <>
    <Banner url={"../../../images/banner.jpg"}/>
    <div className='w-full h-20 pt-3 pb-2 pl-3'>
        <p className='text-center'>En esta pagina mostramos todos los lugares que disponemos actualmente en nuestra base de datos. Son lugares de alta valoración actualmente en Sevilla, como podemos comprobar en su propia valoración obtenida directamente desde las opiniones de google. La principal idea de esta pagina web se encuentra en Que hacer hoy en nuestro menu de navegación que se encuentra arriba a la derecha, Echale un vistazo!</p>
    </div>
    <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista de monumentos:</p>
        </div>
        <div className="m-5 cards-list">
    {
data[0].Patrimonio_Historico_Artistico.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion} ></ListaGeneral>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista de restaurantes:</p>
        </div>
            <div className="m-5 cards-list">
    {
data[0].Bares_Restaurantes.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion}></ListaGeneral>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista lugares poco conocidos:</p>
        </div>
            <div className="m-5 cards-list">
    {
data[0].Sevilla_Desconocida.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion}></ListaGeneral>
        
      ))} 
            </div>
            
          <Footer/>  
    </>
   
    
  )
}

