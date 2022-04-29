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
					let randomn1=Math.floor((Math.random() * 100) + 1);
					let barra=genrl.getCreate("div");
					let randomn2=Math.floor((Math.random() * 100) + 15);
					let result=randomn1 * randomn2;
					barra.id="barratop" + result;
					barra.name="barratop" + result;
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
					if(position=='top'){
						barra.style="min-height:30px;width:100%;background:" + color + ";position:absolute;float:none;display:block;top:0px;left:0px;color:white;padding-bottom:8px;";
					}
					else{
						barra.style="min-height:30px;width:100%;background:" + color + ";position:absolute;float:none;display:block;bottom:0px;left:0px;color:white;padding-bottom:8px;";
					}
					g("#" + settings.parent).append(barra);
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
			return this;
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
			let randomn1_div=Math.floor((Math.random() * 100) + 16);
			let randomn2_div=Math.floor((Math.random() * 100) + 18);
			result=randomn1_div * randomn2_div;

			textcontent.id="texto_" + result;
			textcontent.name="texto_" + result;
			textcontent.style="position:relative;float:left;display:inline-block;height:30px;width:auto;padding-left:5px;padding-top:5px;margin-right:5px;";

			let randomn1_span=Math.floor((Math.random() * 100) + 31);
			let randomn2_span=Math.floor((Math.random() * 100) + 33);
			result=randomn1_span * randomn2_span;

			spantext.id="texto_span_" + result;
			spantext.name="texto_span_" + result;
			spantext.style="position:relative;float:left;display:inline-block;height:30px;width:auto;margin-left:1px;";
			spantext.innerHTML=defaults.texto;
			textcontent.append(spantext);
			g("#" + defaults.idbarra).append(textcontent);
			if(defaults.action==undefined){
				genrl.log("Defina argumento action");
			}
			else{
				if(typeof defaults.action==='function'){
					g("#" + textcontent.id).click(defaults.action);
					g("#" + textcontent.id).css({
						'cursor':'pointer',
						'margin-top':'1.7%',
					});
				}
			}
			return this;
		},
		appendicon:function(defaults){
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
					let iconcontent=genrl.getCreate("div");
					let spanicon=genrl.getCreate("span");
					let imgicon=genrl.getCreate("img");

					let randomn1_div=Math.floor((Math.random() * 100) + 2);
					let randomn2_div=Math.floor((Math.random() * 100) + 4);
					let result=randomn1_div * randomn2_div;
					iconcontent.id="iconcont_" + result;
					iconcontent.name="iconcont_" + result;
					iconcontent.style="position:relative;float:left;display:inline-block;height:auto;width:auto;margin-left:15px;";

					let randomn1_img=Math.floor((Math.random() * 100) + 16);
					let randomn2_img=Math.floor((Math.random() * 100) + 18);
					result=randomn1_img * randomn2_img;
					imgicon.id="imgcont_" +result;
					imgicon.name="imgcont_" +result;
					imgicon.style="position:relative;float:left;display:inline-block;height:auto;width:auto;margin-left:15px;";
					imgicon.src=defaults.icon;

					let randomn1_span=Math.floor((Math.random() * 100) + 31);
					let randomn2_span=Math.floor((Math.random() * 100) + 33);
					result=randomn1_span * randomn2_span;

					spanicon.id="spancont_" +result;
					spanicon.name="spancont_" +result;
					spanicon.style="position:relative;float:left;display:inline-block;height:auto;width:30px;margin-left:15px;";
					spanicon.innerHTML=defaults.caption;
					iconcontent.append(imgicon);
					iconcontent.append(spanicon);
					g("#" + defaults.idbarra).append(iconcontent);
					g("#" + iconcontent.id).click(defaults.action);
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

