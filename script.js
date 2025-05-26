const hi = 'hello world'
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
   return push;
}



console.log(calculateLetters(hi));