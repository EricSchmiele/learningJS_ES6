// REST

const usuario1 = {
    nome: 'Eric',
    idade: 27,
    empresa: 'Sonner'
};

const { nome, ...resto } = usuario1;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5, 6, 7));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario2 = { ...usuario1, nome: 'Lucas' };

console.log(usuario2);