// function isPalindrome (word) {
//     const wordLength = word.length;
//     for (let i= 0; i<wordLength/2; i++) {
//         if (word[i] === word[wordLength -1 -i]) {
//             return 'è palindromo';
//         }
//         else {
//             return 'non è palindromo';
//         }
//     }
// }

// const userWord = prompt ('scrivi una parola');

// const result = isPalindrome(userWord);
// console.log(result);



// =====================

function evenOrOdd (text, num) {
    const randomNumber = Math.floor (Math.random () * (5) + 1);
    console.log(randomNumber);
    // return randomNumber;
    sum = randomNumber + num;
        if ((sum %2===0) && (text==='pari')){
            return ('il numero è pari, hai vinto!')
        }
        else if ((sum %2===1) && (text==='dispari')){
            return ('il numero è dispari, hai vinto!')
        }
        else {
            return ('hai perso!!')
        }
    
}

const userEvenOrOdd = prompt ('Scegli pari o dispari');
const userNumber = parseInt(prompt ('Scegli un numero da 1 a 5'));

let variabile = evenOrOdd(userEvenOrOdd, userNumber)
console.log(userNumber)
console.log(userEvenOrOdd)
console.log(variabile)