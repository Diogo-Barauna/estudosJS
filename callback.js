function random(){
    num = Math.random() * (5000 - 100) + 100
    return Math.round(num);
}

function f1(callback){
    setTimeout(function(){
    console.log('f1');
    if (callback) callback();
    },random())

}
function f2(callback){
    setTimeout(function(){
    console.log('f2');
    if (callback) callback();
    },random())
}
function f3(callback){
    setTimeout(function(){
    console.log('f3');
    if (callback) callback();
    },random())
}


function f1Callback(){
    f2(f2Callback)
}

function f2Callback(){
    f3(f3Callback)
}

function f3Callback(){
    console.log('fim');
}
f1(f1Callback);