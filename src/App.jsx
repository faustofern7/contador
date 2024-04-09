import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Informacion from './components/Informacion';
import Contador from './components/Contador';


function App() {

  return (
  <main className='container my-5'>
        <h1>Primer proyecto con react</h1>
        <Informacion comision='c89i'></Informacion>
        <Contador></Contador>
        
  </main>
  )
}

export default App
