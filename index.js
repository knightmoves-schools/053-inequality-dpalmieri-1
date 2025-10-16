function guessNumber(guess){
    if (guess != 25){
        document.getElementById('result').innerHTML = 'not it';
    }
}
function strictGuessNumber(guess){
    if (guess !== 25){
        document.getElementById('result').innerHTML += 'not it';
    }
}

