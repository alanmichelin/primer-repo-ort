/*
Array de 10 personajes 
Tiene que contener:
    - Id
    - Nombre
    - Tipo
    - Edad

1) Mostrar por consola todo el array de 10 personajes
2) Hacer una busqueda por Id con el html y mostrar el objeto encontrado por consola
3) Hacer un nuevo array solo con los nombres de los objetos y mostrar por consola
4) Hacer un promedio de edades/anios 
5) Hacer nuevo array solo con los objetos de cierto tipo

!SUBIRLO A GIT
*/

// Crear array de 10 personajes 
function Personaje (id,nombre,tipo,edad){
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad
}
const personajes =[
new Personaje(0,"Perro","Mamifero", 12),
new Personaje(1,"Serpiente","Reptil", 5),
new Personaje(2,"Gato","Mamifero", 7),
new Personaje(3,"Leon","Mamifero", 2),
new Personaje(4,"Pajaro","Ave", 3),
new Personaje(5,"Raton","Carroñero", 1),
new Personaje(7,"Oso","Mamifero", 28),
new Personaje(8,"Tortuga","Reptil", 80),
new Personaje(9,"Tiburon","Pez", 55),
new Personaje(10,"Ballena","Pez", 105)
]

//Mostrar por consola todo el array de 10 personajes

console.log(personajes)


// Hacer una busqueda por Id con el html y mostrar el objeto encontrado por consola
const buscarPersonaje = () =>{
let idPersonaje = document.getElementById("personajeNum").value
let personajeEncontrado = personajes.find(personaje => personaje.id == idPersonaje)
console.log(personajeEncontrado != null ? personajeEncontrado : "No se encontro")
}


//Hacer un nuevo array solo con los nombres de los objetos y mostrar por consola

const arrayNombres = personajes.map(personaje => personaje.nombre)

console.log(arrayNombres) 

// Hacer un promedio de edades/anios 


let contador = personajes.reduce((a,b) => a + b.edad,0)

let edadPromedio = contador/personajes.length

console.log("edad promedio: " + edadPromedio)
// Hacer nuevo array solo con los objetos de cierto tipo
let nuevoArray = personajes.filter(personaje => personaje.tipo == 'Mamifero')

console.log(nuevoArray)


