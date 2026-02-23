console.log('This is homepage');

document.getElementById("login-btn").addEventListener("click", function(){
    const inputNumber = document.getElementById("input-number");
    const contactNum = inputNumber.value;
    
    const inputPin = document.getElementById("input-pin");
    const setPin = inputPin.value;
    if(contactNum === '01234567890' && setPin === '1234'){
        alert('Login suecessful');
        window.location.replace("/homepage.html")
    }
    else{
        alert('login faild');
        return;
    }

});