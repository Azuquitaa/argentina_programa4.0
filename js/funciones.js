//Boton presentación

function mostrar(){
    document.getElementById("presentacion_oculta").style.display = "block";
}

function ocultar(){
    document.getElementById("presentacion_oculta").style.display = "none";
}



document.getElementById("a").onclick = function () {
    
    document.getElementById("a").innerHTML="Inglés <br> Intermedio";
}
document.getElementById("b").onclick = function () {
    document.getElementById("b").innerHTML="Trabajo <br> Grupal"
}
document.getElementById("c").onclick = function () {
    document.getElementById("c").innerHTML="Aprendizaje <br> Rápido y capaz"
}
document.getElementById("d").onclick = function () {
    document.getElementById("d").innerHTML="Cambios <br> Adaptable"
}


//Boton RESET

document.getElementById("r").onclick = function () {
    document.getElementById("a").innerHTML="Inglés",document.getElementById("b").innerHTML="Trabajo"
    ,document.getElementById("c").innerHTML="Aprendizaje",
    document.getElementById("d").innerHTML="Cambios"
}



