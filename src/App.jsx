import { useState } from 'react'
import './App.css'
import Contato from './components/Pagina/Contato'
import Convite from './components/Pagina/Convite'
import Homepage_farmarcia from './components/Pagina/Homepage_farmarcia'
import Logo from './components/Pagina/Logo'
import Nos from './components/Pagina/Nos'

function App() {
  const [pagina, setPagina] = useState(<Homepage_farmarcia />)
  return (
   <div>
        <nav className='navBar-container'>
          <Logo />
          <button onClick={() => {setPagina(<Homepage_farmarcia />)}}>Início</button>
          <button onClick={() => {setPagina(<Nos />)}}>Sobre nós </button>
          <button onClick={() => {setPagina(<Contato />)}}>Contato</button>
          <button onClick={() => {setPagina(<Convite />)}}>Venha conferir</button>
        </nav>
    
         {pagina}
       </div>
  )
}

export default App
