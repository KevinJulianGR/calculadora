
let titulo = document.getElementById("titulo");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let botonSumar = document.getElementById("boton");

botonSumar.addEventListener("click",()=>{
    let num1 = Number(a.value);
    let num2 = Number(b.value);
    alert(num1+num2)
    c.value=num1+num2;
})