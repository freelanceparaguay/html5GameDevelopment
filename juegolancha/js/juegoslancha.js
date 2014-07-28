//==============================================
//VARIABLES GLOBALES para tope de matrices
//==============================================
var TOPE_FILA_INICIAL = 0;
var TOPE_COLUMNA_INICIAL = 0;
var TOPE_FILA_FINAL = 450;
var TOPE_COLUMNA_FINAL = 800;
var VELOCIDAD_AVANCE=1;
//============================================
//CONSTANTES TECLAS
//============================================
//teclas
const TECLA_ARRIBA = 38;
const TECLA_DERECHA = 39;
const TECLA_ABAJO = 40;
const TECLA_IZQUIERDA = 37;
//

//==============================================
//CONSTANTES para marcar las direcciones
//==============================================
const DIRECCION_ESTATICO = 0;
const DIRECCION_ARRIBA = 1;
const DIRECCION_DERECHA = 2;
const DIRECCION_ABAJO = 3;
const DIRECCION_IZQUIERDA = 4;
//random de direcciones
const MIN_RANGO_RANDOM = 0;
const MAX_RANGO_RANDOM = 4;
//==============================================

//==============================================
//CONSTANTES para rutas a imagenes
//==============================================
const PATH_IMAGENES = "images/obj/";
//las imagenes se guardan en carpetas segun el tipo
//de vehiculo y segun la posicion ej:
//images/obj/1/1.png es vehiculo 1 posicion arriba

//============================================
//--- Modelo Objeto sprite
var spriteObjeto = {
	//Lectura de x e y de la imagen
	fuenteX : 0,
	fuenteY : 0,
	fuenteAncho : 68,
	fuenteAlto : 68,
	//La x e y donde aparecera la imagen en canvas
	x : 0,
	y : 0,
	ancho : 68,
	alto : 68,
	//angulo que tendra la imagen 1,2,3,4
	direccion : DIRECCION_ARRIBA,
	visible : true,
	//velocidad en x e y
	//es la cantidad de pixeles que avanza el sprite que se mueve con teclas
	vx : 0,
	vy : 0.
};

//============================================================================
//--- PROGRAMA PRINCIPAL ----
//superficie de dibujo
//algoritmo
/*
 * Se usan variables globales
 * Un arreglo para sprites donde la posicion cero es el sprite que se mueve con teclas
 * un arreglo para representar imagenes
 * se mapean los eventos de teclas y se asigna banderas
 * en la funcion update de pantalla se establece la velocidad para mover el sprite y
 * se asigna la funcion al evento de la ventana principal del juego
 * en la funcion render se dibujan los objetos.
 */
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//array para guardar los sprites del juego
//deben tener la misma cantidad, un array refleja las propiedades del objeto
//el otro es para representar en la pantalla
var sprites = [];
var spritesImagenes = [];

//INICIALIZACION DE OBJETOS
//crea el el primero objeto
//asigna los valores al objeto
//========================================================
//elementos del escenario,se asignan como tipo
const OBJ_LANCHA=0;
const OBJ_YACARE=1;
const OBJ_PUERTO=2;
const OBJ_PLAYA=3;
const OBJ_PIRANA=4;
const OBJ_REGALO=5;

var objeto = Object.create(spriteObjeto);
objeto.x = 100;
objeto.y = 168;
objeto.visible = true;
objeto.ancho = 68;
objeto.alto = 68;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
var imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[0].addEventListener("load", loadHandler, false);
spritesImagenes[0].src = "images/obj/1/lanchassprite.png";

//===================objetos del escenario ==============
objeto = Object.create(spriteObjeto);
objeto.fuenteX = 0;
objeto.fuenteY = 0;
objeto.fuenteAncho = 200;
objeto.fuenteAlto = 150;
objeto.x = 200;
objeto.y = 200;
objeto.visible = true;
objeto.ancho = 200;
objeto.alto = 150;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[1].addEventListener("load", loadHandler, false);
spritesImagenes[1].src = "images/obj/2/yacare.png";


