function sumarNumerosCompleto(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion  SumarNumeros'+n1)
    console.log('Funcion  SumarNumeros'+n2)
    var resultado = n1+n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
    //return resultado;
}

function restarNumeros(){

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion  restarNumeros'+n1)
    console.log('Funcion  restarNumeros'+n2)
    var resultado = n1-n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;

}

function multiplicarNumeros(){

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion  restarNumeros'+n1)
    console.log('Funcion  restarNumeros'+n2)
    var resultado = n1*n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;


}

function dividirNumeros(){

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion  dividirNumeros'+n1)
    console.log('Funcion  dividirNumeros'+n2)
    var resultado = n1/n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;


}

function cambiarImagen() {
    document.getElementById('idimagen1').src="../img/oso-bailando.gif"
}