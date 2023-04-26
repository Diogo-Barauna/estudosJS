
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * percentual/100)
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * percentual/100)
}
const p1 = new Produto('Camisa',50)

p1.aumento(100)
console.log(p1);

const p2 = {
    nome: 'caneca',
    preco: 20
};
Object.setPrototypeOf(p2,Produto.prototype)
p2.desconto(20);
console.log(p2);
const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    slogan: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'foda'
    },
});

p3.aumento(10);
console.log(p3);