import Database from "./Consulta.js";


const animal = document.getElementById("animal")
const preview = document.getElementById("preview")

animal.addEventListener("change", async() => {
    let {animales} = await Database.getData()
    let nameAnimal = animal.value
    let selectAnimal = animales.find(animal => animal.name === nameAnimal)
    let imagenAnimal = selectAnimal.imagen 
    let inyeccionImg = `./assets/imgs/${imagenAnimal}`
    cargarImagen(inyeccionImg)
});

const cargarImagen = (Path) => {
    preview.innerHTML = " ";
    preview.style.backgroundImage = `url(${Path})`
};


