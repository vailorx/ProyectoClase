
import '../App.css'
import background from '../images/loginbg.jpg'
import {NavLink, useNavigate, useParams} from 'react-router-dom';
export const Login = () => {
  const navegar = useNavigate();
 const enviar = (e) => {
  e.preventDefault();
  let usuario = e.target.usuario.value;
  const url = "/registro/"+usuario;
  if(usuario.length <= 0){
    navegar("/inicio")
  } else{
    navegar(url);
  }
  
 };
   
  return (
    <form className="bg-[#9E47E2] w-screen h-screen" onSubmit={enviar}>
      <div className='w-screen h-screen bg-center' style={ {backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
<div  className="bg-[#9E47E2] pt-10 w-screen h-screen bg-opacity-30 flex justify-start flex-col items-center">

<div className='flex w-2/3 pt-10 h-2/3 '>
<div className='h-full w-full bg-[#7946A0] bg-opacity-60 rounded-3xl p-20 text-2xl font-bold'>
<p className='mt-0 mt-8 text-center text-white sm:'>Usuario:</p>
<input type='text' name="usuario" className='mt-14 w-full bg-[#E2BEFF]  rounded-3xl text-black pl-5'></input>
<p className='text-center text-white mt-14'>Password:</p>
<input type='password' name="password" className='mt-14 w-full bg-[#E2BEFF] rounded-3xl text-black pl-5'></input>
</div>
</div>
<div className='w-2/3 pt-5'>
<input type="submit" name="enviar" value="Login" className="font-bold mt-30 btn w-full bg-[#9E47E2] bg-opacity-30 border-0 text-white text-2xl"></input>
  </div>
  <div className='w-2/3 pt-5'>
<NavLink to="/registro"className="font-bold mt-30 btn w-full bg-[#9E47E2] bg-opacity-30 border-0 text-white text-2xl">Registro</NavLink>
  </div>
</div>
      </div>
    </form>
  )
}
