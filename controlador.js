
let titulo=document.getElementById("titulo");
console.log(titulo);


//controlando etiquetas
//1. cambiar el texto de una eetiqueta
//Solo aplica para h1-h6, p, a

titulo.textContent="Chao"

//2.Cambiar la imagen(o la fuente)
let foto = document.getElementById("foto");
foto.src="https://cdn.pixabay.com/photo/2022/06/04/11/19/city-7241725_960_720.jpg"

//3. agregando estilos

titulo.classList.add("letra");

//4. detectando eventos
let boton = document.getElementById("boton");
boton.addEventListener("click",function(){
    console.log("hice click")
})

