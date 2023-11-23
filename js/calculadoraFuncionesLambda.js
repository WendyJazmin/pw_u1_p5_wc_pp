//declarar funcioneslamnbs
//declarando los argumentos d2 la función(n1,n2)
const sumar = (n1,n2)=> n1+n2

const sumarCompleto = ()=> {

var n1 = parseInt(document.getElementById('idnumero1').value);
var n2 = parseInt(document.getElementById('idnumero2').value);

var resultado = parsear('idnumero1')+parsear('idnumero2');
console.log(resultado)
document.getElementById('idResultado2').innerText=resultado;
}


const restarNumeros = () => {

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
   
    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;

}

const multiplicarNumeros = () =>{

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    
    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;


}

function dividirNumeros(){

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    
    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;


}

const cambiarImagen = ()=>
{

}

const parsear =(id) => parseInt(document.getElementById(id).value);

function conceptosJS(){
    let var1 = 10;
    let var1Texto = 'Texto1';// let: tipo de dato más actualizado y más reciente
    console.log(var1);
    console.log(var1Texto);

    var var2 = 10; //var: tipo de dato que esta quedando en desuso
    var var2Texto = 'Texto2';
    console.log(var2);
    console.log(var2Texto);


    const const1 = 10; //sirve para declarar constantes, de manera numérico y texto
    const const1Texto = 'Texto3';
    console.log(const1);
    console.log(const1Texto);

    //declaracion de arreglos
    const diasSemana =["lunes","martes","miercoles","jueves","viernes"];
    console.log(diasSemana)

}
