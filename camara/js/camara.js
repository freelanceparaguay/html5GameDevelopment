//El un ejemplo adaptado dellibro Foundation Game Design with HTML5 and JavaScript
//Se utiliza la tecnica de una camara que sigue a un objeto que es manejado con teclas 
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
const PASOS_ANGULO = 1;
const PASOS_AVANCE = 2;

//representa el indice dentro del array del sprite a mover con tecla
//pueden existir varios sprites
const OBJ_TECLADO = 1;
//==============================================

//==============================================
//CONSTANTES para rutas a imagenes
//==============================================
const PATH_IMAGENES = "images/";
const IMAGEN_FONDO = "fondo2.png";
const IMAGEN_TECLADO = "automodif.png";

//============================================
//--- Modelo Objeto sprite
var spriteObjeto = {
	//Lectura de x e y de la imagen
	fuenteX : 0,
	fuenteY : 0,
	fuenteAncho : 64,
	fuenteAlto : 64,
	//La x e y donde aparecera la imagen en canvas
	x : 0,
	y : 0,
	ancho : 64,
	alto : 64,
	//angulo que tendra la imagen expresado en grados
	rotacion : 0,
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
//===============================================================
//===================objetos del escenario ==============
//Se crea el objeto con los datos para la imagen de fondo
var objetoFondo = Object.create(spriteObjeto);
objetoFondo.fuenteX = 0;
objetoFondo.fuenteY = 64;
objetoFondo.fuenteAncho = 1600;
objetoFondo.fuenteAlto = 1600;
objetoFondo.x = 0;
objetoFondo.y = 0;
objetoFondo.visible = true;
objetoFondo.ancho = 1600;
objetoFondo.alto = 1600;
//colocca el sprite en el array
sprites.push(objetoFondo);
//Se carga la imagen para el fondo en el array de imagenes
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[0].addEventListener("load", loadHandler, false);
spritesImagenes[0].src = PATH_IMAGENES+IMAGEN_FONDO;


//Se define el ancho del mundo por donde se movera el objeto 
var objetoEscenario = {
	x : 0,
	y : 0,
	ancho : objetoFondo.ancho,
	alto : objetoFondo.alto
};

//se determina el ancho de la camara que seguira al objeto
var objetoCamara = {
	x : 0,
	y : 0,
	ancho : canvas.width,
	alto : canvas.height
};

//imagen que aparecera y que sera movida con el teclado
var objetoTeclado = Object.create(spriteObjeto);
objetoTeclado.x = (objetoEscenario.x + objetoEscenario.ancho / 2) - objetoTeclado.ancho / 2;
objetoTeclado.y = (objetoEscenario.y + objetoEscenario.alto / 2) - objetoTeclado.alto / 2;
sprites.push(objetoTeclado);

//carga la imagen para el primer objeto que sera movido por el teclado
imagen = new Image();
spritesImagenes.push(imagen);
spritesImagenes[OBJ_TECLADO].addEventListener("load", loadHandler, false);
spritesImagenes[OBJ_TECLADO].src = PATH_IMAGENES+IMAGEN_TECLADO;
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
	//Crea el bucle o ciclo de la animacion
	window.requestAnimationFrame(update, canvas);
	//Mueve el objeto y lo mantiene dentro de los limites del escenario
	objetoTeclado.x = Math.max(0, Math.min(objetoTeclado.x + objetoTeclado.vx, objetoEscenario.ancho - objetoTeclado.ancho));
	objetoTeclado.y = Math.max(0, Math.min(objetoTeclado.y + objetoTeclado.vy, objetoEscenario.alto - objetoTeclado.alto));
	//Centra el objeto que sera movido por teclado al centro de la camara
	objetoCamara.x = Math.floor(objetoTeclado.x + (objetoTeclado.ancho / 2) - (objetoCamara.ancho / 2));
	objetoCamara.y = Math.floor(objetoTeclado.y + (objetoTeclado.alto / 2) - (objetoCamara.alto / 2));

	//Mantiene la camara dentro de los limites del escenario
	if (objetoCamara.x < objetoEscenario.x) {
		objetoCamara.x = objetoEscenario.x;
	}
	if (objetoCamara.y < objetoEscenario.y) {
		objetoCamara.y = objetoEscenario.y;
	}
	if (objetoCamara.x + objetoCamara.width > objetoEscenario.x + objetoEscenario.ancho) {
		objetoCamara.x = objetoEscenario.x + objetoEscenario.ancho - objetoCamara.ancho;
	}
	if (objetoCamara.y + objetoCamara.alto > objetoEscenario.alto) {
		objetoCamara.y = objetoEscenario.alto - objetoCamara.alto;
	}

	//==============================================
	if (moverArriba && !moverAbajo) {
		//==============================
		nuevoX = PASOS_AVANCE * Math.cos(sprites[OBJ_TECLADO].rotacion * (Math.PI / 180));
		nuevoY = PASOS_AVANCE * Math.sin(sprites[OBJ_TECLADO].rotacion * (Math.PI / 180));
		sprites[OBJ_TECLADO].x = sprites[OBJ_TECLADO].x + nuevoX;
		sprites[OBJ_TECLADO].y = sprites[OBJ_TECLADO].y + nuevoY;
	}
	//==============================
	if (!moverArriba && moverAbajo) {
		//==============================
		nuevoX = -PASOS_AVANCE * Math.cos(sprites[OBJ_TECLADO].rotacion * (Math.PI / 180));
		nuevoY = -PASOS_AVANCE * Math.sin(sprites[OBJ_TECLADO].rotacion * (Math.PI / 180));
		sprites[OBJ_TECLADO].x = sprites[OBJ_TECLADO].x + nuevoX;
		sprites[OBJ_TECLADO].y = sprites[OBJ_TECLADO].y + nuevoY;
		//==============================
	}
	//Teclas cursores izquierda y derecha cambian el angulo de rotacion
	if (moverDerecha && !moverIzquierda) {
		if (sprites[OBJ_TECLADO].rotacion < MAX_ANGULO) {
			sprites[OBJ_TECLADO].rotacion = sprites[OBJ_TECLADO].rotacion + PASOS_ANGULO;
		} else {
			sprites[OBJ_TECLADO].rotacion = sprites[OBJ_TECLADO].rotacion - MAX_ANGULO;
		}
	}
	if (!moverDerecha && moverIzquierda) {
		if (sprites[OBJ_TECLADO].rotacion > MIN_ANGULO) {
			sprites[OBJ_TECLADO].rotacion = sprites[OBJ_TECLADO].rotacion - PASOS_ANGULO;
		} else {
			sprites[OBJ_TECLADO].rotacion = MAX_ANGULO + sprites[OBJ_TECLADO].rotacion;
		}
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
function render(event) {
	//Limpia el canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.translate(-objetoCamara.x, -objetoCamara.y);
	if (sprites.length !== 0) {
		for (var i = 0; i < sprites.length; i++) {
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
	ctx.restore();
}//fin render

