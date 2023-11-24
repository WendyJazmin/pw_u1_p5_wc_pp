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

const multiplicarNumeros = () => {

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

const cambiarImagen = () => document.getElementById('idimagen1').src="../img/oso-bailando.gif"

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
    console.log(diasSemana[0])
    console.log(diasSemana[1])
    console.log(diasSemana[4])

    diasSemana[5] = "sábado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)

    diasSemana.unshift("Feriado")
    console.log(diasSemana)

    const edades=[1,2,3,4,5]
    console.log(edades)

    const edades2 = [6,7,8]
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)


    for(const dia of diasSemana){
        console.log(dia)
        if(dia === 'Martes'){
            console.log('martes dos por uno')
        }
    }

    //declaracion de objetos -> se declara directamente los objetos, se declara como calve-valor, utilñiza una nomentclatura similar a un archivo json (formato json)
    
    const estudiante = {//representación de un objeto
        nombre: "Edison",
        apellido: "Cayaymbe",
        edad: 34,
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante)
    console.log(estudiante.nombre)

    estudiante.nombre = "Jeff"
    console.log(estudiante.nombre)

    const persona = {
        nombre:"Edison",
        apellido: "Cayambe",
        edad: 34,
        direccion:{
            callePrincipal:"America",
            calleSecundaria:"Rumipamba",
            numeracion: "oe3-80",
            barrio:"marian de jesus"
        }
    }

    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.callePrincipal)

    //arreglo de pacientes
    const pacientes = [

        {
            nombre:"jeff",
            apellido:"satur",
            edad: 28

        } ,

        {
            nombre:"paola",
            apellido:"alvear",
            edad: 21
        },

        {
            nombre:"jessie",
            apellido:"alvear",
            edad: 24
           
        }
    ]
    
    console.log(pacientes)
    console.table(pacientes)
    console.log(pacientes[0].nombre)


    //desestructuración de arreglos -> dividir el arreglo en partes
    const diasSemana2 = ["lunes","martes","miercoles","jueves","viernes"]
    const [dia1,dia2, dia3, dia4,dia5] = diasSemana2

    console.log(dia1)
    console.log(dia5)

    const [d1,d2,d3,d4,d5] = ["lunes","martes","miercoles","jueves","viernes"]
    console.log(d2)
    console.log(d4)

    //desestructuración de objetos
    const vehiculo={
        marca:"toyota",
        modelo:"Prius",
        anio:2022
    }

    const {marca, modelo,anio}= vehiculo;
    console.log(marca)
    console.log(anio)


    
    //declaracion de un objeto que tenga como atributo un objeto

    const perro = {
        nombre:"paquita",
        edad:15,
        duenio:{
            nombre:"jenny",
            apellido:"lopez",
            edad:30
        }
    }

    const {nombre,edad,duenio} = perro;
    console.log(nombre)

    console.log(duenio)
    console.log(duenio.nombre)


}


