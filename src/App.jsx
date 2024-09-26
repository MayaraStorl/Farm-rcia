import { useState } from 'react'
import './App.css'
import Contato from './components/Contato'
import Header from './components/Header'
import Homepage_farmarcia from './components/Homepage_farmarcia'
import Nos from './components/nos'

function App() {
  const [pageNos, setPageNos] = useState(false)
  const [contato, setContato] = useState(false)

  return (
    // <div>
    //   {/* A parte do Header */}
    // <div>
    //     <nav className='navBar-container'>
    //       <img className='logo' src="/images/farmarcia.png" alt="Logo da Farmárcia" />
    //       <button onClick={() => {setPageNos(<Nos />)}}>Sobre nós </button>
    //       <button onClick={() => {setContato(<Contato />)}}>Contato</button>
    //     </nav>
    // </div>
    //       {pageNos && <Nos />}
    //       {Contato && <Contato />}
    //       <Homepage_farmarcia />
    //   </div>
  )
}

export default App
