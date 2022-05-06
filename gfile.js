let gfile=(function(){
	let files=[{}];
	let filetypes=[{}];
	let dirs=[{}];	
	let rootfolder="";
	let tabpadre;
	let divpadrelist;
	return{
		setRootFolder:function(folder){
			//set root folder to know where to look at
			if(folder!=''){
				rootfolder=folder;
			}
			else{
				genrl.error("Falta definir root folder");
			}
		},
		makeFilesTree:function(){
			let strdata;
			let ajx=genrl.ajaxapi;
			ajx
			.post("/api/files/v1/makeFilesTree",strdata)
			.then(function(data){
				if(data=="VALID_SESSION"){
					genrl.lhref(callbacklogin);
				}
			})
			.catch(function(e){	
				SC.log("ERROR:" + e);
			});
		},
		//archivos
		appendFile:function(){
			let cantarchivos;
			let ajx=genrl.ajaxapi;
			//argumento 0 el id de la tabla parent
			//del 1 en adelante los archivos
			cantarchivos=arguments.length;
			//usar librería DND
		},
		makeFilesPanel:function(settings){
			let zoneid_div=genrl.now();
			let ajx=genrl.ajaxapi;
			let primertbody;
			let primerthead;
			let primertr;

			let nombreth;
			let tamanoth;
			let fechath;

			let strdata;
			genrl.create("table",function(elem){
				elem.id= "draggable-tabpadre-file-" + zoneid_div;
				elem.name= "draggable-tabpadre-file-" + zoneid_div;
				tabpadre=elem;
			});
			genrl.create("thead",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-theadpadre-file-" + zoneid_div;
				elem.name= "draggable-theadpadre-file-" + zoneid_div;
				primerthead=elem;
			});
			genrl.create("tbody",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-tbodypadre-file-" + zoneid_div;
				elem.name= "draggable-tbodypadre-file-" + zoneid_div;
				primertbody=elem;
			});
			genrl.create("th",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-thnombrepadre-file-" + zoneid_div;
				elem.name= "draggable-thnombrepadre-file-" + zoneid_div;
				nombreth=elem;
			});
			genrl.create("th",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-thtamanopadre-file-" + zoneid_div;
				elem.name= "draggable-thtamanopadre-file-" + zoneid_div;
				tamanoth=elem;
			});
			genrl.create("th",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-thfechapadre-file-" + zoneid_div;
				elem.name= "draggable-thfechapadre-file-" + zoneid_div;
				fechath=elem;
			});
			genrl.create("tr",function(elem){
				let zoneid_div=genrl.now();
				elem.id= "draggable-trheadpadre-file-" + zoneid_div;
				elem.name= "draggable-trheadpadre-file-" + zoneid_div;
				primertr=elem;
			});
			genrl.create("div",function(elem){
				elem.id= "draggable-divpadre-file-" + zoneid_div;
				elem.name= "draggable-divpadre-file-" + zoneid_div;
				divpadrelist=elem;
			});
			primertr.append(nombreth);
			primertr.append(tamanoth);
			primertr.append(fechath);
			primerthead.append(primertr);
			tabpadre.append(primerthead);
			tabpadre.append(primertbody);
			divpadrelist.append(tabpadre);
			g(settings.parent).append(divpadrelist);
			g("#" + divpadrelist.id).addClass("table");

			g("#" + nombreth.id).text("Nombre");
			g("#" + tamanoth.id).text("Tamaño");
			g("#" + fechath.id).text("Fecha");
			g("#" + tabpadre.id).css({
				'width':'100%'
			});
			g("#" + divpadrelist.id).css({
				'position':'relative',
				'float':'none',
				'display':'block',
				'width':'100%',
				'min-height':'50px',
				'padding':'0',
				'margin':'0',
				'background':'#e6e6e6',
				'padding-top':'50px',
				'padding-bottom':'50px',
				'cursor':'pointer',
			});
			g("#" + divpadrelist.id).on('mouseover',function(){
				g("#" + divpadrelist.id).css({
					'background':'#efefef',
				});
			});
			g("#" + divpadrelist.id).on('mouseleave',function(){
				g("#" + divpadrelist.id).css({
					'background':'#e6e6e6',
				});
			});
			ajx
			.post("/api/files/v1/makeFilesTree",strdata)
			.then(function(data){
				let filesarr=data;

			})
			.catch(function(e){	
				SC.log("ERROR:" + e);
			});
		},
		makeDraggableZone:function(settings){
			let callback;
			let fondant;
			let zoneid_div=genrl.now();
			let divdraggable;
			let divdraggable_aviso;
			if(settings.parent==undefined){
				genrl.error("Debe establecer el di padre!");
			}
			else{
				//Crear un input Form con estilo
				genrl.create("form",function(elem){
					elem.id= "draggable-zone-" + zoneid_div;
					elem.name= "draggable-zone-" + zoneid_div;
					elem.enctype= "multipart/form-data";
					divdraggable=elem;
				});

				genrl.create("span",function(elem){
					elem.id= "draggable-zone-aviso-" + zoneid_div;
					elem.name= "draggable-zone-aviso-" + zoneid_div;
					divdraggable_aviso=elem;
				});

				//Crear un input File con estilo
				genrl.create("input",function(elem){
					elem.id= "draggable-input-file-" + zoneid_div;
					elem.name= "resume";
					elem.type= "file";
					inputfile=elem;
				});

				genrl.create("div",function(elem){
					elem.id= "draggable-divpadre-file-" + zoneid_div;
					elem.name= "draggable-divpadre-file-" + zoneid_div;
					divpadrefile=elem;
				});

				genrl.create("label",function(elem){
					elem.id= "draggable-label-file-" + zoneid_div;
					elem.name= "draggable-label-file-" + zoneid_div;
					labelhijofile=elem;
				});

				genrl.create("span",function(elem){
					elem.id= "draggable-span-file-" + zoneid_div;
					elem.name= "draggable-span-file-" + zoneid_div;
					filectafile=elem;
				});

				genrl.create("span",function(elem){
					elem.id= "draggable-input-fileicon-" + zoneid_div;
					elem.name= "draggable-input-fileicon-" + zoneid_div;
					inputfileicon=elem;
				});

				genrl.create("i",function(elem){
					elem.id= "draggable-spanfi-file-" + zoneid_div;
					elem.name= "draggable-spanfi-file-" + zoneid_div;
					inputfileicongoo=elem;
				});

				genrl.create("span",function(elem){
					elem.id= "draggable-spanlegend-file-" + zoneid_div;
					elem.name= "draggable-spanlegend-file-" + zoneid_div;
					elem.innerHTML="Elije un archivo...";
					inputfilelegend=elem;
				});

				inputfileicon.append(inputfileicongoo); 
				filectafile.append(inputfileicon);
				filectafile.append(inputfilelegend);
				labelhijofile.append(filectafile);
				labelhijofile.append(inputfile);
				divpadrefile.append(labelhijofile);
				divdraggable.append(divpadrefile);
				divdraggable.append(divdraggable_aviso);
				g(settings.parent).append(divdraggable);

				g("#" + inputfile.id).addClass("file-input");
				g("#" + divdraggable.id).addClass("draggablezone");
				g("#" + filectafile.id).addClass("file-cta");
				g("#" + inputfile.id).css({
					'cursor':'pointer'
				});
				g("#" + divpadrefile.id).css({
					'position':'relative',
					'float':'none',
					'width':'192px',
					'margin':'0 auto',
					'cursor':'pointer',
				});
				g("#" + inputfileicon.id).addClass("file-icon");
				g("#" + inputfileicongoo.id).addClass("material-icons");
				g("#" + inputfilelegend.id).addClass("file-label");
				g("#" + inputfileicongoo.id).text("description");
				g("#" + divdraggable_aviso.id).css({
					'position':'relative',
					'float':'none',
					'display':'block',
					'width':'200px',
					'min-height':'50px',
					'padding':'0',
					'margin':'0 auto',
					'font-size':'20px',
					'color':'#4e4e4e'
				});
				g("#" + divdraggable_aviso.id).text("[ DRAGGABLE ZONE ]");
				g("#" + divdraggable.id).css({
					'position':'relative',
					'float':'none',
					'display':'block',
					'width':'100%',
					'min-height':'50px',
					'padding':'0',
					'margin':'0',
					'background':'#e6e6e6',
					'padding-top':'50px',
					'padding-bottom':'50px',
					'cursor':'pointer',
				});
				g("#" + divdraggable.id).on('mouseover',function(){
					g("#" + divdraggable.id).css({
						'background':'#efefef'
					});
					g("#" + divdraggable_aviso.id).css({
						'color':'#aeaeae'
					});
				});
				g("#" + divdraggable.id).on('mouseleave',function(){
					g("#" + divdraggable.id).css({
						'background':"#e6e6e6"
					});
					g("#" + divdraggable_aviso.id).css({
						'color':'#4e4e4e'
					});					
				});
				if(typeof settings.callback==='function'){
					callback=settings.callback;
					callback();
				}
				else{
					genrl.log("El atributo action debe ser una función");
				}
			}
		},
		setFileTypes:function(){
			if(arguments){
				for(i=0;i<arguments;i++){
					filetypes[i]=arguments[i];
				}
				if(filetypes.length>0){
					return 1;
				}
				else{
					return -1;
				}
			}
		},
		makeTableFileDetails:function(){
			//get file details and make a table with it when i click on it
			//make AJAX CALL to retrieve JSON file details
			let ajx=genrl.ajaxapi;
			ajx
			.post(savesession,strdata)
			.then(function(data){
				if(data=="VALID_SESSION"){
					genrl.lhref(callbacklogin);
				}
			})
			.catch(function(e){	
				SC.log("ERROR:" + e);
			});
		},
		getFileList:function(){
			//get file list from server
			//make AJAX CALL
			let ajx=genrl.ajaxapi;
			ajx
			.post(savesession,strdata)
			.then(function(data){
				if(data=="VALID_SESSION"){
					genrl.lhref(callbacklogin);
				}
			})
			.catch(function(e){	
				genrl.log("ERROR:" + e);
			});
		},
		uploadFileAsync:function(file){
		},
		removeFileAsync:function(file){
		},
		updateFileDetails:function(file){
		},
		getTree:function(){
			//get tree directory view
			//make AJAX CALL
			let ajx=genrl.ajaxapi;
			ajx
			.post(savesession,strdata)
			.then(function(data){
				if(data=="VALID_SESSION"){
					genrl.lhref(callbacklogin);
				}
			})
			.catch(function(e){	
				genrl.log("ERROR:" + e);
			});
		},
		getFilesFromDirectory:function(directory){
			//get tree directory view
			//make AJAX CALL
			let ajx=genrl.ajaxapi;
			ajx
			.post(savesession,strdata)
			.then(function(data){
				if(data=="VALID_SESSION"){
					genrl.lhref(callbacklogin);
				}
			})
			.catch(function(e){	
				genrl.log("ERROR:" + e);
			});
		},
	}
}(window))
