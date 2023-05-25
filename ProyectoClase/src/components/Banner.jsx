import React from 'react'
import background from '../images/banner.jpg'
export const Banner = () => {
    
  return (
    <>
    <div className="hero min-h-1/2" style={ {backgroundImage: `url(${background})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold pt-5 text-yellow-400">! Bienvenido ¡ </h1>
      <p className="mb-5 pt-5 pb-10">En callejeando podras encontrar un gran listado de lugares que a lo mejor te interesan visitar en los alrededores de Sevilla</p>
    </div>
  </div>
</div>
</>
  )
}
export default Banner;
