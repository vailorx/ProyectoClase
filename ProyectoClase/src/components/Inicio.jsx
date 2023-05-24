
import '../App.css'
import background from '../images/iniciobg1.jpg'
import {NavLink} from 'react-router-dom';
import { useEffect } from "react";
import React, { useState } from 'react';

export const Inicio = () => {

/*
const [data, setData] = useState([]);
useEffect(() => {
const fetchData = async () => {
  try {
    const response = await fetch('http://192.168.0.23:8080/DevolverAlumnos2');
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
}, []);


{
data.map((item) => (
        <p key={item.id}>{item.id}{item.nombre}</p>
        
      ))}
*/
  return (
    <div className="bg-gradient-to-b from-[#9E47E2] to-purple-300 w-full h-full">
      <div className='w-screen h-screen bg-center' style={ {backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
<div  className="bg-[#9E47E2] w-screen h-screen bg-opacity-30">
<div className='flex justify-center'>
<h1 className='flex justify-center mt-20 font-bold text-5xl text-white shadow-lg shadow-cyan-500/80'>Callejeando</h1>

</div>
<div className='h-2/3 w-screen flex justify-center items-center'>
<NavLink to="/login" className="font-bold mt-30 btn btn-outline btn-warning w-1/3" >Entrar </NavLink>


  
</div>
</div>
      </div>
    </div>
  )
}
