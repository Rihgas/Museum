let piece1 = new Piece(
    "/img/Campus-Challenge.jpg",
    "Nintendo Campus Challenge (NES) 1991. Precio: $14.000 - $20.100 USD (13.000 - 18.000 euros). Este cartucho incluye Super Mario 3, PinBot y Dr. Mario. Se usaba para torneos oficiales de Nintendo y se llegó a pensar que todas las copias habían sido destruidas, hasta que un ex empleado de Nintendo encontró una en su garaje. Se vendió por 12.585€ en 2006 y después se revendió por 18.068€."
);
    
let piece2 = new Piece(
    "/img/Air-Raid-Atari-2600.jpg",
    "Air Raid (Atari 2600). Precio: $14.000 - $33.400 USD (12.500 - 30.000 euros) Air Ride es único entre los cartuchos de Atari por su color azul y su empuñadura en forma de T. El juego trata de defender a la ciudad de un ataque aéreo usando tu propia nave. Se rumora que solo existen 12 copias, y dos de ellas fueron vendidas recientemente en E-Bay: una, por 12.585€, y la otra, por 30.023€."
);
 
let piece3 = new Piece(
    "/img/World-Champ-Golden-Edition.jpg",
    "1990 Nintendo World Championships: Gold Edition (NES). Precio: $15.000 - $21.000 USD (13.500 - 19.000 euros). Solo existen 26 copias de este cartucho en el mundo, y el destino de todas las unidades fueron los ganadores de un concurso de Nintendo Power. El cartucho dorado contiene Super Mario Bros., Rad Race y Tetris. ¡Vaya premio!"
);

let piece4 = new Piece(
    "/img/birthday_mania.png",
    "Birthday Mania (Atari 2600). Precio: $15.000 - $35.000 USD (13.500 - 31.500 euros). Solo se ha verificado la existencia de una copia, lo convierte a Birthday Mania en uno de los juegos más raros del mundo. Birthday Mania consiste en una serie de mini juegos basados en pruebas cumpleañeras, como apagar las velas del pastel y explotar globos (ya que se supone que esa es la parte 'divertida' en las fiestas de cumpleaños). El juego venía con un cartucho personalizable donde podías escribir tus deseos de cumpleaños a quien se lo fueras a regalar."   
);

let piece5 = new Piece(
    "/img/gamma-attack.jpg",
    "Gamma Attack (Atari 2600). Precio: $20.000 - $500.000 USD (18.000 - 460.000 euros). Este es, sin lugar a dudas, el videojuego mas raro jamás creado. La compañía Gammaton solo creó un cartucho, y el dueño actual es el coleccionista Anthony DeNardo, quien ha puesto el juego a la venta en eBay con un precio inicial de $500,000 USD. ¡Medio millón de dólares!"
);
        
let museum = new Museum( [piece1, piece2, piece3, piece4, piece5] );
        
function welcome(){
    document.getElementById("presentationMuseum").innerHTML = 
    museum.sayWelcomeAsMuseum();
};

function discoverTopFive(){
    document.getElementById("topFive").src = 
    piece1.image;
    alert(piece1.description);
};

function dragStart(event){
    event.dataTransfer.setData("Text", event.target.id);
};
  
function dragging(event){
    document.getElementById("demo").innerHTML = "The p element is being dragged";
};
  
function allowDrop(event){
    event.preventDefault();
};
  
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
    document.getElementById("topFour").src = piece2.image;
    alert(piece2.description);
};

function discoverTopThree(x){
    x.style.background = "#EBE645";
    alert(piece3.description);
    document.getElementById("topThree").src = piece3.image;
};

function discoverTopTwo(x){
    x.style.background = "#EBE645";
    alert(piece4.description);
    document.getElementById("topTwo").src = piece4.image;
};

function discoverTopOne(){
    alert(piece5.description);
    document.getElementById("topOne").src = piece5.image;
};



