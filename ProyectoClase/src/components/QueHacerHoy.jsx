import background from '../images/gps.jpg'
import { useEffect, useState } from 'react';
import data from "../data.js"
import { ListaConFiltro } from './ListaConFiltro';
export const QueHacerHoy = () => {   

    const [position, setPosition] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [mostrarMon, setMostrarMon] = useState(false);
    const [mostrarRes, setMostrarRes] = useState(false);
    const [mostrarDesc, setMostrarDesc] = useState(false);

    useEffect(() => {
      const handleSuccess = (position) => {
        setPosition(position);
      };
  
      const handleError = (error) => {
        console.log(error)
        return(<div><p>Cambie de navegador</p></div>)
      };
  
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    function mostrarMonumentos(){
        mostrarRes && setMostrarRes(false);
        mostrarDesc && setMostrarDesc(false);
        setMostrarMon(!mostrarMon);
    }
    function mostrarRestaurantes(){
        mostrarMon && setMostrarMon(false);
        mostrarDesc && setMostrarDesc(false);
        setMostrarRes(!mostrarRes)
    }
    function mostrarDesconocidos(){
        mostrarRes && setMostrarRes(false);
        mostrarMon && setMostrarMon(false);
        setMostrarDesc(!mostrarDesc)
    }
    

    return(
        <div className="flex flex-col items-center w-screen h-screen" style={ {backgroundImage: `url(${background})`}}>
            <div className='flex items-center justify-center w-2/4 m-10 text-center rounded-full bg-slate-900 h-1/4 '>
                <div className=''>
                    <div>

                <input type="number" placeholder="kilometros" onChange={(e) => setInputValue(e.target.value)} id="km" name="km" className="w-1/6 max-w-xs input input-bordered input-error" /><span className="pl-2 text-2xl text-white">KM</span>

                </div>
                    <span className="items-center w-2/3 mt-4 ml-20 text-white">Introduzca los kilometros máximos desde su ubicación de los lugares que quiere visitar </span>

                </div>
               
            </div>
            <div className="w-full btn-group">
                <button className="w-1/3 btn" onClick={mostrarMonumentos}>Monumentos</button>
                <button className="w-1/3 btn" onClick={mostrarRestaurantes}>Restaurantes</button>
                <button className="w-1/3 btn" onClick={mostrarDesconocidos}>Lugares Desconocidos</button>
            </div>

          
                {mostrarRes && 
                    <div className="justify-center w-full h-full cards-list bg-slate-900">
                {
            data[0].Bares_Restaurantes.map((item) => (
                    <ListaConFiltro key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion} ubiUser={position} input={inputValue} CoordenadaX={item.CoordenadaX} CoordenadaY={item.CoordenadaY}></ListaConFiltro>
                    
                  ))} 
                    </div>
                }
                  {mostrarMon &&
                <div className="justify-center w-full h-full cards-list bg-slate-900">
            {
            data[0].Patrimonio_Historico_Artistico.map((item) => (
                    <ListaConFiltro key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion} ubiUser={position} input={inputValue} CoordenadaX={item.CoordenadaX} CoordenadaY={item.CoordenadaY}></ListaConFiltro>
                    
                  ))} 
                  </div>
                  
                }
                {mostrarDesc &&
                                <div className="justify-center w-full h-full cards-list bg-slate-900">
                            {
                            data[0].Sevilla_Desconocida.map((item) => (
                                    <ListaConFiltro key={item.id} titulo={item.Titulo} coverImg={item.Imagen} stat={item.Valoracion} date={item.Fecha} price={item.Precio} descrip={item.Descripcion} ubiUser={position} input={inputValue} CoordenadaX={item.CoordenadaX} CoordenadaY={item.CoordenadaY}></ListaConFiltro>
                                    
                                ))} 
                                </div>
                                
                }
                
                    

        </div>
    )
}