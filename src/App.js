import TIPO_JOGO from './TipoJogo'
import { GeistProvider, CssBaseline, Row } from '@geist-ui/react'
import './App.css';
import { useState } from 'react'
import { Text, Card, Grid, Button, Select, Spacer, Input } from '@geist-ui/react'


function App() {

  const [jogos, setJogos] = useState([])

  const [tipoJogo, setTipoJogo] = useState(TIPO_JOGO.MEGA_SENA.toString())
  const [dataSorteio, setDataSorteio] = useState(new Date())
  const [valorCota, setValorCota] = useState(0)
  const [qtdCota, setQtdCota] = useState(0)

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
      <Button onClick={() => setRoute('cadastrarJogo')}
        style={{ display: route === 'home' ? '' : 'none' }}>Criar jogo</Button>

      <Spacer y={2} />

      <Grid.Container gap={2} style={{ display: route === 'home' ? '' : 'none' }}>
        {jogos.length > 0
          ? jogos.map(jogo => <Grid xs={24} md={12} justify="center">
            <Card shadow>
              <Text h4>Jogo {jogo.id}</Text>
              <Text h4>Tipo: {jogo.tipoJogo == 0 ? "Mega Sena" : "Quina"}</Text>
              <Text h4>Valor da cota: {jogo.valorCota}</Text>
              <Text h4>Quantidade de cotas: {jogo.qtdCota}</Text>
              <Text h4>Data do sorteio {jogo.dataSorteio.toLocaleString()}</Text>
            </Card>
          </Grid>
          )
          : <Grid><Text h4>Nenhum jogo cadastrado</Text></Grid>
        }
      </Grid.Container>
      <Spacer y={5} />

      <Grid.Container direction={'column'} style={{ display: route === 'cadastrarJogo' ? '' : 'none' }}>
        <Text h4>Cadastrar jogo</Text>
        <Text h6>Tipo de jogo</Text>
        <Select placeholder="Tipo de jogo" value={tipoJogo} onChange={setTipoJogo}>
          <Select.Option value="0">Mega Sena</Select.Option>
          <Select.Option value="1">Quina</Select.Option>
        </Select>
        <Spacer y={.5} />
        <Input label="Valor da cota" onChange={e => setValorCota(e.target.value)} />
        <Spacer y={.5} />
        <Input label="Quantidade de cotas" onChange={e => setQtdCota(e.target.value)} />
        <Spacer y={.5} />
        <Input label="Data do sorteio" type="date" onChange={e => setDataSorteio(e.target.value)} />
        <Spacer y={.5} />
        <Button onClick={() => {
          const jogo = {}

          jogo.id = jogos.length
          jogo.tipoJogo = tipoJogo
          jogo.valorCota = valorCota
          jogo.qtdCota = qtdCota
          jogo.dataSorteio = dataSorteio

          setJogos([...jogos, jogo])
          setRoute('home')
        }} >Cadastrar jogo</Button>
      </Grid.Container>

      <Spacer y={5} />

      <Grid.Container direction={'column'} style={{ display: route === 'cadastrarParticipante' ? '' : 'none' }}>

        <Text h4>Cadastrar Participante</Text>
        <Spacer y={.5} />
        <Input label="Nome" onChange={e => setNomeParticipante(e.target.value)} />
        <Spacer y={.5} />
        <Input label="Ramal" onChange={e => setRamalParticipante(e.target.value)} />
        <Spacer y={.5} />
        <Input label="E-mail" type="email" onChange={e => setEmailParticipante(e.target.value)} />
        <Spacer y={.5} />
        <Button onClick={() => {
          const participante = {}

          participante.nome = nomeParticipante
          participante.ramal = ramalParticipante
          participante.email = emailParticipante

          setParticipantes([...participantes, participante])
          setRoute('home')
        }}>Cadastrar participante</Button>
      </Grid.Container>

      <Spacer y={5} />

      <Button onClick={() => setRoute('cadastrarParticipante')}
        style={{ display: route === 'home' ? '' : 'none' }} >Cadastrar participante</Button>
      <Grid.Container gap={2} style={{ display: route === 'home' ? '' : 'none' }}>
        {participantes.map(p => <Grid xs={24} md={12} justify="center">
          <Card type='success' shadow>
            <Text h4>Nome: {p.nome}</Text>
            <Text h4>Ramal: {p.ramal}</Text>
            <Text h4>E-mail: {p.email}</Text>
          </Card>
        </Grid>)}
      </Grid.Container>

    </GeistProvider>
  </>
}

export default App;
