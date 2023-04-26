const falar = {
    falar(){
        console.log(`${this.nome} fala olá`);
    },
};
const comer = {
    comer(){
        console.log(`${this.nome} come`);
    },
};
const beber = {
    beber(){
        console.log(`${this.nome} bebe`);
    },
};

const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('joao','json');
console.log(p1);
p1.falar();