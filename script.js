//e --> enter
//o --> ober
//i --> imes
//a --> ai
//u --> ufat

function encrypt() {
    var text = document.getElementById("inputText").value.toLowerCase();
    //i para que afecte mayúsculas y minúsculas
    //g para que afecte toda la línea
    //m para que afecte todo el párrafo

    var textoEncriptar = text.replace(/e/igm,"enter");
    var textoEncriptar = textoEncriptar.replace(/o/igm,"ober");
    var textoEncriptar = textoEncriptar.replace(/i/igm,"imes");
    var textoEncriptar = textoEncriptar.replace(/a/igm,"ai");
    var textoEncriptar = textoEncriptar.replace(/u/igm,"ufat");

    //deja de mostrar la imagen
    document.getElementById("imageLeft").style.display = "none";
    //deja de mostrar el mensaje
    document.getElementById("message").style.display = "none";
    //muestra el texto encriptado
    document.getElementById("textArea").innerHTML = textoEncriptar;
    document.getElementById("copyText").style.display = "show";
    document.getElementById("copyText").style.display = "inherit";
    //limpia el input
    document.getElementById("inputText").value = "";
}

function decrypt() {
    var text = document.getElementById("inputText").value.toLowerCase();
    
    var textoEncriptar = text.replace(/enter/igm,"e");
    var textoEncriptar = textoEncriptar.replace(/ober/igm,"o");
    var textoEncriptar = textoEncriptar.replace(/imes/igm,"i");
    var textoEncriptar = textoEncriptar.replace(/ai/igm,"a");
    var textoEncriptar = textoEncriptar.replace(/ufat/igm,"u");

    document.getElementById("imageLeft").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("textArea").innerHTML = textoEncriptar;
    document.getElementById("copyText").style.display = "show";
    document.getElementById("copyText").style.display = "inherit";
    document.getElementById("inputText").value = "";
}

function textCopy() {
    var contenido = document.querySelector("textarea");
    contenido.select();
    document.execCommand("copy")
    alert("¡Se copió!");
}