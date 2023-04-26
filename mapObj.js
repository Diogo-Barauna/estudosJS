const pessoas = [
    {id: 1, nome: 'jao1'},
    {id: 2, nome: 'jao2'},
    {id: 3, nome: 'jao3'}
];

const novasPessoas = {};
for (const pessoa of pessoas){
   const {id} = pessoa;
   novasPessoas[id] = {...pessoa}
}
console.log(novasPessoas[2]);

const novasPessoas2 = new Map();
for (const pessoa of pessoas){
   const {id} = pessoa;
   novasPessoas2.set(id, {...pessoa});
}
console.log(novasPessoas2);
console.log(novasPessoas2.get(2));  

// OS 2 JEITOS FUNCIONAM ATUALMENTE
// Em versões anteriores apenas o segundo