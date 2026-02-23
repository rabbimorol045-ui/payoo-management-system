// console.log('This is a machine page ')
function getValueFromInput (id){
const input = document.getElementById(id);
const value = input.value;
console.log(id, value);
return value;
}
// just balance get machine 
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// get value and set 
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine for get id > and > show id 
function showOnly(id) {
   
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("Cashout");
// all class hidden here
addMoney.classList.add('hidden');
cashOut.classList.add('hidden');
//  id owala element k show kora
const selected = document.getElementById(id);
selected.classList.remove('hidden');


}