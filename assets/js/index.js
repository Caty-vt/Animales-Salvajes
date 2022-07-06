import { Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/vertebrados.js";
import Database from "./Consulta.js";

let asalvajes = [];

let btnRegistrar = document.getElementById("btnRegistrar")
    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentario = document.getElementById("comentarios");
    
    

    btnRegistrar.addEventListener("click", async(evento) =>{
        evento.preventDefault();
        let imagenSrcBg = document.getElementById("preview").style.backgroundImage;
        let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length -2);
    //validando opcion de usuario
    
    if(validador(nombre, edad, comentario, imgSrc)){
        if(nombre.value === 'Oso'){
            nombre.value = 'Oso'
        }
        let nuevoAsalvaje; 


        switch(nombre.value){
            case'Leon':
            nuevoAsalvaje = new Leon(nombre.value, edad.value, comentario.value, imgSrc)
            break;
            case 'Lobo':
            nuevoAsalvaje = new Lobo(nombre.value, edad.value, comentario.value, imgSrc);  
            break;
            case 'Oso':
            nuevoAsalvaje = new Oso(nombre.value, edad.value, comentario.value, imgSrc);
            break;
            case 'Serpiente':
            nuevoAsalvaje = new Serpiente(nombre.value, edad.value, comentario.value, imgSrc);
            break;
            case 'Aguila':
            nuevoAsalvaje = new Aguila(nombre.value, edad.value, comentario.value, imgSrc);
            break;
        }
        console.log(nuevoAsalvaje)
        asalvajes.push(nuevoAsalvaje);
        tarjeta(asalvajes);
    }
    else{
        alert("llena los datos")
    }
})
//validacion de todos los datos del usuarios
    const validador = (nombre, edad, comentario, imgSrc) =>{
        if((nombre.value !==" " && nombre.value !== "selecciona un animal") && 
        (edad.value !== " " && edad.value !== "selecciona un rango de edad") && 
        comentario.value !== "" && 
        imgSrc!==""){
            return true;}
        else{return false;}
    }

const tarjeta = async(listaAsalvaje) =>{
    let {animales} = await Database.getData()
        
    const tablaAnimales = document.getElementById("Animales")
    tablaAnimales.innerHTML = "";
    //console.log(listaAsalvaje);
        listaAsalvaje.forEach((animal, i)=>{
            console.log(animal)
            let selectAnimal = animales.find(animal1 => animal1.name === animal.Nombre)
            console.log(selectAnimal)
            tablaAnimales.innerHTML += `
            <div class="px-3 pd-2">
                <div class="card" style="width: 19rem;">
                    <img src="${animal.Img}" class="card-img-top "   alt="..."data-toggle="modal" data-target="#exampleModal" onclick="showModal(${i})">
                    <div class="card-body">
                        <audio controls id="player">
                            <source id="sonido" src="assets/sounds/${selectAnimal.sonido}" type="audio/mp3">
                        </audio>
                    </div>
                </div>
            </div>
        `
    }) 
};

window.showModal= (i) =>{
    console.log(asalvajes[i].Nombre)
  let modalBody = document.querySelector(`.modal-body`)
    let animal = asalvajes[i]
    modalBody.innerHTML=`
        <div class="card px-3 pd-2" bg-secondary text-secondary">
            <img src="${animal.Img}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-edad">${animal.Edad}</h6>
                <h6 class="card-texto">Comentarios </h6>
                <hr class="w-50 mx-auto">
                <h6 class="card-comentario">${animal.Comentario}</h6>
            </div>
        </div
    `; 
};   


