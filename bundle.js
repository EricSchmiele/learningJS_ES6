"use strict";

var usuario = {
  nome: 'Eric',
  idade: 27,
  endereco: {
    cidade: 'Tatui',
    estado: 'SP'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
