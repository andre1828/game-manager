import { Text, Card, Grid, Button } from '@geist-ui/react'
import { useHistory } from 'react-router-dom'
import useContext from 'react'
import JogoContext from './../JogoContext'

function Home() {

    let history = useHistory()
    let [jogos, setJogos] = useContext(JogoContext)
    console.log(jogos);


    return <>
        <Text h3>Gerenciador de jogos</Text>
        <Button type='success' onClick={() => history.push('cadastro')}>Criar jogo</Button>
        <Grid.Container gap={2} >
            {jogos.map(jogo => <Grid xs={24} md={12} justify="center">
                <Card shadow>
                    <h4>Jogooo {jogo}</h4>
                </Card>
            </Grid>
            )}
        </Grid.Container>
    </>
}

export default Home