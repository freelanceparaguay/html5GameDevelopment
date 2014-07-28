(function(){
			/**
			 * @author Juan Carlos Miranda 09/2013
			 * El script recibe los eventos y muestra en pantalla mensajes sobre
			 * el evento registrado.
			 * Se incluye el fuente en el mismo archivo para facilitar la descarga.
			 *  */
			//cargador de eventos

			window.onresize=function(){
				/*Asigna los eventos*/
				document.onkeyup = printScreen;
				document.onkeypress = printScreen;
				document.onkeydown = printScreen;
				document.onmousedown = printScreen;
				document.onmouseup = printScreen;
				document.onmousemove = printScreen;
				document.ontouchstart = printScreen;
				document.ontouchmove = printScreen;
				document.ontouchend = printScreen;
				takeScreenSize();
			};
			
			window.onload = function() {
				/*Asigna los eventos*/
				document.onkeyup = printScreen;
				document.onkeypress = printScreen;
				document.onkeydown = printScreen;
				document.onmousedown = printScreen;
				document.onmouseup = printScreen;
				document.onmousemove = printScreen;
				document.ontouchstart = printScreen;
				document.ontouchmove = printScreen;
				document.ontouchend = printScreen;
				takeScreenSize();
			};
			//muestra informacion seleccionando los tipos de eventos
			function printScreen(elEvento) {
				var evento = window.event || elEvento;
				evento.preventDefault();
				
				var userAgent1=document.getElementById("userAgent1");
				var xSize=document.getElementById("xSize");				
				var xSize=document.getElementById("ySize");				
				var eventType=document.getElementById("eventType");
				var eventKeyCode=document.getElementById("eventKeyCode");				
				var mouseClicks=document.getElementById("mouseClicks");	
				var touchClicks=document.getElementById("touchClicks");

				var eventCharCode=document.getElementById("eventCharCode");
				var eventCharPulsed=document.getElementById("eventCharPulsed");
				
				var eventAltKey=document.getElementById("eventAltKey");
				var eventShiftKey=document.getElementById("eventShiftKey");
				var eventCtrlKey=document.getElementById("eventCtrlKey");



				//navigator
				userAgent1.innerHTML=navigator.userAgent;
				//all events
				eventType.innerHTML=evento.type;
				
				//keys events
				eventKeyCode.innerHTML=evento.keyCode;
				eventCharCode.innerHTML=evento.charCode;
				eventCharPulsed.innerHTML=String.fromCharCode(evento.charCode);
				
				eventAltKey.innerHTML=evento.altKey;
				eventShiftKey.innerHTML=evento.shiftKey;
				eventCtrlKey.innerHTML=evento.ctrlKey;


	
				
				switch (evento.type) {
					case "mouseup":
						break;
					case "mousedown":
						mouseClicks.innerHTML++;
						axisX.innerHTML = evento.clientX;
						axisY.innerHTML = evento.clientY;
						break;
					case "mousemove":
						axisX.innerHTML = evento.clientX;
						axisY.innerHTML = evento.clientY;
						break;
					case "touchstart":
						touchClicks.innerHTML++;
						axisX.innerHTML = evento.clientX;
						axisY.innerHTML = evento.clientY;
						break;
					case "touchend":
						axisX.innerHTML = evento.clientX;
						axisY.innerHTML = evento.clientY;
						break;
					case "touchmove":
						axisX.innerHTML = evento.clientX;
						axisY.innerHTML = evento.clientY;
						break;
					default:
						break;
				}


			}

			function takeScreenSize() {
				var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				xSize.innerHTML = w + "*" + h;
			}




}());