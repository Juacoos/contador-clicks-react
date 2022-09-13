import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoReact from './imagenes/logo-react.png';
import { useState } from 'react';

function App() {

  const [nClicks, setNClicks] = useState(0);

  const manejarClick = () => {
    setNClicks(nClicks + 1);
  }

  const reiniciarContador = () =>{
    setNClicks(0);
  }

  return (
    <div className="App">
      <h1>Contador de Cicks del Joaco con React</h1>
      <div className='logo-contenedor'>
        
        <img 
        className='logo'
        src={logoReact}
        alt='logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador nClicks={nClicks} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
