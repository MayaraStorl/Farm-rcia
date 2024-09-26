import React from 'react'
import Nos from './nos'

function Header() {
    const [pageNos, setPageNos] = useState(false)
    const [contato, setContato] = useState(false)

  return (
    <div>
        <nav className='navBar-container'>
          <img className='logo' src="/images/farmarcia.png" alt="Logo da Farmárcia" />
          <button onClick={() => {setPageNos(<Nos />)}}>Sobre nós </button>
          <button onClick={() => {}}>Contato</button>
        </nav>

        {pageNos && <Nos />}
    </div>
  )
}

export default Header
