//QUESTÃO 1
function soma(){
  var i = 13
  var soma = 0
  var k = 0

  while(k < i){
    k = k + 1
    soma = soma + k
    console.log(soma)
  }
}

soma()

//QUESTÃO 2
function checkFibonacciNumber(number) {
  let a = 0, b = 1;
  while (b < number) {
      let temp = b;
      b = a + b;
      a = temp;
  }
  return b === number;
}

const numberToCheck = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

if (checkFibonacciNumber(numberToCheck)) {
  console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}




//QUESTÃO 3

// Sequência a)
let sequencia_a = [1, 3, 5, 7, 9];

// Sequência b)
let sequencia_b = [2, 4, 8, 16, 32, 64, 128];

// Sequência c)
let sequencia_c = [0, 1, 4, 9, 16, 25, 36, 49];

// Sequência d)
let sequencia_d = [4, 16, 36, 64, 100];

// Sequência e)
let sequencia_e = [1, 1, 2, 3, 5, 8, 13];

// Sequência f)
let sequencia_f = [2, 10, 12, 16, 17, 18, 19, 21];



//QUESTÃO 4
/*
Na primeira vez que você for à sala das lâmpadas, ligue o primeiro interruptor e deixe-o ligado por alguns minutos.

Depois, desligue o primeiro interruptor e ligue o segundo.

Vá até a sala das lâmpadas novamente.

Agora, observe as lâmpadas:

Se uma lâmpada estiver acesa, então o primeiro interruptor controla essa lâmpada.
Se a lâmpada estiver apagada e quente ao toque, então o segundo interruptor controla essa lâmpada.
Se a lâmpada estiver apagada e fria ao toque, então o terceiro interruptor controla essa lâmpada. 
*/


//QUESTÃO 5
function inverterString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  return invertedString;
}

// Exemplo de uso:
const minhaString = "Hello, world!";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
