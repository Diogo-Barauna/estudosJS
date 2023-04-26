const _velocidade = Symbol('');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    };
    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade(){
        return this[_velocidade]
    }
    acelerar(){
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
};
const ford = new Carro('ford');
ford.velocidade = 100;
console.log(ford.velocidade);
   
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}
p1 = new Pessoa('joao','paulo')
p1.nomeCompleto = 'luiz miranda'
console.log(p1.nomeCompleto);   