const text = document.getElementById('text');
const txt = document.getElementById('txt');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    txt.innerHTML = "Se ha modificado!";
    text.classList.toggle('active');
    alert("se activo!")
    console.log("se activo y se cambio los valores");
})