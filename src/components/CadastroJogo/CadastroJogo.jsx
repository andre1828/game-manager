import { Input, Spacer, Select, Text, Button } from '@geist-ui/react'
import { useContext, useState } from 'react'
import TIPO_JOGO from './../../TipoJogo'
import JogoContext from './../JogoContext'

function CadastroJogo() {

    const jogos = useContext(JogoContext)
    const [tipoJogo, setTipoJogo] = useState(TIPO_JOGO.MEGA_SENA.toString())
    const [dataSorteio, setDataSorteio] = useState(new Date())
    const [valorCota, setValorCota] = useState(0)
    const [qtdCota, setQtdCota] = useState(0)

    return <>
        <Text h4>Tipo de jogo</Text>
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

        <Button onClick={() => console.log({ tipoJogo, dataSorteio, valorCota, qtdCota })}>Cadastrar jogo</Button>
    </>
}

export default CadastroJogo