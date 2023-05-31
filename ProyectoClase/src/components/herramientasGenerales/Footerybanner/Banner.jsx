import background from '../../../images/banner.jpg'
export const Banner = (props) => {
  let backgroundResult;
  if(props.url === "../../../images/banner.jpg"){
    backgroundResult = background;
  }
  return (
    <>
    <div className="hero min-h-1/2" style={ {backgroundImage: `url(${backgroundResult})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="pt-5 mb-5 text-5xl font-bold text-yellow-400">! Bienvenido ¡ </h1>
      <p className="pt-5 pb-10 mb-5">En callejeando podras encontrar un gran listado de lugares que a lo mejor te interesan visitar en los alrededores de Sevilla</p>
    </div>
  </div>
</div>
</>
  )
}
export default Banner;
