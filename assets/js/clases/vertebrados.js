import Animal from "./Animales.js"

class Leon extends Animal {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }
    Rugir(){
        let sonido = this.getSonido();
        this.setSonido(sonido);
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    Aullar(){
        let sonido = this.getSonido();
        this.setSonido(sonido);
    }
}

class Oso extends Animal {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    Gruñir(){
        let sonido = this.getSonido();
        this.setSonido(sonido);
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    Sisear(){
        let sonido = this.getSonido();
        this.setSonido(sonido);
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido);
    }

    Chillar(){
        let sonido = this.getSonido();
        this.setSonido(sonido);
    }
}
//console.log(new sisear ("serpiente", "...", 1234, "...", ))
export {Leon, Lobo, Oso, Serpiente, Aguila };