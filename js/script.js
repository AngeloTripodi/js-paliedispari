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