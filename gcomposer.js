let gcomposer=(function(global,factory){
	settings=[{}];
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	};
	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		let elmnt=g(settings.draggable).getEl();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	};
	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	};
	return {
		config:function(defaults){
			if(defaults.element==undefined){
				console.log("Defina el atributo element!");
			}
			if(defaults.draggable==undefined){
				console.log("Defina el atributo draggable!");
			}
			if(defaults.parent==undefined){
				console.log("Defina el atributo parent!");
			}
			if(defaults.draggable) {
				/* if present, the header is where you move the DIV from:*/
				g(settings.draggable).on("mousedown", dragMouseDown);
			}
			settings=defaults;
			return this;
		},
		modal:function(defaults){
			let ancho,alto,plantilla,accion,titulo;
			let wincontent=genrl.getCreate("section");
			let modalcard=genrl.getCreate("div");
			let modalcardhead=genrl.getCreate("div");
			let modalcardbody=genrl.getCreate("div");
			let modalcardfoot=genrl.getCreate("div");
			let content_int=genrl.getCreate("div");
			let botcerrar=genrl.getCreate("button");
			let wintitle=genrl.getCreate("p");
			let randomn1_div=Math.floor((Math.random() * 100) + 2);
			let randomn2_div=Math.floor((Math.random() * 100) + 4);
			let result=randomn1_div * randomn2_div;
			let ajaxapi=genrl.ajaxapi;

			if(defaults.width==undefined) {
				ancho="1024px";
			}
			else{
				ancho=defaults.width;
			}
			if(defaults.height==undefined) {
				alto="1024px";
			}
			else{
				alto=defaults.height;
			}
			if(defaults.template==undefined) {
				console.log("Defina el atributo template!");
			}
			else{
				plantilla=defaults.template;
			}
			if(defaults.title==undefined) {
				console.log("Defina el atributo title!");
			}
			else{
				titulo=defaults.title;
			}
			//Dibujar la ventana
			wincontent.id="wincont_" + result;
			wincontent.style="height:" + alto + ";width:" + ancho + ";";
			modalcard.id="modalcard_" + result;
			modalcardbody.style="background:#eaeaea;";
			modalcardbody.id="modalcardhead_" + result;
			modalcardhead.id="modalcardbody_" + result;
			modalcardhead.style="background:#eaeaea;";
			modalcardfoot.id="modalcardfoot_" + result;
			wincontent.classList.add("modal");
			wincontent.classList.add("is-active");
			modalcardhead.classList.add("modal-card-head");
			modalcardbody.classList.add("modal-card-body");
			modalcardfoot.classList.add("modal-card-foot");
			wintitle.classList.add("modal-card-title");
			botcerrar.classList.add("delete");
			botcerrar.onclick=function(){
				ele=wincontent.parentNode;
				wincontent.remove(ele);
			}
			wincontent.name="wincont_" + result;
			wintitle.innerHTML=titulo;
			wintitle.id="titulo_" + result;
			botcerrarid="botcerrar_" + result;
			botcerrar.id=botcerrarid;
			botcerrar.name=botcerrarid;
			botcerrar.innerHTML="X";
			modalcardhead.append(wintitle);
			modalcardhead.append(botcerrar);
			modalcard.append(modalcardhead);
			modalcard.append(modalcardbody);
			modalcard.append(modalcardfoot);
			wincontent.append(modalcard)
			g("#" + settings.parent).append(wincontent);
			if(plantilla!=undefined){
				if(plantilla!=""){
					let ajaxapi=genrl.ajaxapi;
					ajaxapi
					.get(plantilla)
					.then(function(data){
						content_int.innerHTML=data;
						modalcardbody.append(content_int);
						if(defaults.action==undefined) {
							console.log("Defina el atributo action!");
						}
						else{
							if(typeof defaults.action==='function'){
								callback=defaults.action;
								callback(data);
							}
							else{
								console.log("El atributo action debe ser una función");
							}
						}
					})
				}
			}
			return this;
		},
		destroywin:function(elmnt){
			//eliminar Iconos
			ele=elmnt.parentNode;
			elmnt.remove(ele);
			return this;
		},
		minwin:function(id){
			//Habilitar un system tray o lista de ventanas
			return this;
		},
		maxwin:function(id){
			//Cambiar css de la ventana - calcular dimensiones de la pantalla del navegador
			return this;
		},
		resize:function(id){

			return this;
		}
	}
}(window));
