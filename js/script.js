//! ===================== ESERCIZIO PALINDROMO ===================
function isPalindrome (word) {
    const wordLength = word.length;
    for (let i= 0; i<wordLength/2; i++) {
        if (word[i] === word[wordLength -1 -i]) {
            return 'è palindromo';
        }
        else {
            return 'non è palindromo';
        }
    }
}

const userWord = prompt ('scrivi una parola');

const result = isPalindrome(userWord);
console.log(result);


//! ===================== ESERCIZIO PARI E DISPARI ===================
// ===================== UNICA FUNZIONE ===================

// function evenOrOdd (text, num) {
//     const randomNumber = Math.floor (Math.random () * (5) + 1);
//     console.log(randomNumber);
//     // return randomNumber;
//     sum = randomNumber + num;
//         if ((sum %2===0) && (text==='pari')){
//             return ('il numero è pari, hai vinto!')
//         }
//         else if ((sum %2===1) && (text==='dispari')){
//             return ('il numero è dispari, hai vinto!')
//         }
//         else {
//             return ('hai perso!!')
//         }
    
// }

// const userEvenOrOdd = prompt ('Scegli pari o dispari');
// const userNumber = parseInt(prompt ('Scegli un numero da 1 a 5'));

// let variabile = evenOrOdd(userEvenOrOdd, userNumber)
// console.log(userNumber)
// console.log(userEvenOrOdd)
// console.log(variabile)


//===================== FUNZIONE SPLITTATA ===================


function getRandomNumber (num) {
    const randomNumber= Math.floor (Math.random () * (5) + 1);
    return randomNumber;
}

function getEvenOrOdd (summ) {
    if (sum % 2 === 0 ) {
        return ('pari');
    }
    else {
        return('dispari');
    }
}

const userEvenOrOdd = prompt ('Scegli pari o dispari');

let userNumber = 0;
while (userNumber<1 || userNumber>6 || isNaN(userNumber)) {
    userNumber = parseInt(prompt ('Scegli un numero da 1 a 5'));
}

let sum = getRandomNumber() + userNumber;
let evenOrOdd = getEvenOrOdd(sum);

console.log(sum)
console.log(evenOrOdd)

if (userEvenOrOdd == evenOrOdd){
    console.log('hai vinto!');
}
else {
    console.log('hai perso :(');
}


