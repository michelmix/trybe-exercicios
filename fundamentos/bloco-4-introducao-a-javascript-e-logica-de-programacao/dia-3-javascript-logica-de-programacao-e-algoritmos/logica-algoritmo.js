/* 
// Exercício 1 
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
//Aqui ele faz o cálculo e guarda o resultado até acabarem as repetições, tornando a própria resposta o novo resultado para a nova repetição do comando
    
} console.log(fatorial); 


// Exercício 2
let word = 'tryber';

let palavraInvertida = ""
let resultado = ""
// Preciso percorrer todas as letras e depois jogar numa let invertida

for (let index = 0; index < word.length; index++) {
    palavraInvertida += word[word.length - 1 - index]
}

console.log(palavraInvertida);


// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

*/

// Exercício 4

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let arrayNumeros = [];

for (let index = 2; index <= 50; index++) {
	arrayNumeros.push(index)	
}

for (array = 0; < array.array = 0;++) {
	const element array = 0;];
	
}
console.log(arrayNumeros);