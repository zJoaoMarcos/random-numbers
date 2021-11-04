console.time('dbcode'); 
var array = []; 
function randomNumbers(max) {
    // cria um número aleatório
    let a = Math.floor(Math.random() * (max));
    // enquanto  o número aleatório não for igual a -1 significa que ele ja existe no array, então temos que criar outro número aleatório.
    while(array.indexOf(a) != -1) {
        // criando outro número aleatório
        a = Math.floor(Math.random() * (max));
    };
    return a 
};
let max = 999;
let min = 0;

for (var i = min;i < max;i++) {
    //adicionando números usando a 
    array.push(randomNumbers(max));
}; 
console.log(array);

// sort ordena o array
array.sort(function(a, b) {
    return a - b;
}); 
console.log(array); 

console.timeEnd('dbcode'); 