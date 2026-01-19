const passwordbox=document.getElementById("password");

const button=document.getElementById("btn");

const copybutton=document.getElementById("copy");

const generatepassword=()=>{

    const chars=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+=-{}[]~|/\><";

    let password="";
    const lengthofPassword=8;

    for(let i=0;i<lengthofPassword;i++){
        password+=chars.charAt(Math.floor(Math.random() *chars.length));

    }
    passwordbox.value=password;
}

button.addEventListener("click",generatepassword);

copybutton.addEventListener("click",()=>{
    const passwordcopy=passwordbox.value.trim();

    if(!passwordcopy){
        alert("No password to copy !Please generate password first");
        return;
    }

    copybutton.addEventListener("click", () => {
    const passwordcopy = passwordbox.value.trim();

    if (!passwordcopy) {
        alert("No password to copy! Please generate password first");
        return;
    }

    navigator.clipboard.writeText(passwordcopy);
    alert("Password copied!");
});

});