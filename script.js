
const hi = 'hello'
const calculateLetters = (str) => {
    let push = {};
    const newA = Array.from(str)
    for (let i = 0; i < newA.length; i++) {
        const item = newA[i];
        if(item === ' '){
            continue;
        }
        if(push[item]){
            push[item] += 1;
        }else{
        push[item] = 1;
        };
    };
    const newPush =  Object.entries(push)
    const result = {};
 newPush.forEach(([letter, count]) => {
  if (result[count]) {
    result[count].push(letter);
  } else {
    result[count] = [letter];
  }
});
return result;
}

  /*pushM = push.reduce((acc, arr) => {
        return acc + arr[item];
    }, 0)
    console.log(pushM);*/

console.log(calculateLetters(hi));