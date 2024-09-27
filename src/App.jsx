import { useState } from 'react'
import './App.css'
import Contato from './components/Contato'
import Homepage_farmarcia from './components/Homepage_farmarcia'
import Logo from './components/Logo'
import Nos from './components/nos'

function App() {
  const [pagina, setPagina] = useState(<Homepage_farmarcia />)
  return (
   <div>
        <nav className='navBar-container'>
          <Logo />
          <button onClick={() => {setPagina(<Homepage_farmarcia />)}}>Home</button>
          <button onClick={() => {setPagina(<Nos />)}}>Sobre nós </button>
          <button onClick={() => {setPagina(<Contato />)}}>Contato</button>
        </nav>
    
         {pagina}
       </div>
  )
}

export default App
