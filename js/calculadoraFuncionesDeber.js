function numero(numero){
    document.getElementById("idIngreso").value = document.getElementById("idIngreso").value + numero;
}

function operacion(operacion){
    document.getElementById("idIngreso").value = document.getElementById("idIngreso").value + operacion;
}

function resultado(){
    let resultado = document.getElementById("idIngreso").value;
    let total = eval(resultado);
    document.getElementById("idResultado").innerHTML="resultado: "+total;
}

function reset(){
    document.getElementById("idIngreso").value="";
    document.getElementById("idResultado").innerHTML="resultado: ";
}