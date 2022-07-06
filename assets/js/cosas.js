let nuevoAsalvaje;
//asalvajes.push(nuevoAsalvaje);
//console.log(asalvaje)

//validacion rapida pero todo los campos deben ser llenados por el usuario
if(nombre.value && edad.value && comentario.value && imagenSrcBg){
asalvajes.push(nuevoAsalvaje);
//receteo de la tabla 
nombre.selectedIndex = 0;
edad.selectedIndex = 0;
comentario.selectorInex = 0
previewElement.style.backgroundImage = "none";
reloadTable();
}
else{
alert("Faltan datos por llenar")
}

.addEventListener("click", () =>{

    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length -2);




//esta parte es de la tabla de participantes
const reloadTable = () => {
const participantesTemplate = document.getElementById("Participantes");
asalvajesTemplate.innerHTML = "";
asalvajes.forEach( (p, i) => {
    aslavajesTemplate.innerHTML+= `
    <div class="px-3 pd-2 Asalvaje" data-fighter="${p.getNombre()}">
        <div class="card">
            <img src="${p.getImg()}" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${p.getNombre()}</h4>
                <hr class="w-50 mx-auto">
                <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                <h6 class="card-text">Poder de pelea: <span class="text-danger">${p.getPoder()}</span></h6>
                <button class="btn btn-outline-warning" onclick="activarHabilidad(${i})"> Habilidad Especial</button>
            </div>
        </div>
    </div>
    `;
});
};

const reloadTable = () => {
    const AsalvajesTemplate = document.getElementById("Asalvajes");
    AsalvajesTemplate.innerHTML = "";
    Asalvajes.forEach( (a) => {
        AsalvajesTemplate.innerHTML+=`
        <div class="px-3 pd-2">
            <div class="card" style="width: 18rem;">
                <img src="${a.getImg()}" class="card-img-top" alt="..."data-toggle="modal" data-target="#exampleModal">
                <div class="card-body">
                    <video controls width="250" height="200" muted class="btn btn-primary" onclick="showModal()"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <source id="sonido" src=".assets/sounds    " type="audio/mp3">
                    </video>
                </div>
            </div>
        </div>
        `;
    });
};
&&&&^^&*(()()(*/* 
 */))

 *()



//Validacion
/* if(nombre.value && edad.value && comentario.value && imagenSrcBg){
    asalvajes.push(nuevoAsalvaje);
    //receteo de la tabla
    nombre.selectedIndex = 0;
    raza.selectedIndex = 0;
    comentario.value = "";
    previewElement.style.backgroundImage = "none";
    imagenSrcBg = previewElement.style.backgroundColor = "#grey";
    reloadTable();
}
else{
    alert("Faltan datos por llenar")
}


const reloadTable = () => {
    const AsalvajesTemplate = document.getElementById("Asalvajes");
    AsalvajesTemplate.innerHTML = "";
    Asalvajes.forEach( (a) => {
        AsalvajesTemplate.innerHTML+=`
        <div class="px-3 pd-2">
            <div class="card" style="width: 18rem;">
                <img src="${a.getImg()}" class="card-img-top" alt="..."data-toggle="modal" data-target="#exampleModal">
                <div class="card-body">
                    <video controls width="250" height="200" muted class="btn btn-primary" onclick="showModal()"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <source id="sonido" src=".assets/sounds    " type="audio/mp3">
                    </video>
                </div>
            </div>
        </div>
        `;
    });
};

//audio???
//document.getElementById("sonido").addEventListener("click", () =>{
    
//})


window.showModal= () =>{
    let modalBody = document.querySelector(`.modal-body`)
    let Asalvaje = Asalvajes.find((Asalvaje)=>Asalvaje.id == id)

    modalBody.innerHTML=`
    <div class="card px-3 pd-2">
    <img src="${a.getImg()}" class="card-img-top">
    <div class="card-body">
        <h6 class="card-edad">${a.getEdad()}</h6>
        <h6 class="card-texto">Comentarios </h6>
        <hr class="w-50 mx-auto">
        <h6 class="card-comentario">${a.getComentario()}</h6>
    </div>
    </div
    `;
};   

function limpiar(){
    document.getElementById('cards').innerHTML = ""
} */