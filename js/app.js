/*en este tipo de proyectos que se crean configurados con un CDN*/
/*para las configuraciones de vue*/
console.log("elementos Vue")
console.log(Vue)

const app=Vue.createApp({
   // template: `
   // <h1<Hola Mundo</h1>
    //<p>Desde App.js</p>
    //<h6>{{1+1}}</h6>
   // <p>{{[1.2.3.4.5.6.7.8]}}</p>
   // <p>{{true?'Verdadero':'Falso'}}</p>
   // `/*dentro de las llaves contiene o es considerado código javascript*/
    /*programación declarativa a partir de las 2 llaves de apertura y de cierre*/
    
})

app.mount('#myApp')/*Identificador a la aplicación*/