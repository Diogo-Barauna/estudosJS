function rand(min = 0,max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
};

function espera(msg,timeout){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, timeout);
    });
};
async function executa(){
    try{
        const fase1 = await espera('Fase 1',rand());
        console.log(fase1);
        const fase2 = await espera('Fase 2',rand());
        console.log(fase2);
        const fase3 = await espera('Fase 3',rand());
        console.log(fase3);
        console.log('Terminamos na', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

// Estados de promises:
// pending - pendente
// fullfilled - resolvida
// rejected - rejeitada
