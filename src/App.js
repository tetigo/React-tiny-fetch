import React from 'react';

import Header from './Header'
import Produto from './Produto'


const App = () => {

  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  return (
    <React.Fragment>
      <Header setDados={setDados} setCarregando={setCarregando}/>
      {carregando && <h3>Loading...</h3>}
      {!carregando && dados && <Produto dados={dados}/>}
    </React.Fragment>
  )
}

export default App

