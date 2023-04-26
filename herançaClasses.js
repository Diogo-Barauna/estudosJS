class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado')
            return;
        }
        this.ligado = true;
    }
    desligar(){ 
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
            return;
        }
        this.ligado = false;
    }
}

// *Não fazer hierarquias muito longas*

class Smartphone extends Dispositivo {
    constructor(nome,gb,modelo){
        super(nome);
        this.gb = gb
        this.modelo = modelo
    }
}

class Tablet extends Dispositivo{
    constructor(nome, wiFi){
        super(nome);
        this.wiFi = wiFi;
    }
    ligar(){
        console.log('Método ligar alterado (polimorfismo)');
    }
}
const d1 = new Smartphone('iPhone','16','15');
const d2 = new Tablet ('iPad', false)
d1.ligar();
d2.ligar();

    