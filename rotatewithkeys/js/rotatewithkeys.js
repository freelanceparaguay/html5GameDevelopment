
//==============================================
//VARIABLES GLOBALES para tope de matrices
//==============================================
var TOPE_FILA_INICIAL = 0;
var TOPE_COLUMNA_INICIAL = 0;
var TOPE_FILA_FINAL = 450;
var TOPE_COLUMNA_FINAL = 800;
//============================================
//CONSTANTES TECLAS
//============================================
//teclas
const TECLA_ARRIBA = 38;
const TECLA_DERECHA = 39;
const TECLA_ABAJO = 40;
const TECLA_IZQUIERDA = 37;

//============================================
//Configuracion
//============================================
const MIN_ANGULO = 0;
const MAX_ANGULO = 360;
const PASOS_ANGULO=1;
const PASOS_AVANCE=1;
//representa el indice dentro del array del sprite a mover con tecla
//pueden existir varios sprites
const OBJ_TECLADO=0; 
//==============================================

//==============================================
//CONSTANTES para rutas a imagenes
//==============================================
const PATH_IMAGENES = "images/";
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
	//angulo que tendra la imagen expresado en grados
	rotacion:0,
	visible : true,
	//velocidad en x e y
	//es la cantidad de pixeles que avanza el sprite que se mueve con teclas
	vx : 0,
	vy : 0,
};

//============================================================================
//--- PROGRAMA PRINCIPAL ----
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

//========================================================
//INICIALIZACION DE OBJETOS
//crea el el primero objeto
//asigna los valores al objeto
//========================================================
//elementos del escenario,se asignan como tipo
var objeto = Object.create(spriteObjeto);
//posicion inicial del objeto
objeto.x = Math.floor(TOPE_COLUMNA_FINAL/2);
objeto.y = Math.floor(TOPE_FILA_FINAL/2);
objeto.visible = true;
objeto.ancho = 68;
objeto.alto = 68;
objeto.rotacion=0;
//carga el objeto creado en array
sprites.push(objeto);
//carga la imagen para el primer objeto
var imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[OBJ_TECLADO].addEventListener("load", loadHandler, false);
spritesImagenes[OBJ_TECLADO].src = "images/boat.png";

//===============================================================
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
objeto.rotacion = 0;

//carga el objeto creado en array
sprites.push(objeto);

//carga la imagen para el primer objeto
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[1].addEventListener("load", loadHandler, false);
spritesImagenes[1].src = "images/island.png";
//===============================================================



//bandera de direcciones para comprobacion de una tecla presionada
var moverArriba = false;
var moverAbajo = false;
var moverDerecha = false;
var moverIzquierda = false;
//agregar los manejadores de eventos
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

//============================================================================

function loadHandler() {
	//actualiza apenas se haya cargado la imagen
	update();
}

function keyDownHandler(evento) {
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
	//==============================================	
	if (moverArriba && !moverAbajo) {
    //==============================				
		nuevoX=PASOS_AVANCE*Math.cos(sprites[OBJ_TECLADO].rotacion*(Math.PI/180));
		nuevoY=PASOS_AVANCE*Math.sin(sprites[OBJ_TECLADO].rotacion*(Math.PI/180));
		sprites[OBJ_TECLADO].x = sprites[OBJ_TECLADO].x+nuevoX;
		sprites[OBJ_TECLADO].y = sprites[OBJ_TECLADO].y+nuevoY;
		console.log("sprites[OBJ_TECLADO].rotacion="+sprites[OBJ_TECLADO].rotacion+"  nuevoX="+nuevoX+" nuevoY="+nuevoY+"  x="+sprites[OBJ_TECLADO].x+"  y="+sprites[OBJ_TECLADO].y);
    //==============================
	}

	if (!moverArriba && moverAbajo) {
    //==============================				
		nuevoX=-PASOS_AVANCE*Math.cos(sprites[OBJ_TECLADO].rotacion*(Math.PI/180));
		nuevoY=-PASOS_AVANCE*Math.sin(sprites[OBJ_TECLADO].rotacion*(Math.PI/180));
		sprites[OBJ_TECLADO].x = sprites[OBJ_TECLADO].x+nuevoX;
		sprites[OBJ_TECLADO].y = sprites[OBJ_TECLADO].y+nuevoY;
		console.log("sprites[OBJ_TECLADO].rotacion="+sprites[OBJ_TECLADO].rotacion+"  nuevoX="+nuevoX+" nuevoY="+nuevoY+"  x="+sprites[OBJ_TECLADO].x+"  y="+sprites[OBJ_TECLADO].y);
    //==============================	
	}


	//Teclas cursores izquierda y derecha cambian el angulo de rotacion
	if (moverDerecha && !moverIzquierda) {
		if(sprites[OBJ_TECLADO].rotacion<MAX_ANGULO){
			sprites[OBJ_TECLADO].rotacion=sprites[OBJ_TECLADO].rotacion+PASOS_ANGULO;			
		}else{
			sprites[OBJ_TECLADO].rotacion=sprites[OBJ_TECLADO].rotacion-MAX_ANGULO;			
		}
	}
	if (!moverDerecha && moverIzquierda) {
		if(sprites[OBJ_TECLADO].rotacion>MIN_ANGULO){
			sprites[OBJ_TECLADO].rotacion=sprites[OBJ_TECLADO].rotacion-PASOS_ANGULO;			
		}else{
			sprites[OBJ_TECLADO].rotacion=MAX_ANGULO+sprites[OBJ_TECLADO].rotacion;			
		}
		console.log("IZQUIERDA"+sprites[OBJ_TECLADO].rotacion);
	}
	//===========================================
	//establece a cero la velocidad
	if (!moverArriba && !moverAbajo) {
		sprites[0].vy = 0;
	}
	if (!moverIzquierda && !moverDerecha) {
		sprites[0].vx = 0;
	}
	render();
}
//============================================================================

function render(event)
{
	//Limpia el canvas
	ctx.clearRect(0, 0, canvas.ancho, canvas.alto);
	//Recorre el arreglo de sprites y lo muestra
	if(sprites.length !== 0){
		for(var i = 0; i < sprites.length; i++){
			//obtiene contenido de sprite y de imagen para trabajar en forma
			//individual
			var sprite = sprites[i];
			var imagen=spritesImagenes[i];	
			if(sprite.visible){
				//salva el contenido del canvas antes de borrar
				ctx.save();
				//rota el canvas
				ctx.translate
				(
					Math.floor(sprite.x + (sprite.ancho / 2)),
					Math.floor(sprite.y + (sprite.alto / 2))
				);
				ctx.rotate(sprite.rotacion * (Math.PI / 180));
				ctx.drawImage(imagen, sprite.fuenteX, sprite.fuenteY, sprite.fuenteAncho, sprite.fuenteAlto, Math.floor(-sprite.ancho / 2), Math.floor(-sprite.alto / 2), sprite.ancho, sprite.alto);
				//Una vez rotado establece nuevamente el canvas
				ctx.restore();
			}
		}
	}
}//fin render


