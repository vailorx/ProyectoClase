import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate, useNavigate} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Login} from '../components/Login';
import {Registro} from '../components/Registro';
export const RouterPrincipal = () => {
    /*
    {Futuro footer}
     <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Servicios</span> 
    <a className="link link-hover">Diseño</a>
    <a className="link link-hover">Marketing</a>
  </div> 
  <div>
    <span className="footer-title">Compañia</span> 
    <a className="link link-hover">Sobre nosotros</a>
    <a className="link link-hover">Contacto</a>
    <a className="link link-hover">Empleo</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terminos de uso</a>
    <a className="link link-hover">Politica de privacidad</a>
    <a className="link link-hover">Politica de coockies</a>
  </div>
</footer>
    */
   /*
   const navegar = useNavigate();
   const enviar = (lugar) =>{
    let url = "/" + {lugar};
    navegar(url)
   }
   */
  return (
    <BrowserRouter>
    <div>
    <nav className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><NavLink to="/">Callejeando</NavLink></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Explorar</a></li>
      <li tabIndex={0}>
        <NavLink to="/login">
          Login
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </NavLink>
        <ul className="p-2 bg-base-100">
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/registro">Registro</NavLink></li>
        </ul>
      </li>
      <li><a>Distancia</a></li>
    </ul>
  </div>
</nav>
    
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<Registro />}/>
            <Route path='/redirigir' element={<Navigate to="/inicio" />} />
            <Route path='*' element={(
                <>
                <h1> Error 404 </h1>
                <strong>Esta pagina no existe</strong>
                </>
            )}/>

        </Routes>
   
    
   
    </div>
    </BrowserRouter>
  )
  
}
