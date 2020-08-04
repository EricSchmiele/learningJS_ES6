const usuario = {
    nome: 'Eric',
    idade: 27,
    endereco: {
        cidade: 'Tatui',
        estado: 'SP',
    },
};

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}

mostraNome(usuario);