
import '../App.css'
import background from '../images/loginbg.jpg'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Registro from './Registro';
const Login = () => {
  function moveToLogin() {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Registro />
      </React.StrictMode>,
    )
  }
   
  return (
    <div className="bg-[#9E47E2] w-screen h-screen">
      <div className='w-screen h-screen bg-center' style={ {backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
<div  className="bg-[#9E47E2] pt-10 w-screen h-screen bg-opacity-30 flex justify-start flex-col items-center">
<div>
<h1 className='font-bold text-5xl text-white shadow-lg shadow-cyan-500/80'>Callejeando</h1>

</div>
<div className='flex  w-2/3 h-2/3 pt-10 '>
<div className='h-full w-full bg-[#7946A0] bg-opacity-60 rounded-3xl p-20 text-2xl font-bold'>
<p className='text-white text-center mt-8 sm: mt-0'>Usuario:</p>
<input type='text' className='mt-14 w-full bg-[#E2BEFF]  rounded-3xl text-black pl-5'></input>
<p className='text-white mt-14 text-center'>Password:</p>
<input type='password' className='mt-14 w-full bg-[#E2BEFF] rounded-3xl text-black pl-5'></input>
</div>
</div>
<div className='pt-5 w-2/3'>
<button className="font-bold mt-30 btn w-full bg-[#9E47E2] bg-opacity-30 border-0 text-white text-2xl">Login</button>
  </div>
  <div className='pt-5 w-2/3'>
<button className="font-bold mt-30 btn w-full bg-[#9E47E2] bg-opacity-30 border-0 text-white text-2xl" onClick={moveToLogin}>Registro</button>
  </div>
</div>
      </div>
    </div>
  )
}

export default Login