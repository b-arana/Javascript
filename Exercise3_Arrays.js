var sum = 0;
var numbers=[2,3,6,1,7,10];
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Segunda parte

var sum = 0;
var numbers = [1, 7, 4, 11, 16, 10];
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
    average = (sum / numbers.length);
}

// Tercera parte

var numMax=null;
var numeros = [10, 16, 99, 0, 52, 90, 7];

for(var i = 0; i < numeros.length;i++){
    if (numeros[i] > numMax){
       numMax = numeros[i];
    }
}
console.log(numMax);