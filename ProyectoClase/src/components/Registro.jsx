
import '../App.css'
import background from '../images/loginbg.jpg'
export const Registro = () => {
  function moveToLogin() {

  }
   
  return (
    <div className="bg-[#9E47E2] w-screen h-screen">
      <div className='w-screen h-screen bg-center' style={ {backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
<div  className="bg-[#9E47E2] pt-10 w-screen h-screen bg-opacity-30 flex justify-start flex-col items-center">
<div>

</div>
<div className='flex  w-2/3 h-3/4 pt-10 '>
<div className='h-full w-full bg-[#7946A0] bg-opacity-60 rounded-3xl p-10 text-2xl font-bold '>
<p className='text-white text-center'>Usuario:</p>
<input type='text' className='mt-14 w-full bg-[#E2BEFF]  rounded-3xl text-black pl-5'></input>
<p className='text-white mt-14 text-center'>Password:</p>
<input type='password' className='mt-14 w-full bg-[#E2BEFF] rounded-3xl text-black pl-5'></input>
<p className='text-white mt-14 text-center'>Repeat Password:</p>
<input type='password' className='mt-14 w-full bg-[#E2BEFF] rounded-3xl text-black pl-5'></input>
</div>
</div>
  <div className='pt-5 w-2/3'>
<button className="font-bold mt-30 btn w-full bg-[#9E47E2] bg-opacity-30 border-0 text-white text-2xl" onClick={moveToLogin}>Registro</button>
  </div>
</div>
      </div>
    </div>
  )
}
