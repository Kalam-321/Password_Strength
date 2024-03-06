var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var criteria = false;
var [u,l,d,s] = [false,false,false,false];
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const digits = "1234567890";
const symbols = "!@#$%^&*()_+={}[]?/|\<>,.~`";
let count=0;

pass.addEventListener('input',()=>{
    
    if(pass.value.length>0)
    {
        msg.style.display = "block";
    }
    else
    {
        msg.style.display = "none";
    } 
    if(upper.indexOf(pass.value[pass.value.length-1])>=0)
    {
        u=true;
    }
    if(lower.indexOf(pass.value[pass.value.length-1])>=0)
    {
        l=true;
    }
    if(digits.indexOf(pass.value[pass.value.length-1])>=0)
    {
        d=true;
    }
    if(symbols.indexOf(pass.value[pass.value.length-1])>=0)
    {
        s=true;
    }
    if(u===true && l==true && d===true && s===true)
    {
        criteria=true;
    }
    if(pass.value.length<6 )
    {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        pass.style.color = "#ff5925";
    }
    else if(pass.value.length>=6 && pass.value.length<=8 && criteria)
    {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        pass.style.color = "#ff5925";
    }
    else if(pass.value.length>8 && criteria)
    {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        pass.style.color = "#26d730";
    }
})