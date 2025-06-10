const registeredUsers = [
    ['1', '1'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const btn = document.querySelector('button');
const inputLog = document.querySelector('input[name="login"]');
const inputPass = document.querySelector('input[name="password"]');
const dan = [inputLog, inputPass];
function Sumbit(event) {
    event.preventDefault(); 
    
    validate();
};
function validate() {
    if(!inputLog.value || !inputPass.value){
        alert("All fields are required");
    }
   ` if (){
     alert('succes')   
    }`
    const get = [inputLog.value, inputPass.value];
    console.log(get);
}
btn.addEventListener('click', Sumbit);