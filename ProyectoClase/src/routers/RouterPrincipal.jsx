import React from 'react'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Login} from '../components/Login';
import {Registro} from '../components/Registro';
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<Registro />}/>
            <Route path='*' element={(
                <>
                <h1> Error 404 </h1>
                <strong>Esta pagina no existe</strong>
                </>
            )}/>

        </Routes>
    </BrowserRouter>
  )
}