objeto = Object.create(spriteObjeto);
objeto.fuenteX = 0;
objeto.fuenteY = 0;
objeto.fuenteAncho = 200;
objeto.fuenteAlto = 150;
objeto.x = 0;
objeto.y = 0;
objeto.visible = true;
objeto.ancho = 200;
objeto.alto = 150;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[2].addEventListener("load", loadHandler, false);
spritesImagenes[2].src = "images/obj/2/puerto.png";

//destino
objeto = Object.create(spriteObjeto);
objeto.fuenteX = 0;
objeto.fuenteY = 0;
objeto.fuenteAncho = 200;
objeto.fuenteAlto = 300;
objeto.x = 600;
objeto.y = 150;
objeto.visible = true;
objeto.ancho = 200;
objeto.alto = 300;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[3].addEventListener("load", loadHandler, false);
spritesImagenes[3].src = "images/obj/2/playa.png";

//piranas
objeto = Object.create(spriteObjeto);
objeto.fuenteX = 0;
objeto.fuenteY = 0;
objeto.fuenteAncho = 200;
objeto.fuenteAlto = 150;
objeto.x = 600;
objeto.y = 1;
objeto.visible = true;
objeto.ancho = 200;
objeto.alto = 150;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[4].addEventListener("load", loadHandler, false);
spritesImagenes[4].src = "images/obj/2/piranas.png";


//regalo
objeto = Object.create(spriteObjeto);
objeto.fuenteX = 0;
objeto.fuenteY = 0;
objeto.fuenteAncho = 150;
objeto.fuenteAlto = 150;
objeto.x = 100;
objeto.y = 1;
objeto.visible = true;
objeto.ancho = 150;
objeto.alto = 150;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[5].addEventListener("load", loadHandler, false);
spritesImagenes[5].src = "images/obj/2/regalofinal.png";
//=======================================================
//arreglo fijo de mensajes
//permite tener mensajes aleatorios
var matrizMensajes = 
[
	["0","1","2","3","4","5"],	
 	["Haz hecho una obra de caridad con los yacares de la zona",
 	"Haz hecho una obra de caridad con los yacares de la zona",
 	"Los yacares tendran una cena riquisima!!!.",
 	"Ni los yacares quieren tu regalo.",
 	"Lleva tu regalo,a los yacares no les agrada!!",
 	"La dieta habitual de los yacares no incluye hojalata."],
 	["Haz llegado al puerto",
 	"Bienvenido al puerto",
 	"A buena hora llegaste al puerto",
 	"Bienvenido",
 	"Verifica tu carga",
 	"Se recepciona tu llegada al puerto"],					
 	["Tu regalo se ha ido de vacaciones a la playa",
 	"Los habitantes de la playa no quieren tu regalo",
 	"Tu regalo tendra una temporada veraniega estupenda!!!",
 	"Hay gente que no quiere que descargues el regalo en la playa",
 	"Verifica tu carga!!, la gente de la playa queria una reina de carnaval",
 	"Empaquetalo y llevatelo de nuevo, te sugieren otros destinos"],
 	["Delivery para la cena de las piranas!!",
 	"Las piranas te aceptaran tu regalo",
 	"En nombre de las piranas, aleja ese paquete!!!",
 	"Las piranas no quieren tu regalo!!",
 	"Las piranas esperaban mas carne",
 	"Empaquetalo y llevatelo de nuevo!!, tal vez los yacares lo quieran"],										
];
//=======================================================
//bandera de direcciones
var moverArriba = false;
var moverAbajo = false;
var moverDerecha = false;
var moverIzquierda = false;

//agregar los manejadores de eventos
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

//============================================================================

function loadHandler() {
	//Update the sprite as soon as the image has been loaded
	update();
}

