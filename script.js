function guessNum(num) {
    if (tries <= 0){
        alert('У вас закочились попытки.') 
        return;
    } 
    tries--;
    secretNum === num ? alert('Поздравялем, вы угадали число ' + num) : alert('К сожалению, вы не угадали, попробуйте еще раз. Выйгрышное число было: '+secretNum+'. осталось попыток: '+tries);
    
    
}