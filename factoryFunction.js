function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}`
        },

        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome;
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        altura,
        peso,
        get imc(){ // IMC vira um atributo
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
};

const p1 = criaPessoa('joao','trombeta',1.8,80)
p1.nomeCompleto = 'Joao Trombeta Garrido'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('viajando'));