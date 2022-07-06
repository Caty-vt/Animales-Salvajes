export default class Animal {
    constructor(nombre, edad, comentario, img, sonido){
        let Nombre = nombre;
        let Edad = edad;
        let Comentario = comentario;
        let Img = img;
        let Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentario = ()=> Comentario;
        this.setComentario = (comentario) => (Comentario = comentario);
        this.getSonido = () => Sonido;
    }

    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    get Sonido(){
        return this.getSonido();
    }
    set Comentario(comentario){
        return this.getComentario(comentario);
    }
    get Comentario(){
        return this.getComentario();
    }
}
//console.log(new Animal("leon", "..", 1234, ""))
