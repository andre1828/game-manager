function* gerarId() {
    let id = 1
    while (true)
        yield id++
}

export default gerarId()