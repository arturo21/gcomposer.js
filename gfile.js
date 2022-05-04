let gfile=(function(){
	let files=[{}];
	let filetypes=[{}];
	let dirs=[{}];	
	let rootfolder="";
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
		makeDraggableZone:function(settings){
			let callback;
			let fondant;
			let zoneid_div=genrl.now();;
			let divdraggable=genrl.getCreate("form");
			let divdraggable_aviso=genrl.getCreate("span");
			if(settings.parent==undefined){
				genrl.error("Debe establecer el di padre!");
			}
			else{
				divdraggable.id= "draggable-zone-" + zoneid_div;
				divdraggable.name= "draggable-zone-" + zoneid_div;
				divdraggable.enctype= "multipart/form-data";
				divdraggable_aviso.id= "draggable-zone-aviso-" + zoneid_div;
				divdraggable_aviso.name= "draggable-zone-aviso-" + zoneid_div;

				//Crear un input File con estilo
				let inputfile=genrl.getCreate("input");
				inputfile.id= "draggable-input-file-" + zoneid_div;
				inputfile.name= "resume";
				inputfile.type= "file";

				let divpadrefile=genrl.getCreate("div");
				divpadrefile.id= "draggable-divpadre-file-" + zoneid_div;
				divpadrefile.name= "draggable-divpadre-file-" + zoneid_div;

				let labelhijofile=genrl.getCreate("label");
				labelhijofile.id= "draggable-label-file-" + zoneid_div;
				labelhijofile.name= "draggable-label-file-" + zoneid_div;

				let filectafile=genrl.getCreate("span");
				filectafile.id= "draggable-span-file-" + zoneid_div;
				filectafile.name= "draggable-span-file-" + zoneid_div;

				let inputfileicon=genrl.getCreate("span");
				inputfileicon.id= "draggable-input-fileicon-" + zoneid_div;
				inputfileicon.name= "draggable-input-fileicon-" + zoneid_div;

				let inputfileicongoo=genrl.getCreate("i");
				inputfileicongoo.id= "draggable-spanfi-file-" + zoneid_div;
				inputfileicongoo.name= "draggable-spanfi-file-" + zoneid_div;

				let inputfilelegend=genrl.getCreate("span");
				inputfilelegend.id= "draggable-spanlegend-file-" + zoneid_div;
				inputfilelegend.name= "draggable-spanlegend-file-" + zoneid_div;
				inputfilelegend.innerHTML="Elije un archivo...";

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
				g("#" + divpadrefile.id).css({
					'position':'relative',
					'float':'none',
					'width':'192px',
					'cursor':'pointer',
					'margin':'0 auto'
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
					fondoant=g("#" + divdraggable.id).css("background");
					g("#" + divdraggable.id).css({
						'background':'#efefef'
					});
					g("#" + divdraggable_aviso.id).css({
						'color':'#aeaeae'
					});
				});
				g("#" + divdraggable.id).on('mouseleave',function(){
					g("#" + divdraggable.id).css({
						'background':fondoant.background
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
