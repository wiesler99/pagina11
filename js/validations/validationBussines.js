
function validateDate(){
    var elements = [];
    var date = $("#input_fecha").val().trim();   
    //Get Actual Year
    var nowDate = new Date();
    var nowYear = nowDate.getFullYear();  
    var dia      = -1;
    var mes      = -1;
    var anio     = -1;   
    var anioInicioCEP = 2012;
    
    //Quit -
    var dateReplace = date.replace(/-/g,"");    
    dateReplace = noSpacesInText(dateReplace);    
    if(isNumber(dateReplace)){        
        elements = date.split("-");       
        dia  = parseInt(elements[0]);      
        mes  = parseInt(elements[1]);
        anio = parseInt(elements[2]); 
        //Validate day
        if( !( dia > 0 && dia <= 31) ){            
            return false;
        //Validate month
        }else if(!( mes > 0 && mes <= 12)){            
            return false;
        //Validate Year
        }else if(!( anio >= anioInicioCEP && anio <= nowYear)){            
            return false;
        }     
        return true;
    }else{       
        //alert("Fecha incorrecta");
        return false;
    }                           
}

function validateClaveRastreo() {
    var MAX_LENGTH = 30;
    var clave = $("#input_criterio").val().trim();
    //clave = noSpacesInText(clave);
    if(!(clave.length > 0 && clave.length <= MAX_LENGTH)){
        return false;
    }else if(!isValidASCII(clave)){
        return false;
    }
    return true;
}

function validateNumReferencia(){
    var MAX_LENGTH = 7;
    var numRef = $("#input_criterio").val().trim(); 
    numRef =  noSpacesInText(numRef);
    if(!(numRef.length > 0 && numRef.length <= MAX_LENGTH) ){
        return false;    
    }else if(!isNumber(numRef)){
     return false;   
    }
    return true;
}

function validateCuentaClabe() {
    var MAX_LENGTH = 18;
    var cuentaClabe = $("#input_cuenta").val().trim();   
    cuentaClabe = noSpacesInText(cuentaClabe);
   if( !(cuentaClabe.length > 0 && cuentaClabe.length <= MAX_LENGTH)){
        return false;
    }if(!isNumber(cuentaClabe)){        
        return false;
    }
    return true;
}

function validateMonto() {
    var MAX_LENGTH = 20;   
    var monto = $("#input_monto").val().trim();   
    monto = noSpacesInText(monto);
    if( !(monto.length > 0 && monto.length <= MAX_LENGTH)){        
        return false;
    }else if(!isNumericExtraCharacteres(monto)){
        return false;
    }   
    return true;
}






