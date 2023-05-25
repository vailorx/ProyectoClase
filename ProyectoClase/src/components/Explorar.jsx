import React from 'react'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'
import data from "../data.js"
import { ListaRestaurantes } from './ListaRestaurantes.jsx'
export const Explorar = () => {      
  return (
    <>
    <Banner />
    <div className='w-full h-20 pt-3 pl-3 pb-2'>
        <p className='text-center'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona</p>
    </div>
    <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-yellow-400'>Lista de restaurantes:</p>
        </div>
        <div className="cards-list m-5">
    {
data.map((item) => (
        <ListaRestaurantes key={item.id} title={item.title} coverImg={item.coverImg} stat={item.stats} location={item.location} price={item.price}></ListaRestaurantes>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-yellow-400'>Lista de monumentos:</p>
        </div>
            <div className="cards-list  m-5">
    {
data.map((item) => (
        <ListaRestaurantes key={item.id} title={item.title} coverImg={item.coverImg} stat={item.stats} location={item.location} price={item.price}></ListaRestaurantes>
        
      ))} 
            </div>
            <div className='w-full h-10 pt-3 pl-5 mb-4'>
        <p className='text-yellow-400'>Lista de lugares de ocio:</p>
        </div>
            <div className="cards-list  m-5">
    {
data.map((item) => (
        <ListaRestaurantes key={item.id} title={item.title} coverImg={item.coverImg} stat={item.stats} location={item.location} price={item.price}></ListaRestaurantes>
        
      ))} 
            </div>
            
          <Footer/>  
    </>
   
    
  )
}

