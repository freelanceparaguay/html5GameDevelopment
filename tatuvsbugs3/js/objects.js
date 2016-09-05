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
			STEP_FORWARD : 0.5,

			//=====LIVES ATTRIBUTES===========
			//ENERGY, LIVES, STRENGTH, ARMOR
			enemiesDefeat: 0,
			score : 0,
			strength : 1,
			armor : 0,
			energy : 0,
			//is a mobile object? or is fixed within screen?
			mobile : true,

			addEnemiesDefeat : function() {
				this.enemiesDefeat++;
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

