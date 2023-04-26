const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const numeros2 = numeros.filter(valor => valor > 10);
console.log(numeros2);

const pessoas = [
    { nome: 'luiz' , idade: 62 },
    { nome: 'maria' , idade: 23 },
    { nome: 'eduardo' , idade: 55 },
    { nome: 'leticia' , idade: 19 },
    { nome: 'rosane' , idade: 32 },
    { nome: 'wallace' , idade: 47 }
];
const longName = pessoas.filter(obj => obj.nome.length >= 5).map(obj => obj.nome);
console.log(longName);
const old = pessoas.filter(obj => obj.idade > 50).map(obj => obj.nome);
console.log(old);
const aEnd = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')).map(obj => obj.nome);
console.log(aEnd);