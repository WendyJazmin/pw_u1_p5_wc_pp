/*en este tipo de proyectos que se crean configurados con un CDN*/
/*para las configuraciones de vue*/
console.log("elementos Vue")
console.log(Vue)

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
        console.log("Se está cambiando el emnsaje")
        console.log(mensaje)
        mensaje='valor cambiado'
    },

    cambiarNumero(valor){

        valor= valor+1;
    }
},

watch:{

},
data(){/*declaración base de un data. DATA en OPTIONS API, TIENE 1 DECLARACIÓN DIFERENTE*/
    return{
        mensaje:'Hola mundo desde Vue.JS',/*aquí se tiene 2 propiedades reactivas */
        valor:100
    }
}
})

app.mount('#myApp')/*Identificador a la aplicación*/