function keyDownHandler(evento) {
	//	alert("keypressed");
	switch(evento.keyCode) {
		case TECLA_ARRIBA:
			moverArriba = true;
			break;
		case TECLA_DERECHA:
			moverDerecha = true;
			break;
		case TECLA_ABAJO:
			moverAbajo = true;
			break;
		case TECLA_IZQUIERDA:
			moverIzquierda = true;
			break;
	}
}//keyDownHandler

function keyUpHandler(evento) {
	//	alert("keyup");
	switch(evento.keyCode) {
		case TECLA_ARRIBA:
			moverArriba = false;
			break;
		case TECLA_DERECHA:
			moverDerecha = false;
			break;
		case TECLA_ABAJO:
			moverAbajo = false;
			break;
		case TECLA_IZQUIERDA:
			moverIzquierda = false;
			break;
	}
}//keyUpHandler

function update() {
	//Create the animation loop
	window.requestAnimationFrame(update, canvas);
	//indices para lograr un punto de colision
	var objetop=2;
	var objetoControl=0;
	//variables para el punto de control de colision
	//se calcula el medio del lado de la imagen hacia donde este avanzando
	//la direccion de las flechas 
    var px;
    var py;	
//	var px=Math.floor((sprites[objetoControl].x+sprites[objetoControl].ancho)/2);	
//	var py=Math.floor((sprites[objetoControl].y+sprites[objetoControl].alto)/2);
	//===========================================
	//control de colision
	//===========================================
	switch(sprites[0].direccion){
		case DIRECCION_ARRIBA:
		    //seccion para calcular el punto de colision y control
			px=Math.floor(sprites[objetoControl].x+(sprites[objetoControl].ancho/2));
			py=sprites[objetoControl].y;		
			break;
		case DIRECCION_ABAJO:
		    //seccion para calcular el punto de colision y control
			px=Math.floor(sprites[objetoControl].x+(sprites[objetoControl].ancho/2));
			py=sprites[objetoControl].y+sprites[objetoControl].alto;					    
			break;		
		case DIRECCION_DERECHA:
		    //seccion para calcular el punto de colision y control
			px=sprites[objetoControl].x+sprites[objetoControl].ancho;
			py=Math.floor(sprites[objetoControl].y+(sprites[objetoControl].alto/2));
			break;
		case DIRECCION_IZQUIERDA:
		    //seccion para calcular el punto de colision y control
			px=sprites[objetoControl].x;
			py=Math.floor(sprites[objetoControl].y+(sprites[objetoControl].alto/2));
			break;
	}//CASE de punto de colision
	//===========================================
	
	if (moverArriba && !moverAbajo) {
		if(sprites[0].y>TOPE_FILA_INICIAL){
			sprites[0].vy = -(VELOCIDAD_AVANCE);
		}else{
			moverArriba=false;
		}
		sprites[0].direccion = DIRECCION_ARRIBA;		
	}

	if (!moverArriba && moverAbajo) {
		if(sprites[0].y+sprites[0].alto<TOPE_FILA_FINAL){		
			sprites[0].vy = VELOCIDAD_AVANCE;
		}else{
			moverAbajo=false;
		}
		sprites[0].direccion = DIRECCION_ABAJO;
	}

	if (moverDerecha && !moverIzquierda) {
		if(sprites[0].x+sprites[0].ancho<TOPE_COLUMNA_FINAL){		
			sprites[0].vx = VELOCIDAD_AVANCE;
		}else{
			moverDerecha=false;
		}
		sprites[0].direccion = DIRECCION_DERECHA;
	}
	if (!moverDerecha && moverIzquierda) {
		if(sprites[0].x>TOPE_COLUMNA_INICIAL){		
			sprites[0].vx = -(VELOCIDAD_AVANCE);
		}else{
			moverIzquierda=false;
		}
		sprites[0].direccion = DIRECCION_IZQUIERDA;
	}
	//===========================================
	//establece a cero la velocidad
	if (!moverArriba && !moverAbajo) {
		sprites[0].vy = 0;
	}
	if (!moverIzquierda && !moverDerecha) {
		sprites[0].vx = 0;
	}
	//============================================
	//estoy seguro que hay formas de mejorarlo
	//recorre todos los objetos y verifica lacolision
	//dentro de su recuadro de limites.
	//control de colisiones de objetos
	for(objetop=1; objetop<sprites.length; objetop++){
//		console.log("ciclo"+objetop);
		if(sprites[objetop].visible){
			//controla los objetos
		if (((px > sprites[objetop].x) && (px < (sprites[objetop].x+sprites[objetop].ancho))) &&
			((py > sprites[objetop].y) && (py < (sprites[objetop].y+sprites[objetop].alto)))){
//=====================================
			var mensajeFinal;
			var indice=MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
			switch (objetop){
				case OBJ_PUERTO:
					sprites[OBJ_REGALO].visible=false;				
				console.log("dentro de puerto");
				    break;
				case OBJ_YACARE:
					if(!sprites[OBJ_REGALO].visible){
						sprites[OBJ_REGALO].visible=true;
						sprites[OBJ_REGALO].x=px;
						sprites[OBJ_REGALO].y=py;
						mensajeFinal=matrizMensajes[OBJ_YACARE][indice];
						finDelJuego(mensajeFinal);																																												
					}//			
					break;															
				case OBJ_PLAYA:
					if(!sprites[OBJ_REGALO].visible){
						sprites[OBJ_REGALO].visible=true;
						sprites[OBJ_REGALO].x=px;
						sprites[OBJ_REGALO].y=py;
						mensajeFinal=matrizMensajes[OBJ_PLAYA][indice];
						finDelJuego(mensajeFinal);																																												
					}//			
					break;
				case OBJ_PIRANA:
					if(!sprites[OBJ_REGALO].visible){
						sprites[OBJ_REGALO].visible=true;
						sprites[OBJ_REGALO].x=px;
						sprites[OBJ_REGALO].y=py;
						mensajeFinal=matrizMensajes[OBJ_PIRANA][indice];
						finDelJuego(mensajeFinal);																																												
					}//			
					break;				
			}
		}else{
//			console.log("fuera");			
		}

			
		}//

		
	}//for	

	//zona yacare
	//zona piranas
	//destinoplaya
	//============================================
	//mover el sprite cero que es lo que usa el jugador
	sprites[0].x += sprites[0].vx;
	sprites[0].y += sprites[0].vy;

	//===========================================
	render();
}

