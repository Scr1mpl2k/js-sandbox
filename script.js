let vanya = 'hyinya';
switch (vanya) {
    case 'name' :
        console.log('eto imya');
        break;
    case 'hyinya' : 
        console.log('NAME KURVA');
        break;
    default:
        console.log('IVAAAAAAN')
        break;
}
 let show = [5, 6, 7, 8];
 console.log(show.length);
 console.log(show[show.length -1]);

 const strs = ['abc', 'bcd' , 5];

 console.log(strs.length);

 strs.push(15, 5, 4);
 console.log(strs);
 console.log(strs.pop());
 console.log(strs);
 


//const numbers = [1, 2, 3];
//let luckyNumber = numbers[numbers.leght - 1];
//console.log(numbers[numbers.length - 1]);  говно на обсуждение

const numbers = [2, 7, 19, 22, 38, 9];
let index = 0;
while (index < numbers.length) {
    numbers[index] % 2 !== 0 ? index++ : console.log(numbers[index]*=2);
    
    
    //if (index % 2 !== 0) {
     //   numbers[index] = numbers[index] * 2
        
//}
  //  index++;
}

console.log(numbers);