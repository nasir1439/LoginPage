const formOpenBtn=document.querySelector("#form-open");
// console.log(formOpenBtn);
home = document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwshowHide=document.querySelectorAll(".fa-eye-slash");

formOpenBtn.addEventListener("click",()=>home.classList.add("show"))
formCloseBtn.addEventListener("click",()=>home.classList.remove("show"))

pwshowHide.forEach((icon) => {
    icon.addEventListener("click",() =>{
    let getpwInput=icon.parentElement.querySelector("input")
    if(getpwInput.type ==="password")
    {
        getpwInput.type="text";
        icon.classList.replace("fa-eye-slash","fa-eye");
    }else{
        getpwInput.type="password";
        icon.classList.replace("fa-eye","fa-eye-slash");
    }
    });
});

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
});