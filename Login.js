function login(event){
    event.preventDefault();
var userEmail = document.getElementById("email").value;

var userPassword = document.getElementById("password").value;

console.log(userEmail,userPassword);
// var userdata = { username: username, email: Email, password: pass, confirmpassword: confirmpass };
//     console.log(userdata);

var LS = JSON.parse(localStorage.getItem("Users"));
console.log(LS,"-LS");


var flag = false;
for(var i=0;i<LS.length;i++){
    console.log(i,LS[i]);
    console.log(i,LS[i].userEmail,LS[i].userPassword);
    if(LS[i].userEmail==userEmail && LS[i].userPassword==userPassword){

        // alert("Email & password match");
        flag = true;
    }
}
if(flag == true){
    alert("login succssfull");
}
else{
    alert("not match");
}
}