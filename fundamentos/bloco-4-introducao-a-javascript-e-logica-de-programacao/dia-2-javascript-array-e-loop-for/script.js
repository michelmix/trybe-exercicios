let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
// Exercício 1
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);    
} 

// Exercício 2
let sum = 0
for (let index = 0; index < numbers.length; index++) {
sum += numbers[index];
}
console.log(sum); 

// Exercício 3

let sum = 0
for (let index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
}
let result = sum / numbers.length;
console.log(result); 

// Exercício 4

if (result > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menos que 20");
} */

// Exercício 5

let maiorNumero = numbers[0]

for (let index = 1; numbers < array.length; index++) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }   
}

console.log(maiorNumero);