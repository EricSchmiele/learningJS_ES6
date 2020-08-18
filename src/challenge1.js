//======================DESAFIO 1======================
console.log("DESAFIO 1")

//EXERCICIO 1
console.log("EXERCICIO 1");

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

//EXERCICIO 2
console.log("EXERCICIO 2");

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
let idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//2.2
let acimaDe18NaRocket = usuarios.filter(usuario => usuario.empresa === "Rocketseat" && usuario.idade > 18);
console.log(acimaDe18NaRocket);

//2.3
let trabalhaNaGoogle = usuarios.find(usuario => usuario.empresa === "Google");
console.log(trabalhaNaGoogle);

//2.4
usuarios.forEach(usuario => usuario.idade *= 2);
let max50 = usuarios.filter(usuario => usuario.idade <= 50);
console.log(max50);

//EXERCICIO 3
console.log("EXERCICIO 3");

//3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

//3.2
const usuario = { nome: 'Diego', idade: 23 };
mostraIdade = user => user.idade;
console.log(mostraIdade(usuario));

//3.3
const nome = "Diego";
const idade = 23;
mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());

//EXERCICIO 4
console.log("EXERCICIO 4");

//4.1
const empresa = {
    nome2: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome2, endereco: { cidade, estado } } = empresa;
console.log(nome2);
console.log(cidade);
console.log(estado);

//4.2
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//EXERCICIO 5
console.log("EXERCICIO 5");

//5.1
const arr2 = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr2;
console.log(x);
console.log(y);

//5.2
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario3 = { ...usuario2, nome: 'Gabriel' };
const usuario4 = { ...usuario2, endereco: { ...usuario2.endereco, cidade: 'Lontras' } };

console.log(usuario3);
console.log(usuario4);

//EXERCICIO 6
console.log("EXERCICIO 6");

const usuario5 = 'Diego';
const idade2 = 23;
console.log(`O usuário ${usuario5} possui ${idade2} anos`);

//EXERCICIO 7
console.log("EXERCICIO 7");

const nome3 = 'Diego';
const idade3 = 23;
const usuario6 = {
    nome3,
    idade3,
    cidade: 'Rio do Sul',
};

console.log(usuario6);