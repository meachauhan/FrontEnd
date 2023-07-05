var password=document.getElementById("password");
var len=document.getElementById("length");

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }


  function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = len.value;
    var password = "";
 for (var i = 0; i < passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }