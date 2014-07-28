/**
 * @author Juan Carlos Miranda Octubre 2013 juancarlosmiranda81@gmail.com
 */

var matrizMapa = 
[
 	[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 6, 6, 6, 0],
	[0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 6, 6, 0],
	[0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 6, 0],
	[0, 0, 0, 0, 2, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 5, 5, 5, 5, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 7, 7, 5, 5, 5, 6, 6],
	[0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 7, 7, 5, 5, 5, 5, 6],
	[2, 2, 3, 5, 5, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 7, 7, 7, 4, 5, 5, 5, 6],
	[2, 3, 5, 4, 4, 4, 8, 7, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 7, 7, 4, 4, 4, 5, 5, 6],																																															
	[3, 5, 4, 4, 4, 4, 4, 4, 7, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 4, 4, 4, 4, 4, 5, 6],
	[6, 4, 4, 5, 4, 4, 4, 4, 7, 7, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4, 5, 6],
	[4, 4, 4, 5, 5, 4, 4, 4, 4, 7, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 3, 3, 3, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4, 4, 5, 6],
	[5, 5, 5, 4, 4, 5, 5, 5, 5, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6],
	[6, 6, 6, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6],
	[6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];

//contiene los tipos de objetos a representar en el mapa
//es una copia exacta en tamano del mapa
//la direccion y otros datos se guardan en los objetos espcificos
var objetosJuegoMapa = 
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],																																															
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];			

//==============================================
//VARIABLES GLOBALES para tope de matrices
//==============================================
var TOPE_FILA_INICIAL=0;
var TOPE_COLUMNA_INICIAL=0;	
var SIZE_FILAS_MAPA=matrizMapa.length;
var SIZE_COLUMNAS_MAPA=matrizMapa[0].length;
var SIZE_FILAS_OBJETOS=objetosJuegoMapa.length;
var SIZE_COLUMNAS_OBJETOS=objetosJuegoMapa[0].length;


//==============================================
//CONSTANTES para dibujo de celdas
//==============================================
const SIZE = 30; //tamano celda medida en pixeles, utilizado para el dibujo
const SPACE = 1; //espacio entre celdas medida en pixeles, utilizado para el dibujo
//==============================================
//CONSTANTES para marcar las direcciones
//==============================================
const DIRECCION_ARRIBA=1;
const DIRECCION_DERECHA=2;
const DIRECCION_ABAJO=3;
const DIRECCION_IZQUIERDA=4;
const MIN_RANGO_RANDOM=1;
const MAX_RANGO_RANDOM=5;
//==============================================
//==============================================
//CONSTANTES para rutas a imagenes
//==============================================
const PATH_IMAGENES="images/obj/";
//las imagenes se guardan en carpetas segun el tipo
//de vehiculo y segun la posicion ej:
//images/obj/1/1.png es vehiculo 1 posicion arriba

//==============================================
//CONSTANTES para representacion de los ambientes del escenario
//==============================================
const AGUA1=1;
const AGUA2=2;
const AGUA3=3;
const PASTO1=4;
const TIERRA1=5;
const TIERRA2=6;
const ARENA1=7;
const MOLINO=8;
const TORRE=9;
const NAVEGANTES=10;
//==============================================
//CONSTANTES para actores del juego
//==============================================
//tipos de objetos a representar en el mapa de objetos
const OBJ_LANCHA_1=1;
const OBJ_LANCHA_2=2;
const OBJ_SEMIRRIGIDO=3;
const OBJ_ANFIBIO=4;
const OBJ_VACIO=0;

//estados en lo que se puede encontrar un objeto movil
const EST_PARADO=0;
const EST_MOVIMIENTO=1;

//representa a los objetos que se moveran del tipo lancha
var objetoMovilLancha = {
	x:10,  //columna
	y:9,    //fila
	direccion:DIRECCION_IZQUIERDA,
//	tipo:OBJ_LANCHA_1,
	tipo:0,
	estado: EST_MOVIMIENTO,
	transitar:[AGUA1,AGUA2,AGUA3]
};


arregloObjetosMoviles=[Object.create(objetoMovilLancha)];



//funcion principal que comienza el juego
window.onload = function() {
	arregloObjetosMoviles=cargarObjetosMoviles(objetosJuegoMapa);
	setInterval(jugar, 400);
	for(var i=0; i< arregloObjetosMoviles.length; i++){
		arregloObjetosMoviles[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
	};

		
}//onload



function jugar(){
	dibujarMapa(matrizMapa);
//	alert(arregloObjetosMoviles.length);
//	console.log("========INICIO=========");
//	for(var i=0; i< arregloObjetosMoviles.length; i++){
//		console.log(arregloObjetosMoviles[i].y+"-"+arregloObjetosMoviles[i].x+"direccion"+arregloObjetosMoviles[i].direccion);
//	};
//	alert("antes");

//	alert("mover");
	dibujarObjetosMoviles(arregloObjetosMoviles);
	dibujarMapa(matrizMapa);
	arregloObjetosMoviles=moverTodosObjetos(arregloObjetosMoviles);
	dibujarObjetosMoviles(arregloObjetosMoviles);	
//	alert("luego de mover");
//	console.log("=================");
//	for(var i=0; i< arregloObjetosMoviles.length; i++){
//		console.log(arregloObjetosMoviles[i].y+"-"+arregloObjetosMoviles[i].x+"direccion"+arregloObjetosMoviles[i].direccion);
//	};	
//	console.log("========FIN=========");
	
	
}


//==============================================

/*
 * Se encarga de dibujar el escenario basandose en una matriz inicial
 * con valores cargados.
 */
function dibujarMapa(matriz) {
	var fila = 0;
	var columna = 0;
	var celda;
	var FILAS = matriz.length;
	var COLUMNAS = matriz[0].length;
	var stage = document.querySelector("#stage");	
	//limpiar los nodos del documento y volver a dibujar

	while(stage.hasChildNodes())
	{
	//remover todos los nodos hijos dependientes del escenario
		stage.removeChild(stage.firstChild);
	}		
			
	for ( fila = 0; fila < FILAS; fila++) {
		for ( columna = 0; columna < COLUMNAS; columna++) {
			celda = document.createElement("div");
			celda.setAttribute("class", "cell");
			stage.appendChild(celda);
			celda.style.top = fila * (SIZE + SPACE) + "px";
			celda.style.left = columna * (SIZE + SPACE) + "px";	
			
			switch(matriz[fila][columna]){
				case 0:
					//por default viene cargado con 0 (ceros)
					celda.setAttribute("class", "cellAgua1");					
					break;				
				case AGUA1:
					celda.setAttribute("class", "cellAgua1");					
					break;
				case AGUA2:
					celda.setAttribute("class", "cellAgua2");					
					break;					
				case AGUA3:
					celda.setAttribute("class", "cellAgua3");					
					break;								
				case PASTO1:
					celda.setAttribute("class", "cellPasto1");					
					break;
				case TIERRA1:
					celda.setAttribute("class", "cellTierra1");					
					break;
				case TIERRA2:
					celda.setAttribute("class", "cellTierra2");					
					break;
				case ARENA1:
					celda.setAttribute("class", "cellArena1");					
					break;					
				case MOLINO:
					var imagen=document.createElement("img");
					imagen.style.top = fila * (SIZE + SPACE) + "px";
					imagen.style.left = columna * (SIZE + SPACE) + "px";	
					stage.appendChild(imagen);
					imagen.src=PATH_IMAGENES+"stage/molino.png";
					imagen.setAttribute("class", "imagenStage");					
					break;
				case TORRE:
					var imagen=document.createElement("img");
					imagen.style.top = fila * (SIZE + SPACE) + "px";
					imagen.style.left = columna * (SIZE + SPACE) + "px";	
					stage.appendChild(imagen);
					imagen.src=PATH_IMAGENES+"stage/torre.png";
					imagen.setAttribute("class", "imagenStage");					
					break;
				case NAVEGANTES:
					var imagen=document.createElement("img");
					imagen.style.top = fila * (SIZE + SPACE) + "px";
					imagen.style.left = columna * (SIZE + SPACE) + "px";	
					stage.appendChild(imagen);
					imagen.src=PATH_IMAGENES+"stage/navegantes.png";
					imagen.setAttribute("class", "imagenStage");					
					break;
																																																				
			}//switch
		}//columnas
	}//filas
}//fin dibujar



//lee el mapa de objetos y los carga en un arreglo
//no dibuja, de la representacion de objetos e encarga otra funcion
function cargarObjetosMoviles(objetosJuego) {
	var fila = 0;
	var columna = 0;
	var FILAS = objetosJuego.length;
	var COLUMNAS = objetosJuego[0].length;
	var arregloObjetosMovilesCarga=[];
	var objetoEncontrado;
/*
const OBJ_LANCHA_1=1;
const OBJ_LANCHA_2=2;
const OBJ_SEMIRRIGIDO=3;
const OBJ_ANFIBIO=4;
 */	 
	for ( fila = 0; fila < FILAS; fila++) {
		for ( columna = 0; columna < COLUMNAS; columna++) {						
			switch(objetosJuego[fila][columna]){																						
				case OBJ_LANCHA_1:
						//crea la lancha cuando encuentra el valor en el mapa
						//cargar arreglo
						objetoEncontrado=Object.create(objetoMovilLancha);
						objetoEncontrado.y=fila;
						objetoEncontrado.x=columna;
						objetoEncontrado.tipo=objetosJuego[fila][columna];												
						arregloObjetosMovilesCarga.push(objetoEncontrado);					
					break;
				case OBJ_LANCHA_2:
						//crea la lancha cuando encuentra el valor en el mapa
						//cargar arreglo
						objetoEncontrado=Object.create(objetoMovilLancha);
						objetoEncontrado.y=fila;
						objetoEncontrado.x=columna;
						objetoEncontrado.tipo=objetosJuego[fila][columna];																		
						arregloObjetosMovilesCarga.push(objetoEncontrado);					
					break;	
				case OBJ_SEMIRRIGIDO:
						objetoEncontrado=Object.create(objetoMovilLancha);
						objetoEncontrado.y=fila;
						objetoEncontrado.x=columna;
						objetoEncontrado.tipo=objetosJuego[fila][columna];																		
						arregloObjetosMovilesCarga.push(objetoEncontrado);
					break;																																
				default: break;
			}//switch

		}//columnas
	}//filas
	return arregloObjetosMovilesCarga;
}//fin poner objetos

//recorre el arreglo previamente cargado y posiciona en la pantalla
//segun su direccion e imagen que corresponda
function dibujarObjetosMoviles(arregloObjetosMovilesT){
	//recorre arreglo
	//crea elemento en pantala
	//por cada elemento toma la coordenada
	//posiciona en pixeles en la pantalla
	//selecciona la imagen segun la direccion
	// dibuja
	var stage = document.querySelector("#stage");	
	var objetoPantalla;
	for(var i=0; i < arregloObjetosMovilesT.length; i++){		
		//crea elemento en pantalla
		objetoPantalla=document.createElement("img");
		//por cada elemento tomala coordenada
		//posiciona en pixeles en la pantalla
//		objetoPantalla.style.top = arregloObjetosMovilesT[i].y * (SIZE + SPACE) + "px";
//		objetoPantalla.style.left = arregloObjetosMovilesT[i].x * (SIZE + SPACE) + "px";
		objetoPantalla.style.top = arregloObjetosMovilesT[i].y * (SIZE) + "px";
		objetoPantalla.style.left = arregloObjetosMovilesT[i].x * (SIZE) + "px";
		stage.appendChild(objetoPantalla);
		//busca el tipo de objeto		
		//coloca la imagen segun la direccion dentro del objeto
		objetoPantalla.src=PATH_IMAGENES+arregloObjetosMovilesT[i].tipo+"/"+arregloObjetosMovilesT[i].direccion+".png";
		//elige el estilo sea vertical u horizontal
		switch(arregloObjetosMovilesT[i].direccion){
			case 0:
			case DIRECCION_ARRIBA:
				objetoPantalla.setAttribute("class", "Vertical"+arregloObjetosMovilesT[i].tipo);						
				break;
			case DIRECCION_DERECHA:
				objetoPantalla.setAttribute("class", "Horizontal"+arregloObjetosMovilesT[i].tipo);
				break;
			case DIRECCION_ABAJO:
				objetoPantalla.setAttribute("class", "Vertical"+arregloObjetosMovilesT[i].tipo);
				break;
			case DIRECCION_IZQUIERDA:
			case 5:
				objetoPantalla.setAttribute("class", "Horizontal"+arregloObjetosMovilesT[i].tipo);
				break;
		}
	}
}//function dibujarObjetosMoviles(arregloObjetosMoviles){

/*
 * Mover objetos mueve todos los objetos de un array
 * se alimentara de los datos internos como ser
 * direccion, ambiente dentro del mapa y vecinos
 * movera el objeto hasta los limites
 * si hay vecinos se debe elegir una accion
 * antes de mover se verifica si puede hacerlo
 * Se debe recibir el arreglo modificado con las coordenadas de los objetos
 * Lamentablemente se utiliza la matriz de objetos y el mapa como global, dado que ambas se modifican
 * Hacer que funciones de manera funcional implicaria hacer una funcion especifica que no amerita
 * por el momento
 */
function moverTodosObjetos(arregloObjetosMovilesT){
	//se cargan los datos del arrglo para trabajar en forma temporal
	var filaObjeto; 
	var columnaObjeto;
	for(var i=0; i < arregloObjetosMovilesT.length; i++){
		/*
 		* const EST_PARADO=0;
		* const EST_MOVIMIENTO=1;
		*/
		//carga del arreglo para una mejor comprension
		//se usan variables
		filaObjeto=arregloObjetosMovilesT[i].y;
		columnaObjeto=arregloObjetosMovilesT[i].x;
		//verifica el estado y luego la direccion
		switch(arregloObjetosMovilesT[i].estado){
			case EST_PARADO:
			//algo hace si est parado
				break;
			case EST_MOVIMIENTO:
				switch(arregloObjetosMovilesT[i].direccion){
					case 0:
					case DIRECCION_ARRIBA:
						//si esta aqui es porque puede moverse
						//verifica los objetos vecinos
						//verifica el paisaje si puede hacerlo					
						if(filaObjeto > TOPE_FILA_INICIAL){
							if(verificaMapa(arregloObjetosMovilesT[i].direccion,matrizMapa,filaObjeto,columnaObjeto) && verificaObjetos(arregloObjetosMovilesT[i].direccion,objetosJuegoMapa,filaObjeto,columnaObjeto)){								
								//realiza la acccion
								objetosJuegoMapa[filaObjeto-1][columnaObjeto]=objetosJuegoMapa[filaObjeto][columnaObjeto];
								objetosJuegoMapa[filaObjeto][columnaObjeto]=0;
								arregloObjetosMovilesT[i].y=filaObjeto-1;
								arregloObjetosMovilesT[i].x=columnaObjeto;					
							}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
							}
						}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
						}																							
						break;			
					case DIRECCION_DERECHA:
						if(columnaObjeto < SIZE_COLUMNAS_OBJETOS-1){
							if(verificaMapa(arregloObjetosMovilesT[i].direccion,matrizMapa,filaObjeto,columnaObjeto) && verificaObjetos(arregloObjetosMovilesT[i].direccion,objetosJuegoMapa,filaObjeto,columnaObjeto)){								
								//realiza la acccion
								objetosJuegoMapa[filaObjeto][columnaObjeto+1]=objetosJuegoMapa[filaObjeto][columnaObjeto];
								objetosJuegoMapa[filaObjeto][columnaObjeto]=0;
								arregloObjetosMovilesT[i].y=filaObjeto;
								arregloObjetosMovilesT[i].x=columnaObjeto+1;
							}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
							}
						}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
						}										
						break;
					case DIRECCION_ABAJO:
						if(filaObjeto < SIZE_FILAS_OBJETOS-1){
							if(verificaMapa(arregloObjetosMovilesT[i].direccion,matrizMapa,filaObjeto,columnaObjeto) && verificaObjetos(arregloObjetosMovilesT[i].direccion,objetosJuegoMapa,filaObjeto,columnaObjeto)){								
								//realiza la acccion
								objetosJuegoMapa[filaObjeto+1][columnaObjeto]=objetosJuegoMapa[filaObjeto][columnaObjeto];
								objetosJuegoMapa[filaObjeto][columnaObjeto]=0;
								arregloObjetosMovilesT[i].y=filaObjeto+1;
								arregloObjetosMovilesT[i].x=columnaObjeto;
							}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
							}
						}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);						
						}					
						break;				
					case DIRECCION_IZQUIERDA:
					case 5:					
						if(columnaObjeto > TOPE_COLUMNA_INICIAL){
							if(verificaMapa(arregloObjetosMovilesT[i].direccion,matrizMapa,filaObjeto,columnaObjeto) && verificaObjetos(arregloObjetosMovilesT[i].direccion,objetosJuegoMapa,filaObjeto,columnaObjeto)){								
								//realiza la acccion
								objetosJuegoMapa[filaObjeto][columnaObjeto-1]=objetosJuegoMapa[filaObjeto][columnaObjeto];
								objetosJuegoMapa[filaObjeto][columnaObjeto]=0;
								arregloObjetosMovilesT[i].y=filaObjeto;
								arregloObjetosMovilesT[i].x=columnaObjeto-1;
							}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
							}
						}else{
								arregloObjetosMovilesT[i].direccion = MIN_RANGO_RANDOM +Math.floor(Math.random() * MAX_RANGO_RANDOM);
						}	
						break;																
				}//switch direccion			
				break;				
		}//switch
	}//for
	return arregloObjetosMovilesT;
}

function verificaMapa(direccion,matrizMapa,filaMapa, columnaMapa){
	var resultado=false;
	var TOPE_FILA_INICIAL=0;
	var TOPE_COLUMNA_INICIAL=0;	
	var SIZE_FILAS_MAPA=matrizMapa.length;
	var SIZE_COLUMNAS_MAPA=matrizMapa[0].length;
/*	
const DIRECCION_ARRIBA=1;
const DIRECCION_DERECHA=2;
const DIRECCION_ABAJO=3;
const DIRECCION_IZQUIERDA=4;
*/	
	switch(direccion){
		case 0:
		case DIRECCION_ARRIBA:
			//arriba			
			if(filaMapa > TOPE_FILA_INICIAL){
				switch(matrizMapa[filaMapa-1][columnaMapa]){
					case 0:
					case 1:
					case 2:					
					case 3:
							//es agua avanza
							resultado=true;
							break;					
				}								
			}	
			break;
		case DIRECCION_DERECHA:
			//derecha
			if(columnaMapa < SIZE_COLUMNAS_MAPA){
				switch(matrizMapa[filaMapa][columnaMapa+1]){
					case 0:
					case 1:
					case 2:					
					case 3:
							//es agua avanza
							resultado=true;
							break;					
				}								
			}			
			break;
		case DIRECCION_ABAJO:
			//abajo
//			alert("filaMapa"+filaMapa+"tamano filas->"+SIZE_FILAS_MAPA);
			if(filaMapa < (SIZE_FILAS_MAPA-1)){
				switch(matrizMapa[filaMapa+1][columnaMapa]){
					case 0:
					case 1:
					case 2:					
					case 3:
							//es agua avanza
							resultado=true;
							break;					
				}								
			}
			break;
		case DIRECCION_IZQUIERDA:
		case 5:
			//izquierda		
				switch(matrizMapa[filaMapa][columnaMapa-1]){
					case 0:
					case 1:
					case 2:					
					case 3:
							//es agua avanza
							resultado=true;
							break;					
				}											
									
			break;									
	}		
//	alert("resultado="+resultado);
	return resultado;
}

function verificaObjetos(direccion,matrizObjetos,filaObjeto, columnaObjeto){
	var resultado=false;
	var TOPE_FILA_INICIAL=0;
	var TOPE_COLUMNA_INICIAL=0;	
	var SIZE_FILAS_OBJETOS=matrizObjetos.length;
	var SIZE_COLUMNAS_OBJETOS=matrizObjetos[0].length;

/*	
const DIRECCION_ARRIBA=1;
const DIRECCION_DERECHA=2;
const DIRECCION_ABAJO=3;
const DIRECCION_IZQUIERDA=4;
*/		
	switch(direccion){
		case 0:
		case DIRECCION_ARRIBA:
			//arriba			
			if(filaObjeto > TOPE_FILA_INICIAL){
//			alert("filaObjeto > TOPE_FILA_INICIAL");
				switch(matrizObjetos[filaObjeto-1][columnaObjeto]){
					case OBJ_VACIO:
						//es agua avanza
						resultado=true;
						break;					
				}		
			}	
			break;
		case DIRECCION_DERECHA:
			//derecha
			if(columnaObjeto < (SIZE_COLUMNAS_OBJETOS-1)){				
				switch(matrizObjetos[filaObjeto][columnaObjeto+1]){
					case OBJ_VACIO:
						//es agua avanza
						resultado=true;
						break;					
				}
			}			
			break;
		case DIRECCION_ABAJO:
			//abajo
			if(filaObjeto < (SIZE_FILAS_OBJETOS-1)){				
				switch(matrizObjetos[filaObjeto+1][columnaObjeto]){
					case OBJ_VACIO:
						//es agua avanza
						resultado=true;
						break;					
				}												
			}
			break;
		case DIRECCION_IZQUIERDA:
		case 5:
			//izquierda
			if(columnaObjeto > TOPE_COLUMNA_INICIAL){
				switch(matrizObjetos[filaObjeto][columnaObjeto-1]){
					case OBJ_VACIO:
						//es agua avanza
						resultado=true;
						break;					
				}
			}						
			break;									
	}		
	return resultado;
}