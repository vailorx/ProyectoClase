import React from 'react'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'
import data from "../data.js"
import { ListaGeneral } from './ListaGeneral.jsx'
export const Explorar = () => {   
  return(
    <>
    <Banner />
    <div className='w-full h-20 pt-3 pb-2 pl-3'>
        <p className='text-center'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona</p>
    </div>
    <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista de restaurantes:</p>
        </div>
        <div className="m-5 cards-list">
    {
data[0].Patrimonio_Historico_Artistico.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.coverImg} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion} ></ListaGeneral>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista de monumentos:</p>
        </div>
            <div className="m-5 cards-list">
    {
data[0].Bares_Restaurantes.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.coverImg} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion}></ListaGeneral>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-xl text-yellow-400'>Lista de lugares de ocio:</p>
        </div>
            <div className="m-5 cards-list">
    {
data[0].Sevilla_Desconocida.map((item) => (
        <ListaGeneral key={item.id} titulo={item.Titulo} coverImg={item.coverImg} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion}></ListaGeneral>
        
      ))} 
            </div>
            
          <Footer/>  
    </>
   
    
  )
}

