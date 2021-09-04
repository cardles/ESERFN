// TODO: aprimorar textos

const getStart = (req, res) => {
    res.status(200).json({
        titulo: "E se essas ruas fossem nossas?",
        mensagem: "Sejam muito bem-vindas à minha API! Aqui, a proposta é contribuir subjentivamente para a melhora da relação entre mulheres e território urbano. Através de memórias registradas e geoespacializadas, viso aumentar a sensação de pertencimento ao urbano, fomentando discussões sobre feminismo e direito à cidade.",
        instrucoes: "Fazer parte desse projeto é bem tranquilo: para criar memórias, crie uma conta e/ou faça o login. Dessa forma, você pode visualizar apenas as suas memórias, editar ou excluir elas! Se houver alguma dúvidas sobre as informações que pedimos ou sobre o uso da API, por favor verifique a nossa documentação."
    })
};


const getAbout = (req, res) => {
    res.status(200).json({
        message: "Gênero e espaço público."
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