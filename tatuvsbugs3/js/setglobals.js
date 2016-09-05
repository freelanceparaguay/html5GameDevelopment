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
		var IMAGE_BACKGROUND = "1.png";
		const IMAGE_PLAYER_TYPE = "frameTatu.png";
		const IMAGE_PLAYER_TONGUE_TYPE = "frameTatuTonge2.png";
		const IMAGE_BUG_TYPE1 = "frameAnt.png";
		const IMAGE_BUG_TYPE2 = "frameBeetle.png";
		const IMAGE_BUG_TYPE3 = "frameFly.png";
		const IMAGE_POWER_TERERE = "frameTere.png";
		const IMAGE_POWER_ARMOR = "frameArmor.png";
		const IMAGE_POWER_SPEED = "frameSpeed.png";
		const IMAGE_POWER_COIN = "frameCoin.png";
		const IMAGE_WALL_TYPE = "frameWall.png";
		//==============================================
		//Game states and variables related to the stage
		//==============================================
		var LOADING_STATE = 0;
		var LOADING_MAP= 1;
		var PLAYING_STATE = 2;
		var OVER_STATE = 3;
		var PAUSE_STATE = 4;
		var gameState = LOADING_MAP;
		var levelActual = 1;		
		var counterEnemies = 0;
		var score = 0;
		var TotalEnemies = 0;
		var TOTAL_LEVELS=2;
		var removeMessageTime=3000;
		var assetsLoaded;		
		var assetsLoadedTotal;
		//==============================================
		//Consts relatives to maps
		//==============================================
		//var ROWS;
		//var COLS;
		
		
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
		const POWER_COIN = 9;
		const WALL_TYPE = 10;

		//flag for testing calculation addresses key pressed
		var moveUpFlag = false;
		var moveDownFlag = false;
		var moveRightFlag = false;
		var moveLeftFlag = false;
		var moveSpaceFlag = false;

