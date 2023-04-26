function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquepriv = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){return estoquepriv;},
        set: function(valor){
            if (typeof valor !== 'number') {
                throw new TypeError('Stock value is NaN');
            }
            estoquepriv = valor;
        }
    });
};

const p1 = new Produto('camiseta',20,3);
p1.estoque = '30'
console.log(p1.estoque)