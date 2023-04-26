class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 40;
    }
    //Métodos de instância
    aumentar(){
        if (this.volume >= 100) return;
        this.volume += 2;
    }
    diminuir(){
        if (this.volume < 0) return;
        this.volume -= 2;
    }
    // Método estático - ele fica apenas nesta classe (é tipo uma função separada dentro de um classe)
    static trocaPilha(){
        console.log('Trocando pilha');
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentar();
c1.aumentar();
console.log(c1);
// c1.trocaPilha(); - Vai retornar erro
ControleRemoto.trocaPilha();
