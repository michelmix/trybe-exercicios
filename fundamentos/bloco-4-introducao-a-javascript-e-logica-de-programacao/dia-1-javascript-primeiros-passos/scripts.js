// 1

const a = 4;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a + b);


// 2
const num1 = 10;
const num2 = 20;

if (num1 > num2) {
    console.log(num1);
 } else {
console.log(num2);
 }


//3 
const x = 5;
const y = 10;
const z = 20;


if (x > y && x > z) {
  console.log('O maior número é:' + x);
} else if (y > x && y > z) {
  console.log('O maior número é:' + y);
} else {
  console.log('O maior número é:' + z);
};

//4

const meuNumero = -5;

if (meuNumero > 0) {
    console.log("positive");
  } else if (meuNumero < 0) {
    console.log("negative")
  } else {
    console.log("zero");
  };

// 5

  const l1 = 20;
  const l2 = 70;
  const l3 = 80;

  let somaAngulos = l1 + l2 + l3;
  let angulosPositivos = l1 > 0 && l2 > 0 && l3 > 0;

if (angulosPositivos) {
  if (somaAngulos === 180) {
    console.log("true");
  } else {
    console.log("false");
    };
  } else {
    console.log("Erro: Valor não encontrado");
  }
  
// 6

const pecaXadrez = 'Rei';

  switch (pecaXadrez.toLowerCase()) {
    case 'rei':
      console.log('Rei-> Uma casa apenas para qualquer direção.');
      break;
    case 'bispo':
      console.log('Bispo-> Diagonal.');
      break;
    case 'rainha':
      console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peão':
      console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro, peça inválida!');
      break;
  };


// 7

const nota = 60;

if (nota < 0 || nota > 100) {
    console.log("Erro, valor não encontrado!");
} else if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else if (nota >= 60) {
    console.log("Nota D");
} else if (nota >= 50) {
    console.log("Nota E");
} else {
    console.log("Nota F");
};


// 8

const const1 = 1;
const const2 = 3;
const const3 = 5;

let numeroPar = false;

if ((const1 % 2 === 0 || const2 % 2 === 0 || const3 % 2 === 0)) {
    numeroPar = true
};
console.log(numeroPar);



// 9

const constA = 2;
const constB = 2;
const constC = 4;

let numeroImpar = false;

if ((constA % 2 !== 0 || constB % 2 !== 0 || constC % 2 !== 0)) {
    numeroImpar = true;    
};
console.log(numeroImpar);

// 10

// 11




