function numero(numero){
    document.getElementById("consola").value = document.getElementById("consola").value + numero;
}

function operacion(operacion){
    document.getElementById("consola").value = document.getElementById("consola").value + operacion;
}

function resultado(){
    let resultado = document.getElementById("consola").value;
    let total = eval(resultado);
    document.getElementById("resultado").innerHTML="resultado: "+total;
}

function reset(){
    document.getElementById("consola").value="";
    document.getElementById("resultado").innerHTML="resultado: ";
}