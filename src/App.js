import './App.css';
import Listadotareas from './componentes/ListadoTareas';
import imagenfcc from './imagenes/FreeCodeCamp_logo.png'



function App() {
  return (
    <div className="App">
      <div className='contenedor-imagen'>
        <img className='imagen-fcc' src={imagenfcc} alt='imagen logo fcc'/>
      </div>
      <div className='lista-principal-tareas'>
        <h1>Mis tareas</h1>
        <Listadotareas />

      </div>
    </div>
  );
}

export default App;
