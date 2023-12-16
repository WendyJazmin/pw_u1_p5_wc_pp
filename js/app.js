
console.log("elementos Vue")
console.log(Vue)

const estudiantes=[{nombre:'Edison',apellido:'Cayambe'},
{nombre:'Daniel',apellido:'Oviedo'},
{nombre:'Carla',apellido:'Perez'},
{nombre:'Julio',apellido:'Castillo'},
{nombre:'Andrea',apellido:'Teran'}
]

console.log(estudiantes)
console.table(estudiantes)

const app=Vue.createApp({
   // template: `
   // <h1>Hola Mundo</h1>
    //<p>Desde App.js</p>
    //<h6>{{1+1}}</h6>
   // <p>{{[1.2.3.4.5.6.7.8]}}</p>
   // <p>{{true?'Verdadero':'Falso'}}</p>
   // `/*dentro de las llaves contiene o es considerado código javascript*/
    /*programación declarativa a partir de las 2 llaves de apertura y de cierre*/
    
    /**siempre se debe separar la parte visual de la parte de javascript/ */
/* vue trabaja con opciones, sed llaman options API, una de esas opciones se llama templates */


//OPTIONS API


methods:{

    cambiarMensaje(){/*si no se tiene argumentos, se puede omitir () */
        console.log("Se está cambiando el mensaje")
        console.log(this.mensaje)
        mensaje='valor cambiado'
    },

    cambiarNumero(){

        this.valor = this.valor + 1;
        console.log(this.valor);
    },

    agregarEstudiante(){
        console.log("agregando estudiante")
        const estu={nombre: this.nombre, apellido:this.apellido};

       // this.lista.unshift(), UNSHITFT: agrega al inicio de la lista
       //this.lista.push(estu), PUSH:agrega al final de la lista
       this.lista.push({nombre: this.nombre, apellido:this.apellido})//colocar directamente al final de la lista

    },

    presionandoTecla(event){
        console.log("presionando...")
        console.log(event.charCode)//se esta enviando un objeto event, que siempre esta presente
        //se puede usar en cualquier metodo que es invocado por un evento
    },

    metodoApellido(event){
        console.log(event.charCode)
        if(event.charCode === 13){
            this.agregarEstudiante()
        }

    }


},

watch:{

},
data(){/*declaración base de un data. DATA en OPTIONS API, TIENE 1 DECLARACIÓN DIFERENTE*/
    return{
        mensaje:'Hola mundo desde Vue.JS',/*aquí se tiene 2 propiedades reactivas */
        valor:100,
        lista:estudiantes,
        nombre:null,
        apellido: null
    }
}
})

app.mount('#myApp')/*Identificador a la aplicación*/