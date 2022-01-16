class Museum{ 
    constructor(pieces){ 
        this.pieces = pieces;
    }

    getPieces(){
        return this.pieces;
    }

    setPieces( pieces ){
        return this.pieces = pieces;
    }
    
    sayWelcomeAsMuseum(){
        return "Hola! Bienvenido al Museo del Videojuego..." +
        "Disfruta la experiencia de interactuar con un total de " +
        this.pieces.length +
        " piezas de arte." +
        "Quieres descurbrir como funcionan? Ve abajo y averigualo!!!";
    
    }
}    