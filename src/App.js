import TIPO_JOGO from './TipoJogo'
import { GeistProvider, CssBaseline, Row } from '@geist-ui/react'
import './App.css';
import { useContext, useState } from 'react'
import { Text, Card, Grid, Button, Select, Spacer, Input } from '@geist-ui/react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Home from "./components/Home/Home"
import CadastroJogo from "./components/CadastroJogo/CadastroJogo"
import DetalhesJogo from "./components/DetalhesJogo/DetalhesJogo"
import JogoContext from "./../src/components/JogoContext"


function App() {

  const [jogos, setJogos] = useState([])

  const [participantes, setParticipantes] = useState([])

  const [nomeParticipante, setNomeParticipante] = useState('')
  const [ramalParticipante, setRamalParticipante] = useState('')
  const [emailParticipante, setEmailParticipante] = useState('')

  const [route, setRoute] = useState('home')

  return <>
    <GeistProvider>
      <CssBaseline />
      <Row justify={'center'} >
        <Text h3> Gerenciador de jogos</Text>
      </Row>
      <Router>
        <JogoContext.Provider value={{ jogos, setJogos }}>
          <Switch>
            <Route path="/cadastrar-jogo">
              <CadastroJogo />
            </Route>
            <Route path="/detalhes-jogo">
              <DetalhesJogo/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </JogoContext.Provider>
      </Router>



    </GeistProvider>
  </>
}

export default App;
