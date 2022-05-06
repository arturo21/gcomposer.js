let settings=[{}];
let bars=[{}];
let composerbar=(function(global,factory){
	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	};
	return {
		config:function(defaults){
			if(!defaults.width) {
				console.log("Defina el atributo Ancho!");
			}
			if(!defaults.height) {
				console.log("Defina el atributo Alto!");
			}
			if(!defaults.parent) {
				console.log("Defina el atributo Padre!");
			}
			settings=defaults;
			return this;
		},
		appendbar:function(position){
			if(position!=''){
				//top or bottom
				if(position=='bottom' || position=='top'){
					//dibujar barra
					let barra=genrl.getCreate("div");
					let result=genrl.now();
					barra.id="barratop" + result;
					barra.name="barratop" + result;
					g("#" + settings.parent).append(barra);
					if(settings.color!=undefined){
						if(settings.color!=''){
							color=settings.color;
						}
						else{
							color="#4e4e4e";
						}
					}
					else{
						color="#4e4e4e";
					}
					g("#" + barra.id).addClass("navbar");
					let defaults={
						height:settings.height,
						width:settings.width,
						pos:position,
						id:barra.id
					};
					bars.push(defaults);
					return defaults;
				}
				else{
					console.log("Defina una posición válida!");
				}
			}
			else{
				console.log("Defina el atributo position!");
			}
		},
		appendtext:function(defaults){
			if(defaults.texto==undefined){
				genrl.log("Defina el argumento texto");
			}
			if(defaults.idbarra==undefined){
				genrl.log("Defina el argumento idbarra");
			}
			let textcontent=genrl.getCreate("div");
			let spantext=genrl.getCreate("span");
			result=genrl.now();

			textcontent.id="texto_" + result;
			textcontent.name="texto_" + result;
			result=genrl.now();

			spantext.id="texto_span_" + result;
			spantext.name="texto_span_" + result;
			if(defaults.texto!=''){
				spantext.innerHTML=defaults.texto;
			}
			textcontent.append(spantext);
			g("#" + defaults.idbarra).append(textcontent);
			g("#" + textcontent.id).addClass("mx-4");
			if(defaults.action==undefined){
				genrl.log("Defina argumento action");
			}
			else{
				if(typeof defaults.action==='function'){
					g("#" + textcontent.id).click(defaults.action);
				}
			}
			return this;
		},
		appendicon:function(defaults){
			let iconcontent;
			let imgicon;
			let spanicon;
			let itagicon;
			let result;

			if(defaults.idicon==undefined){
				genrl.log("Defina el argumento idicon")
			}
			if(defaults.icon==undefined){
				genrl.log("Defina el archivo icon")
			}
			//parent
			if(defaults.idbarra==undefined){
				genrl.log("Defina el argumento idbarra")
			}
			//nombre a mostrar en la barra
			if(defaults.caption==undefined){
				genrl.log("Defina el argumento caption")
			}
			if(defaults.action==undefined){
				genrl.log("Defina el argumento action")
			}
			else{
				if(typeof defaults.action==='function'){
					//Creates an element and attach it to parent
					//attach event onclick function
					genrl.create("span",function(elem){
						result=genrl.now();
						elem.id="iconcont_" + result;
						elem.name="iconcont_" + result;
						iconcontent=elem;
					});
					genrl.create("span",function(elem){
						result=genrl.now();
						elem.id="spanicon_" + result;
						elem.name="spanicon_" + result;
						spanicon=elem;
					});
					genrl.create("span",function(elem){
						result=genrl.now();
						elem.id="spantext_" + result;
						elem.name="spantext_" + result;
						spantext=elem;
					});
					genrl.create("i",function(elem){
						result=genrl.now();
						elem.id="iconi_" + result;
						elem.name="iconi_" + result;
						itagicon=elem;
					});

					spanicon.append(itagicon);
					iconcontent.append(spanicon);
					iconcontent.append(spantext);
					g("#" + defaults.idbarra).append(iconcontent);
					g("#" + iconcontent.id).click(defaults.action);
					g("#" + iconcontent.id).addClass("icon-text");
					g("#" + iconcontent.id).addClass("mx-4");
					g("#" + spanicon.id).addClass("icon");
					g("#" + itagicon.id).addClass("material-icons");
					g("#" + itagicon.id).text(defaults.icon);
					if(defaults.caption!=''){
						g("#" + spantext.id).text(defaults.caption);
					}
					g("#" + iconcontent.id).css({
						'cursor':'pointer'
					});
				}
				else{
					genrl.log("action debe ser del tipo function");
				}
			}
			//agregar Iconos
			return this;
		},
		destroybar:function(name){
			if(name!=''){
				g("#" + name).remove();
			}
			return this;
		},
		destroyicon:function(id){
			//eliminar Iconos
			if(name!=''){
				g("#" + name).remove();
			}
			return this;
		},
		destroytext:function(id){
			//eliminar Texto
			if(name!=''){
				g("#" + name).remove();
			}
			return this;
		},
	}
}(window));

