import { Button, Grid, Text } from '@geist-ui/react'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import JogoContext from './../JogoContext'

function DetalhesJogo() {
    const history = useHistory()
    const location = useLocation()
    const { jogos } = useContext(JogoContext)
    const jogoSelecionado = jogos
        .filter(jogo => jogo.id === location.state.jogoSelecionado)[0]

    return <>
        <Grid.Container direction={'column'} alignContent={'center'}>

            <Text h1>Jogo {jogoSelecionado.id}</Text>
            <Text h3>Tipo de jogo: {jogoSelecionado.tipoJogo === 0 ? "Mega Senha" : "Quina"}</Text>
            <Text h3>Valor da cota: {jogoSelecionado.valorCota}</Text>
            <Text h3>Número de cotas: {jogoSelecionado.qtdCota}</Text>
            <Text h3>Data do sorteio: {jogoSelecionado.dataSorteio.toLocaleString()}</Text>
            <Button onClick={() => history.push('/')}>Voltar</Button>
        </Grid.Container>

    </>
}

export default DetalhesJogo