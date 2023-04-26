function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
};

function espera(msg,timeout){
    // resolve = sucesso | reject = erro
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, timeout);
    });
};

// Exemplo de uma função que baixaria uma página
function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return espera('Baixei a página',3000)
    };
};

baixaPagina().then(dadosPagina => {console.log(dadosPagina)}).catch(e => console.log(e))

// then = encadeia outra função | catch = captura o erro

espera('Conexão com o BD',rand(1,3)).then(resposta => {
    console.log(resposta);
    return espera ('Buscando os dados da base',rand(1,3));
}).then(resposta => {
    console.log(resposta);
    return espera('Tratando os dados da base',rand(1,3));
}).then(resposta => console.log(resposta)).then(() => console.log('Exibição dos dados'))
.catch(e => console.log('ERRO',e))

console.log('Isso será exibido antes das promisses');


const promises = [
espera('Promise1',rand(1, 5)),
espera('Promise2',rand(1, 5)),
espera('Promise3',rand(1, 5))
];

// Promise.all - resolve todas as promessas e retorna o valor
// Promise.race - retorna a primeira promessa que resolver
// Promise.resolve - retorna uma promise resolvida
// Promise.reject - retorna uma promise rejeitada

Promise.race(promises).then(valor => {console.log(valor)}).catch(erro => console.log(erro));


