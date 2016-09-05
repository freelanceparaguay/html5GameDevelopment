( function() {
		
		Modernizr.load({
			 test: Modernizr.canvas,
		});
		
		// requestAnim shim layer by Paul Irish
		//http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(/* function */callback, /* DOMElement */element) {
				window.setTimeout(callback, 1000 / 60);
			};
		})();

		//only executes if all elements are charged
		window.onload = function() {
			if (!Modernizr.canvas) {
				alert("Your browser does not support HTML5 CANVAS, the script will not run");
			} else {
				mainProgram();
			}

		};

		//GLOBALS VARIABLES
		//This example is based on Foundation Game Design with HTML5 and JavaScript
		//Technique following a camera to an object which is managed with keys used
		//============================================
		//key consts
		//============================================
		const KEY_UP = 38;
		const KEY_RIGHT = 39;
		const KEY_DOWN = 40;
		const KEY_LEFT = 37;
		const KEY_SPACE = 32;

		//============================================
		//Configurations consts
		//============================================
		const MIN_ANGLE = 0;
		const MAX_ANGLE = 360;
		const STEP_ANGLE = 1;
		const STEP_FORWARD = 2;
		//OBJ_PLAYER_IDX represents an index into the array of sprite move with key
		const OBJ_PLAYER_IDX = 1;
		var OBJ_BEGIN_RENDER = 0;		
		//==============================================
		//Images consts
		//==============================================
		const WIDTH_CHAR = 32;
		const HEIGHT_CHAR = 32;
		const WIDTH_PLAYER = 96;
		const HEIGHT_PLAYER = 96;

		const PATH_IMAGES = "images/";
		const IMAGE_BACKGROUND = "fondo5.png";
		const IMAGE_PLAYER_TYPE = "frameTatu.png";
		const IMAGE_PLAYER_TONGUE_TYPE = "frameTatuTonge2.png";
		const IMAGE_BUG_TYPE1 = "frameAnt.png";
		const IMAGE_BUG_TYPE2 = "frameBeetle.png";
		const IMAGE_BUG_TYPE3 = "frameFly.png";
		const IMAGE_POWER_TERERE = "frameTere.png";
		const IMAGE_POWER_ARMOR = "frameArmor.png";
		const IMAGE_POWER_SPEED = "frameSpeed.png";

		//==============================================
		//Game states and variables related to the stage
		//==============================================
		var LOADING_STATE = 0;
		var PLAYING_STATE = 1;
		var OVER_STATE = 2;
		var PAUSE_STATE = 3;
		var gameState = PLAYING_STATE;
		var levelActual = 1;
		var counterEnemies = 0;

		//==============================================
		//Objects types
		//==============================================
		const NOTHING_TYPE = 0;
		const STAGE_TYPE = 1;
		const PLAYER_TYPE = 2;
		//diferents bugs in a stage
		const BUG_TYPE1 = 3;
		const BUG_TYPE2 = 4;
		const BUG_TYPE3 = 5;
		//different powers for the player
		const POWER_TERERE = 6;
		const POWER_ARMOR = 7;
		const POWER_SPEED = 8;

		//============================================
		//--- Modelo Objeto sprite
		var spriteObject = {
			//image's x and y used to reder images
			sourceX : 0,
			sourceY : 0,
			sourceWidth : WIDTH_CHAR,
			sourceHeight : HEIGHT_CHAR,
			//position where the image will appear on canvas
			x : 0,
			y : 0,
			width : WIDTH_CHAR,
			height : HEIGHT_CHAR,
			//angle image will expressed in degrees
			rotacion : 0,
			//provides visibility of the image when drawing
			visible : true,
			//speed in x and y
			//is the number of pixels that advances the sprite moving with keys
			vx : 0,
			vy : 0,
			//type of object
			type : NOTHING_TYPE,
			//this is used to calculate the object's movement
			STEP_FORWARD : 1,

			//=====LIVES ATTRIBUTES===========
			//ENERGY, LIVES, STRENGTH, ARMOR
			score : 0,
			strength : 1,
			armor : 0,
			energy : 0,
			//is a mobile object? or is fixed within screen?
			mobile : true,

			addScore : function() {
				this.score++;
			},
			addStrength : function(objectToControl) {
				this.strength = this.strength + objectToControl.strength;
			},
			takeStrength : function(objectToControl) {
				this.strength = this.strength - objectToControl.strength;
				if (this.strength < 0) {
					this.strength = 0;
				}
			},
			hasStrength : function() {
				if (this.strength < 0) {
					this.strength = 0;
				}
				return this.strength;
			},
			addArmor : function() {
				this.armor++;
			},
			addSpeed : function() {
				this.STEP_FORWARD = this.STEP_FORWARD * 2;
			},
			addEnergy : function() {
				this.energy;
			},
			//================================
			//Animations attributes
			currentFrame : 0,
			totalFrames : 3,
			//calculate next frame animation
			nextFrame : function() {
				if (this.currentFrame < this.totalFrames) {
					this.currentFrame++;
				} else {
					this.currentFrame = 0;
				}
				this.sourceX = this.sourceWidth * this.currentFrame;
			},

			//functions used by collision engine circular functions
			//function to test circles colissions
			centerX : function() {
				return this.x + (this.width / 2);
			},
			centerY : function() {
				return this.y + (this.height / 2);
			},
			halfWidth : function() {
				return this.width / 2;
			},
			halfHeight : function() {
				return this.height / 2;
			}
		};

		//===========================
		//message object to create screen messages
		var messageObject = {
			x : 0,
			y : 0,
			visible : false,
			text : "Message",
			font : "normal bold 30px Helvetica",
			fillStyle : "red",
			textBaseline : "top"
		};

		//============================================================================
		//--- MAIN PROGRAM ---
		/*
		* Use globals variables
		* An array is used to represent objects
		* An array is used to represent images
		*
		* Key events are mapped and assigned flags
		* In the render function objects are drawn.
		*/
		//============================================================================
		//set de drawing context
		var canvas = document.querySelector("canvas");
		//comienzo deteccion de resolucion
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		//resize canvas screen
		if (w < 600) {
			canvas.width = w;
		} else {
			canvas.width = 600;
		}

		var ctx = canvas.getContext("2d");
		ctx.focus;
		//==============================================
		//Global objects
		//==============================================
		//must be global because they are used in PlayGame () function and loadLevel ()
		//to initialize the camera and the camera handling.
		var objectBackgroud;
		var objectStage;
		var objectCamera;
		var objectPlayer;
		var message = Object.create(messageObject);

		//global arrays
		//both must have the same amount,
		//array to save games attributes and characters, reflects an array object properties
		var sprites = [];
		//array to save images sprites
		var spritesImagenes = [];

		//flag for testing calculation addresses key pressed
		var moveUpFlag = false;
		var moveDownFlag = false;
		var moveRightFlag = false;
		var moveLeftFlag = false;
		var moveSpaceFlag = false;

		function mainProgram() {
			//==============================================
			//Events managers
			//==============================================
			var buttonUp = document.getElementById("BTN_UP");
			var buttonRight = document.getElementById("BTN_RIGHT");
			var buttonDown = document.getElementById("BTN_DOWN");
			var buttonLeft = document.getElementById("BTN_LEFT");
			var buttonPush = document.getElementById("BTN_PUSH");

			//if is a mobile able touch
			//optimize the backgroud for mobiles
			if (Modernizr.touch) {
				//background is not rendered
				OBJ_BEGIN_RENDER=1;				
				//disable touch default
				document.body.addEventListener('touchmove', function(event) {
  					event.preventDefault();
				}, false);
				//touch events
				buttonUp.addEventListener("touchstart", buttonUpMouseDownHandler, false);
				buttonUp.addEventListener("touchend", buttonUpMouseUpHandler, false);
				buttonUp.addEventListener("touchcancel", buttonUpMouseUpHandler, false);

				buttonRight.addEventListener("touchstart", buttonRightMouseDownHandler, false);
				buttonRight.addEventListener("touchend", buttonRightMouseUpHandler, false);
				buttonRight.addEventListener("touchcancel", buttonRightMouseUpHandler, false);

				buttonDown.addEventListener("touchstart", buttonDownMouseDownHandler, false);
				buttonDown.addEventListener("touchend", buttonDownMouseUpHandler, false);
				buttonDown.addEventListener("touchcancel", buttonDownMouseUpHandler, false);
				
				buttonLeft.addEventListener("touchstart", buttonLeftMouseDownHandler, false);
				buttonLeft.addEventListener("touchend", buttonLeftMouseUpHandler, false);
				buttonLeft.addEventListener("touchcancel", buttonLeftMouseUpHandler, false);
				
				
				buttonPush.addEventListener("touchstart", buttonPushMouseDownHandler, false);
				buttonPush.addEventListener("touchend", buttonPushMouseUpHandler, false);
				buttonPush.addEventListener("touchcancel", buttonPushMouseUpHandler, false);

			} else {
				document.getElementById("tableControls").disabled=true;
//				var controls=document.getElementById("tableControls").disabled=true;
//				controls.setAttribute("disabled","true");
				//if is a Desktop able keys
				window.addEventListener("keydown", keyDownHandler, false);
				window.addEventListener("keyup", keyUpHandler, false);

				//mouse event managers
				buttonUp.addEventListener("mousedown", buttonUpMouseDownHandler, false);
				buttonUp.addEventListener("mouseup", buttonUpMouseUpHandler, false);

				buttonRight.addEventListener("mousedown", buttonRightMouseDownHandler, false);
				buttonRight.addEventListener("mouseup", buttonRightMouseUpHandler, false);

				buttonDown.addEventListener("mousedown", buttonDownMouseDownHandler, false);
				buttonDown.addEventListener("mouseup", buttonDownMouseUpHandler, false);

				buttonLeft.addEventListener("mousedown", buttonLeftMouseDownHandler, false);
				buttonLeft.addEventListener("mouseup", buttonLeftMouseUpHandler, false);

				buttonPush.addEventListener("mousedown", buttonPushMouseDownHandler, false);
				buttonPush.addEventListener("mouseup", buttonPushMouseUpHandler, false);

			}

			//===============================================================
			loadLevel(1);
			update();
		}//end mainProgram

		//===============================================================
		// END MAIN PROGRAM
		//===============================================================

		//============================================================================
		//Events handlers
		//============================================================================
		function loadHandler() {
			//just update has loaded image
			update();
		}//end loadHandler

		function keyDownHandler(evento) {
			switch(evento.keyCode) {
				case KEY_UP:
					moveUpFlag = true;
					break;
				case KEY_RIGHT:
					moveRightFlag = true;
					break;
				case KEY_DOWN:
					moveDownFlag = true;
					break;
				case KEY_LEFT:
					moveLeftFlag = true;
					break;
				case KEY_SPACE:
					moveSpaceFlag = true;
					break;
			}
		}//end eyDownHandler

		function keyUpHandler(evento) {
			switch(evento.keyCode) {
				case KEY_UP:
					moveUpFlag = false;
					break;
				case KEY_RIGHT:
					moveRightFlag = false;
					break;
				case KEY_DOWN:
					moveDownFlag = false;
					break;
				case KEY_LEFT:
					moveLeftFlag = false;
					break;
				case KEY_SPACE:
					moveSpaceFlag = false;
					imagen = new Image();
					//just load a new frame when the space key is pressed
					imagen.src = PATH_IMAGES + IMAGE_PLAYER_TYPE;
					spritesImagenes[OBJ_PLAYER_IDX] = imagen;
					break;
			}
		}//end keyUpHandler(evento)

		function buttonUpMouseDownHandler(evento) {
			moveUpFlag = true;
		}

		function buttonUpMouseUpHandler(evento) {
			moveUpFlag = false;
		}

		function buttonRightMouseDownHandler(evento) {
			moveRightFlag = true;
		}

		function buttonRightMouseUpHandler(evento) {
			moveRightFlag = false;
		}

		function buttonDownMouseDownHandler(evento) {
			moveDownFlag = true;
		}

		function buttonDownMouseUpHandler(evento) {
			moveDownFlag = false;
		}

		function buttonLeftMouseDownHandler(evento) {
			moveLeftFlag = true;
		}

		function buttonLeftMouseUpHandler(evento) {
			moveLeftFlag = false;
		}

		function buttonPushMouseDownHandler(evento) {
			moveSpaceFlag = true;
		}

		function buttonPushMouseUpHandler(evento) {
			moveSpaceFlag = false;
			imagen = new Image();
			//just load a new frame when the space key is pressed
			imagen.src = PATH_IMAGES + IMAGE_PLAYER_TYPE;
			spritesImagenes[OBJ_PLAYER_IDX] = imagen;
		}

		function update() {
			requestAnimFrame(update, canvas);
			//The animation loop
			//			requestAnimationFrame(update, canvas);
			//Change what the game is doing based on the game state
			switch(gameState) {
				case LOADING_STATE:
					break;
				case PLAYING_STATE:
					PlayGame();
					break;
				case PAUSE_STATE:
					console.log("PAUSE");
					break;
				case OVER_STATE:
					EndGame(objectPlayer);
					break;
			}
			//Render the game
			render();
		}//end update()

		//============================================================================
		function render(event) {
			//clear canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.translate(-objectCamera.x, -objectCamera.y);
			if (sprites.length !== 0) {
				for (var i = OBJ_BEGIN_RENDER; i < sprites.length; i++) {
					var sprite = sprites[i];
					var imagen = spritesImagenes[i];
					if (sprite.visible) {
						//first,save the canvas's content before clean
						ctx.save();
						//cavas rotate
						ctx.translate(Math.floor(sprite.x + (sprite.width / 2)), Math.floor(sprite.y + (sprite.height / 2)));
						ctx.rotate(sprite.rotacion * (Math.PI / 180));
						ctx.drawImage(imagen, sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight, Math.floor(-sprite.width / 2), Math.floor(-sprite.height / 2), sprite.width, sprite.height);
						//set again the canvas's position
						ctx.restore();
					}
				}
			}
			//if message is visible print text
			if (message.visible) {
				ctx.font = message.font;
				ctx.fillStyle = message.fillStyle;
				ctx.textBaseline = message.textBaseline;
				ctx.fillText(message.text, objectPlayer.x, objectPlayer.y);
			}
			ctx.restore();
		}//end render(event)

		//=============================================================================
		//Load a new game level before play
		//=============================================================================
		function loadLevel(levelNumber) {
			//========================================================
			//Initialization of objects
			//========================================================
			//===================stage objects          ==============
			//The object is created with the data for the background image
			//Camera technique, based on Foundation Game Design with HTML5 and JavaScript
			objectBackgroud = Object.create(spriteObject);
			objectBackgroud.sourceX = 0;
			objectBackgroud.sourceY = 64;
			objectBackgroud.sourceWidth = 1600;
			objectBackgroud.sourceHeight = 1600;
			objectBackgroud.x = 0;
			objectBackgroud.y = 0;
			objectBackgroud.visible = true;
			objectBackgroud.width = 1600;
			objectBackgroud.height = 1600;
			objectBackgroud.type = STAGE_TYPE;
			sprites.push(objectBackgroud);

			objectStage = {
				x : 0,
				y : 0,
				width : objectBackgroud.width,
				height : objectBackgroud.height
			};
			//This object must follow to the player
			objectCamera = {
				x : 0,
				y : 0,
				width : canvas.width,
				height : canvas.height
			};
			//======================================================================
			//player object, this object will moved with keys
			objectPlayer = Object.create(spriteObject);
			objectPlayer.x = (objectStage.x + objectStage.width / 2) - objectPlayer.width / 2;
			objectPlayer.y = (objectStage.y + objectStage.height / 2) - objectPlayer.height / 2;
			objectPlayer.type = PLAYER_TYPE;
			//set player's size
			objectPlayer.sourceWidth = WIDTH_PLAYER;
			objectPlayer.sourceHeight = HEIGHT_PLAYER;
			objectPlayer.width = WIDTH_PLAYER;
			objectPlayer.height = HEIGHT_PLAYER;
			objectPlayer.strength = 100;
			sprites.push(objectPlayer);
			//==================load images  ========
			//Backgroung image
			imagen = new Image();
			imagen.src = PATH_IMAGES + levelNumber + "/" + IMAGE_BACKGROUND;
			imagen.addEventListener("load", loadHandler, false);
			spritesImagenes.push(imagen);
			//Player image
			imagen = new Image();
			imagen.src = PATH_IMAGES + IMAGE_PLAYER_TYPE;
			imagen.addEventListener("load", loadHandler, false);
			spritesImagenes.push(imagen);
			//=============================================================
			switch(levelNumber) {
				case 1:
					//===============================================================
					//load characters and assets
					createCharacters(BUG_TYPE1, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE2, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE1, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE2, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(BUG_TYPE3, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(POWER_TERERE, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(POWER_TERERE, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					createCharacters(POWER_ARMOR, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					//					createCharacters(POWER_SPEED, Math.floor(Math.random() * objectStage.width), Math.floor(Math.random() * objectStage.height));
					//======================================================================
					break;
				case 2:
					break;
			}//
		}//end loadLevel(levelNumber)

		//=============================================================================
		//Create games's characters within screen
		//Used by loadLevel function
		//=============================================================================
		function createCharacters(characterToCreate, xPos, yPos) {
			var objectCollide;
			switch(characterToCreate) {
				case BUG_TYPE1:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = BUG_TYPE1;
					objectCollide.mobile = true;
					objectCollide.STEP_FORWARD = 0.1;
					objectCollide.strength = 1;
					sprites.push(objectCollide);
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_BUG_TYPE1;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					counterEnemies++;
					break;
				case BUG_TYPE2:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = BUG_TYPE2;
					objectCollide.mobile = true;
					objectCollide.STEP_FORWARD = 0.3;
					objectCollide.strength = 2;
					sprites.push(objectCollide);
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_BUG_TYPE2;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					counterEnemies++;
					break;
				case BUG_TYPE3:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = BUG_TYPE3;
					objectCollide.mobile = true;
					objectCollide.STEP_FORWARD = 0.5;
					objectCollide.strength = 3;
					sprites.push(objectCollide);
					counterEnemies++;
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_BUG_TYPE3;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					break;
				case POWER_TERERE:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = POWER_TERERE;
					objectCollide.mobile = false;
					objectCollide.strength = 10;
					sprites.push(objectCollide);
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_POWER_TERERE;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					break;
				case POWER_ARMOR:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = POWER_ARMOR;
					objectCollide.mobile = false;
					objectCollide.strength = 20;
					sprites.push(objectCollide);
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_POWER_ARMOR;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					break;
				case POWER_SPEED:
					objectCollide = Object.create(spriteObject);
					objectCollide.x = xPos;
					objectCollide.y = yPos;
					objectCollide.type = POWER_SPEED;
					objectCollide.mobile = true;
					objectCollide.STEP_FORWARD = 0.5;
					sprites.push(objectCollide);
					//=============================================================
					imagen = new Image();
					imagen.src = PATH_IMAGES + IMAGE_POWER_SPEED;
					imagen.addEventListener("load", loadHandler, false);
					spritesImagenes.push(imagen);
					break;
			}//end switch
		}//end of createCharacters

		//=============================================================================
		//PlayGame is used while the player is gaming
		//Used by update() function
		//=============================================================================
		function PlayGame() {
			//=============================================================
			//move the sprites on the screen
			MoveSprites();
			//rules used to collisions
			CollisionEngine();
			//print information in HTML5 document
			PrintInformation(objectPlayer);

			//=============================================================
			// Global variables to use this quick calculations performed on
			// location of the camera.
			// Move the object and keeps within the limits of the stage
			// the camera always follows the player object
			objectPlayer.x = Math.max(0, Math.min(objectPlayer.x + objectPlayer.vx, objectStage.width - objectPlayer.width));
			objectPlayer.y = Math.max(0, Math.min(objectPlayer.y + objectPlayer.vy, objectStage.height - objectPlayer.height));
			//Centra el objeto que sera movido por teclado al centro de la camara
			objectCamera.x = Math.floor(objectPlayer.x + (objectPlayer.width / 2) - (objectCamera.width / 2));
			objectCamera.y = Math.floor(objectPlayer.y + (objectPlayer.height / 2) - (objectCamera.height / 2));

			//Keeps the camera within the limits of the stage
			if (objectCamera.x < objectStage.x) {
				objectCamera.x = objectStage.x;
			}
			if (objectCamera.y < objectStage.y) {
				objectCamera.y = objectStage.y;
			}
			if (objectCamera.x + objectCamera.width > objectStage.x + objectStage.width) {
				objectCamera.x = objectStage.x + objectStage.width - objectCamera.width;
			}
			if (objectCamera.y + objectCamera.height > objectStage.height) {
				objectCamera.y = objectStage.height - objectCamera.height;
			}
			//==============================================
			//when the arrows keys are pressed, the flags are changed
			//it uses the global array directly to make changes. Example sprites[index].property
			if (moveUpFlag && !moveDownFlag) {
				//==============================
				//calculate the next step
				newXPlayer = sprites[OBJ_PLAYER_IDX].STEP_FORWARD * Math.cos(sprites[OBJ_PLAYER_IDX].rotacion * (Math.PI / 180));
				newYPlayer = sprites[OBJ_PLAYER_IDX].STEP_FORWARD * Math.sin(sprites[OBJ_PLAYER_IDX].rotacion * (Math.PI / 180));
				sprites[OBJ_PLAYER_IDX].x = sprites[OBJ_PLAYER_IDX].x + newXPlayer;
				sprites[OBJ_PLAYER_IDX].y = sprites[OBJ_PLAYER_IDX].y + newYPlayer;
				//change the player's animation frame'
				sprites[OBJ_PLAYER_IDX].nextFrame();
			}
			//==============================
			if (!moveUpFlag && moveDownFlag) {
				//==============================
				//calculate the next step
				newXPlayer = -sprites[OBJ_PLAYER_IDX].STEP_FORWARD * Math.cos(sprites[OBJ_PLAYER_IDX].rotacion * (Math.PI / 180));
				newYPlayer = -sprites[OBJ_PLAYER_IDX].STEP_FORWARD * Math.sin(sprites[OBJ_PLAYER_IDX].rotacion * (Math.PI / 180));
				sprites[OBJ_PLAYER_IDX].x = sprites[OBJ_PLAYER_IDX].x + newXPlayer;
				sprites[OBJ_PLAYER_IDX].y = sprites[OBJ_PLAYER_IDX].y + newYPlayer;
				//change the player's animation frame'
				sprites[OBJ_PLAYER_IDX].nextFrame();
				//==============================
			}
			//Left and right cursor keys change the angle of rotation
			if (moveRightFlag && !moveLeftFlag) {
				if (sprites[OBJ_PLAYER_IDX].rotacion < MAX_ANGLE) {
					sprites[OBJ_PLAYER_IDX].rotacion = sprites[OBJ_PLAYER_IDX].rotacion + STEP_ANGLE;
				} else {
					sprites[OBJ_PLAYER_IDX].rotacion = sprites[OBJ_PLAYER_IDX].rotacion - MAX_ANGLE;
				}
			}
			if (!moveRightFlag && moveLeftFlag) {
				if (sprites[OBJ_PLAYER_IDX].rotacion > MIN_ANGLE) {
					sprites[OBJ_PLAYER_IDX].rotacion = sprites[OBJ_PLAYER_IDX].rotacion - STEP_ANGLE;
				} else {
					sprites[OBJ_PLAYER_IDX].rotacion = MAX_ANGLE + sprites[OBJ_PLAYER_IDX].rotacion;
				}
			}
			//if space key is pressed, tatu shows the tongue
			if (moveSpaceFlag) {
				imagen = new Image();
				imagen.src = PATH_IMAGES + IMAGE_PLAYER_TONGUE_TYPE;
				spritesImagenes[OBJ_PLAYER_IDX] = imagen;
				render();
			}
		}//end PlayGame

		//=============================================================================
		//Move games's characters within screen
		//Used by PlayGame function
		//=============================================================================
		function MoveSprites() {
			var newXBug;
			var newYBug;
			//temporal object
			var spriteTemp;
			//if sprites is not empty and exist elements distinct of player and background
			// make movements on the screen
			if ((sprites.length !== 0) && (sprites.length > OBJ_PLAYER_IDX + 1)) {
				//from 2 position, sprites are located to the stage
				//all sprites can be mobile or immobile, this property is set to mobile property[true|false]
				for (var i = OBJ_PLAYER_IDX + 1; i < sprites.length; i++) {
					spriteTemp = sprites[i];
					//Two conditions, first the sprite must be visible, and second, must be mobile
					if (spriteTemp.visible) {
						if (spriteTemp.mobile) {
							newXBug = spriteTemp.STEP_FORWARD * Math.cos(spriteTemp.rotacion * (Math.PI / 180));
							newYBug = spriteTemp.STEP_FORWARD * Math.sin(spriteTemp.rotacion * (Math.PI / 180));
							spriteTemp.x = spriteTemp.x + newXBug;
							spriteTemp.y = spriteTemp.y + newYBug;
							//Keeps the camera within the limits of the stage
							if (spriteTemp.x < objectStage.x) {
								spriteTemp.x = objectStage.x;
								spriteTemp = InteligenciaBug(spriteTemp);
							}
							if (spriteTemp.y < objectStage.y) {
								spriteTemp.y = objectStage.y;
								spriteTemp = InteligenciaBug(spriteTemp);
							}
							if (spriteTemp.x + spriteTemp.width > objectStage.x + objectStage.width) {
								spriteTemp.x = objectStage.x + objectStage.width - spriteTemp.width;
								spriteTemp = InteligenciaBug(spriteTemp);
							}
							if (spriteTemp.y + spriteTemp.height > objectStage.height) {
								spriteTemp.y = objectStage.height - spriteTemp.height;
								spriteTemp = InteligenciaBug(spriteTemp);
							}
						}//sprite mobile
						//===================================================================
						//always calculate the animation frame
						spriteTemp.nextFrame();
						//===================================================================
					}//sprite.visible
					sprites[i] = spriteTemp;
				}//spritefor
			}//sprites.length
		}//end MoveSprites()

		//=============================================================================================
		function EndGame(objectToPrint) {
			message.visible = true;
			message.x = Math.floor(objectCamera.x - (objectCamera.width / 2));
			message.y = Math.floor(objectCamera.y - (objectCamera.height / 2));
			if (objectToPrint.score == counterEnemies) {
				message.text = "YOU WIN!!!!";
			}
			if (objectToPrint.strength == 0) {
				message.text = "GAME OVER";
			}
			//vacio
		}//EndGame

		//======================================================================
		//funciones utilizadas en el motor de colisiones
		//======================================================================

		//=============================================================================
		//CollisionEngine() is used to test contact between characters and assets
		//Used by PlayGame function
		//=============================================================================
		function CollisionEngine() {
			//sprites is a global array, the objects values are used directly
			if ((sprites.length !== 0) && (sprites.length > 2)) {
				for (var i = OBJ_PLAYER_IDX; i < sprites.length; i++) {
					//first test all visibles objects
					if (sprites[i].visible) {
						for (var j = OBJ_PLAYER_IDX; j < sprites.length; j++) {
							//compared himself avoids
							//i==is a index used to the first object compared
							//j==is a index used to the second object compared
							if (i != j) {
								if (sprites[j].visible) {
									//verify is a collission is detected
									var temporal=sprites[i];
									if (hitTestCircle(sprites[i], sprites[j])) {
										//=========================================================
										//===================== RULES OF COLLISIONS ===============
										//apply the rules to colliders PLAYER vs enemies
										if ((sprites[i].type == PLAYER_TYPE) && (sprites[j].type == BUG_TYPE1 || sprites[j].type == BUG_TYPE2 || sprites[j].type == BUG_TYPE3)) {
											if (moveSpaceFlag) {
												//rules when player attack
												DeleteBug(sprites[j], sprites, spritesImagenes[j], spritesImagenes);
												sprites[i].addScore();
												PrintInformation(sprites[i]);
												if (sprites[i].score == counterEnemies) {
													gameState = OVER_STATE;
												}
											} else {
												//apply the rules to colliders PLAYER vs enemies, player defeat
												blockCircle(sprites[i], sprites[j]);
												sprites[j] = InteligenciaBug(sprites[j]);
												sprites[i].takeStrength(sprites[j]);
												if (sprites[i].hasStrength() == 0) {
													gameState = OVER_STATE;
												}
											}
										}//
										//apply the rules to colliders enemies vs enemies
										//only block them
										if ((sprites[j].type == BUG_TYPE1 || sprites[j].type == BUG_TYPE2 || sprites[j].type == BUG_TYPE3) && (sprites[j].type == BUG_TYPE1 || sprites[j].type == BUG_TYPE2 || sprites[j].type == BUG_TYPE3)) {
											blockCircle(sprites[i], sprites[j]);
										}//

										//apply the rules to colliders PLAYER vs assets(powers)
										if ((sprites[i].type == PLAYER_TYPE) && (sprites[j].type == POWER_TERERE)) {
											sprites[i].addStrength(sprites[j]);
											sprites[i].addEnergy();
											DeleteBug(sprites[j], sprites, spritesImagenes[j], spritesImagenes);
										}//
										if ((sprites[i].type == PLAYER_TYPE) && (sprites[j].type == POWER_ARMOR)) {
											sprites[i].addStrength(sprites[j]);
											sprites[i].addArmor();
											DeleteBug(sprites[j], sprites, spritesImagenes[j], spritesImagenes);
										}//
										if ((sprites[i].type == PLAYER_TYPE) && (sprites[j].type == POWER_SPEED)) {
											sprites[i].addSpeed();
											DeleteBug(sprites[j], sprites, spritesImagenes[j], spritesImagenes);
										}//

										//================= END RULES OF COLLISIONS ===============
									}//end of hitTestCircle
								}//sprites[j].visible
							}//
						}//end internal for j=
					}//sprites[i].visible
				}//end external for i=
			}
		}//end CollisionEngine()

		//=============================================================================
		//hitTestCircle(c1, c2) is used to test contact between two circles
		//based in Foundation Game Design with HTML5 and JavaScript
		//Used by CollisionEngine function
		//=============================================================================
		function hitTestCircle(c1, c2) {
			//Calculate the vector between the circles' center points
			var vx = c1.centerX() - c2.centerX();
			var vy = c1.centerY() - c2.centerY();
			//Find the distance between the circles by calculating
			//the vector's magnitude (how long the vector is)
			var magnitude = Math.sqrt(vx * vx + vy * vy);
			//Add together the circles' total radii
			var totalRadii = c1.halfWidth() + c2.halfWidth();
			//Set hit to true if the distance between the circles is
			//less than their totalRadii
			var hit = magnitude < totalRadii;
			return hit;
		}//function hitTestCircle(c1, c2)

		function hitTestPoint(pointX, pointY, sprite) {
			var hit = false;
			if (pointX > sprite.left() && pointX < sprite.right() && pointY > sprite.top() && pointY < sprite.bottom()) {
				hit = true;
			}
			return hit;
		}//end hitTestPoint(pointX, pointY, sprite)

		//=============================================================================
		//blockCircle(c1, c2) is used to block contact between two circles
		//based in Foundation Game Design with HTML5 and JavaScript
		//Used by CollisionEngine function
		//=============================================================================
		function blockCircle(c1, c2) {
			//Calculate the vector between the circles' center points
			var vx = c1.centerX() - c2.centerX();
			var vy = c1.centerY() - c2.centerY();
			//Find the distance between the circles by calculating
			//the vector's magnitude (how long the vector is)
			var magnitude = Math.sqrt(vx * vx + vy * vy);
			//Add together the circles' total radii
			var totalRadii = c1.halfWidth() + c2.halfWidth();
			//Figure out if there's a collision
			if (magnitude < totalRadii) {
				//Yes, a collision is happening.
				//Find the amount of overlap between the circles
				var overlap = totalRadii - magnitude;
				//Normalize the vector.
				//These numbers tell us the direction of the collision
				dx = vx / magnitude;
				dy = vy / magnitude;
				//Move circle 1 out of the collision by multiplying
				//the overlap with the normalized vector and add it to circle 1's position
				c1.x += overlap * dx;
				c1.y += overlap * dy;
			}
		}

		//=============================================================================
		//InteligenciaBug(spriteInteligente) is used to make objects decisions
		//return a value, that value represents one decision.
		//In this case, only change the direction
		//Used by CollisionEngine function
		//=============================================================================
		function InteligenciaBug(spriteInteligente) {
			spriteInteligente.rotacion = Math.floor(Math.random() * 360);
			return spriteInteligente;
		}//=InteligenciaBug

		//=============================================================================
		//DeleteBug(objectToRemove, array, imageToRemove, arrayImages) is used to delete
		//one objecto from globals arrays
		//Used by CollisionEngine function
		//=============================================================================
		function DeleteBug(objectToRemove, array, imageToRemove, arrayImages) {
			var i = array.indexOf(objectToRemove);
			var j = array.indexOf(arrayImages);
			if (i != -1) {
				array.splice(i, 1);
			}
			if (j != -1) {
				arrayImages.splice(j, 1);
			}
			render();
		}

		//=============================================================================
		//		function PrintInformation(objectToPrint) is used to print information in
		// HTML5 document
		//Used by PlayGame function
		//=============================================================================
		function PrintInformation(objectToPrint) {
			var scorePrint = document.getElementById("score");
			var strengthPrint = document.getElementById("strength");
			var totalPrint = document.getElementById("totalBug");
			var armorPrint = document.getElementById("armor");
			var speedPrint = document.getElementById("speed");
			var energyPrint = document.getElementById("energy");
			scorePrint.innerHTML = objectToPrint.score;
			strengthPrint.innerHTML = objectToPrint.strength;
			totalPrint.innerHTML = counterEnemies;
			armorPrint.innerHTML = objectToPrint.armor;
			speedPrint.innerHTML = objectToPrint.STEP_FORWARD;
			energyPrint.innerHTML = objectToPrint.energy;
		}//AddScore

		//=======================================================
	}());
//end of file
