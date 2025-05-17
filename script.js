function addByX(a) {
    const rar = () =>{
        console.log(a + addByX());
    }
    return rar;
}
const addByTwo = addByX(2);
const addByFour  = addByX(4)
addByTwo(5);