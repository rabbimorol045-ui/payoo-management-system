console.log('This is a add money page')
document.getElementById('add-money-btn').addEventListener("click",function(){
// get bank account
const bankAccount = getValueFromInput('add-money-bank');
if(bankAccount == 'Select A Bank'){
    alert('please select a bank');
    return;
}



// get bank account 
const accno = getValueFromInput('add-money-number');
if(accno.length != 11 ){
    alert('please input vaid acoount no');
    
}



// 3 add amount 
const amount = getValueFromInput('add-money-amount');
const newBalance = getBalance() + Number(amount);
console.log(newBalance);

// get pin verify
const pin = getValueFromInput('add-money-pin');
if(pin == '1234'){
    alert(`Add Money succesfull from ${bankAccount} at ${new Date}`);
    setBalance(newBalance);
}
else{
    alert('invalid pin number')
    return;
}
})