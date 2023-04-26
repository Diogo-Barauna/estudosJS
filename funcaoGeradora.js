function* generator1(){
    // codigo
    yield '1';
    // codigo
    yield '2';
    // codigo
    yield '3';
}

g1 = generator1()
for (valor of g1){
    console.log(valor);
}

function* generator2(){
    let i = 0;
    while (true){
        yield i;
        i++
    }
}

function* generator3(){
    yield 0;
    yield 1;
    yield 2;
}

function* generator4(){
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generator4();
for (let valor of g4){
    console.log(valor);
}

function* generator5(){
    yield function(){
        console.log('y1');
    };
    //...
    yield function(){
        console.log('y2');
    } 
}
const g5 = generator5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();