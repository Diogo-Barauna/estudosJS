function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};
function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor = cor
};  
Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.aumento = function(perc){
    this.preco = this.preco + (this.preco * (perc/100))
};
function Caneca (nome,preco,cor,material,estoque){
    Camiseta.call(this,nome,preco,cor)
    this.material = material

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
           return estoque; 
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })  
};
Caneca.prototype = Object.create(Produto.prototype);

const produto = new Produto('Gen',120);
const camisa = new Camiseta('Lacoste',40,'Verde');
const porc = new Caneca('Caneca',20,'Branca','Porcelana',20)

console.log(produto);
console.log(camisa);
console.log(porc);