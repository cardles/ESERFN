const getStart = (req, res) => {
    res.status(200).json({
        titulo: "E se essas ruas fossem nossas?",
        mensagem: "Sejam muito bem-vindas à minha API! Aqui, a proposta é contribuir subjentivamente para a relação entre mulheres e o espaço público, a fim de gerar maior pertencimento e identidade. Através de memórias coletadas e futuramente espacializadas em um mapa interativo, o objetivo dessa API é representar a identidade feminina no espaço urbano através de suas vivências e, com isso, promover maior identificação com o espaço público, maior pertencimento e fomentar discussões feministas.",
        instrucoes: "Fazer parte desse projeto é bem simples: para criar memórias, crie uma conta e/ou faça o login. Dessa forma, você pode visualizar apenas as suas memórias, editar ou excluir elas. Depois de criadas, elas são apresentadas a todos que visitarem esta API. Se houver alguma dúvida sobre as informações que pedimos ou sobre o uso da API, por favor verifique a nossa documentação."
    })
};


const getAbout = (req, res) => {
    res.status(200).json({
        problema: "As opressões de gênero, classe, raça e sexualidade compõem uma cultura que se reflete no espaço urbano: a cultura da exclusão. Diante disso, as mulheres tem maior dificuldade de deslocamento, menos acesso aos espaços públicos - o que gera mais segregação socioespacial e menor representatividade e identificação.",
        OD2017: "A Pesquisa de Origem e Destino feita pelo Metrô em 2017 indica que, no geral, mulheres se deslocam menos que homens e percorrem distâncias mais curtas. O grau de instrução, a renda, o local de residência e atribuições familiares são fatores que restrigem o deslocamento das mulheres às proximidades de sua casa, geralmente utilizando transporte público ou se locomovendo a pé.",
        solucao: "Reverter as estruturas sociais e, consequentemente, a territorialidade já imposta é um papel à longo prazo. Aos poucos, as mulheres tem vivenciado mais o espaço público e, como forma de incentivo e com o objetivo de gerar maior pertencimento e identificação com esses espaços, para que possamos ocupá-los cada vez mais, essa API foi criada."
    })
};


const getContact = (req, res) => {
    res.status(200).json({
        autora: "Meu nome é Letícia Cardoso, sou bacharel em Arquitetura e Urbanismo e desenvolvedora back-end júnior. Você pode entrar em contato comigo quando quiser pelas redes abaixo:",
        email: "cardles.dev@gmail.com",
        linkedin: "https://www.linkedin.com/in/cardles-dev/"
    })
};


module.exports = {
    getStart,
    getAbout,
    getContact
};