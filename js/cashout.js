
document.getElementById('cashout-btn').addEventListener("click", function(){
    const cashout = getValueFromInput('agent-number');
    if(cashout.length != '11'){
        alert(' invalid');
        return
    }
  console.log(cashout)
    const cashAmount = getValueFromInput('cashout-amount');
    


    
   const currentBalance = getBalance();


    
    const newBalance = currentBalance - Number(cashAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert('invalid Amount')
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    console.log(pin)
    if(pin === '1234'){
        alert('Cashout Sucecssfully');
    //    document.getElementById('balance').innerText = newBalance;
    setBalance(newBalance);
    }
    else{
        alert('invalid pin')
        return
    }

})



// console.log('This is a cashout page')
// document.getElementById('cashout-btn').addEventListener("click", function(){
//     const agentNumber = document.getElementById('agent-number');
//     const agentNum = agentNumber.value;
//     if(agentNum.length !== '11'){
//         alert('invalid');
//         return;
//     }

//     const cashoutAmount = document.getElementById('cashout-amount');
//     const cashAmount = cashoutAmount.value;

//     // get current balance
//     const currentBalance = document.getElementById('balance');
//     const balance = currentBalance.innerText
    
//     const newBalance = Number(balance) - Number(cashAmount);
//     if(newBalance < 0){
//         alert('invalid')
//         return;
//     }
    
//     const cashoutPin = document.getElementById('cashout-pin');
//     const cashPin = cashoutPin.value;
//     if(cashPin === '1234'){
//         alert('Cashout Sucecssful');
//         currentBalance.innerText = newBalance;

//     }
//     else{
//         alert('invalid');
//         return;
//     }
//     console.log('new balance = ', newBalance)
    

  
  
// })