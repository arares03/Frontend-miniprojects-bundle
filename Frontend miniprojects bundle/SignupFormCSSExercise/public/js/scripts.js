const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirm-password");
const wrongpassword = document.querySelector(".pass");

pass1.addEventListener("input", checkme);
pass2.addEventListener("input", checkme);

function checkme() {
    if(pass1.value === pass2.value){
        wrongpassword.className = "pass";
        wrongpassword.classList.remove("wrong-pass");
        pass1.className = "good-input";
        pass2.className = "good-input";
        console.log("ok");
    }
    else {
        console.log('not ok');
        wrongpassword.className = "wrong-pass";
        pass1.className = "wrong-input";
        pass2.className = "wrong-input";
    }
} 

const submitbutton = document.querySelector('button');

submitbutton.addEventListener('click', 
(e) => {
   e.preventDefault(); 
    alert("ALO");
})