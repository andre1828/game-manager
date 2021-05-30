import { Text, Card, Grid, Button, Row, Spacer } from '@geist-ui/react'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import JogoContext from './../JogoContext'

function Home() {

    let history = useHistory()
    const { jogos, setJogos } = useContext(JogoContext)
    // console.log(jogos);
    // const jogos = [{ id: 'asd', tipoJogo: 'asd', qtdCota: '12313', dataSorteio: 'asdasd' }]


    return <>

        <Button onClick={() => history.push('cadastrar-jogo')}>Criar jogo</Button>

        <Spacer y={2} />

        <Grid.Container gap={2}>

            {jogos.length > 0
                ? (
                    jogos.map(jogo =>
                    (<Grid xs={24} md={12} justify="center" key={jogo.id}>
                        <Card type={'violet'} shadow onClick={() => history.push('/detalhes-jogo', { jogoSelecionado: jogo.id })}>
                            <Text h4>Jogo {jogo.id}</Text>
                            <Text h4>Tipo: {jogo.tipoJogo == 0 ? "Mega Sena" : "Quina"}</Text>
                            <Text h4>Valor da cota: {jogo.valorCota}</Text>
                            <Text h4>Quantidade de cotas: {jogo.qtdCota}</Text>
                            <Text h4>Data do sorteio {jogo.dataSorteio.toLocaleString()}</Text>
                        </Card>
                    </Grid>)
                    )
                )
                : (
                    <Row justify={"center"}>
                        <Text h4>Nenhum jogo cadastrado</Text>
                    </Row>
                )
            }
        </Grid.Container>
    </>
}

export default Home