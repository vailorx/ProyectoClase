import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Login} from '../components/Login';
import {Registro} from '../components/Registro';
import {Explorar} from '../components/Explorar';
import {QueHacerHoy} from '../components/QueHacerHoy';
export const RouterPrincipal = () => {

  return (
    <BrowserRouter>
    <div>
    <nav className="navbar bg-base-100">
  <div className="flex-1">
    <NavLink className="text-xl normal-case btn btn-ghost" to="/">Callejeando</NavLink>
  </div>
  <div className="flex-none">
    <ul className="px-1 menu menu-horizontal">
      <li><NavLink to="/explorar">Explorar</NavLink></li>
      {/*<li tabIndex={0}>
            <a>
          Login
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
        <ul className="p-2 bg-base-100">
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/registro">Registro</NavLink></li>
        </ul>
  </li>*/}
      <li><NavLink to="/quehacerhoy">Que hacer hoy</NavLink></li>
    </ul>
  </div>
</nav>
    
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<Registro />}/>
            <Route path='/explorar' element={<Explorar />}/>
            <Route path='/quehacerhoy' element={<QueHacerHoy />}/>
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