function render() {
	//limpiar el objeto canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//recorrer los objetos
	//	console.log("funcion render antes de sprites.length");
	if (sprites.length !== 0) {
		//	console.log("luego de sprites.length");
		for (var i = 0; i < sprites.length; i++) {
			var sprite = sprites[i];
			if (sprite.visible) {
				//hace algo si es visible
				//===========================
				//lleva canvas al medio de la imgen
				//dibuja la imagen
				if(sprite.direccion!=0){
					sprite.fuenteX=(sprite.direccion*sprite.fuenteAncho)-sprite.fuenteAncho;
				}
				ctx.drawImage(spritesImagenes[i], sprite.fuenteX, sprite.fuenteY, sprite.fuenteAncho, sprite.fuenteAlto, sprite.x, sprite.y, sprite.ancho, sprite.alto);
				//===========================
			}//if (sprite.visible) {
		}//for (var i = 0; i < sprites.length; i++) {
	}//if (sprites.length !== 0) {
}//function render

//============================================================================

function finDelJuego(mensajeFinalFuncion){
//pantalla que desaparecera
	var pantalla = document.querySelector("#canvasScreen");	
	alert("Termino el juego!!!\n"+mensajeFinalFuncion);
	pantalla.setAttribute("hidden", "true");	
}//
