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
			let inputfile=genrl.getCreate("input");
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
				inputfile.id= "draggable-input-file-" + zoneid_div;
				inputfile.name= "draggable-input-file-" + zoneid_div;
				inputfile.type= "file";
				divdraggable.append(divdraggable_aviso);
				divdraggable.append(inputfile);
				g(settings.parent).append(divdraggable);
				g("#" + divdraggable.id).addClass("draggablezone");
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
