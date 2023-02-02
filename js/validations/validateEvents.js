/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function noSpace(event) {
    var ascii = event.which ;
    if(ascii == 32){
        //Stop the actual action
        event.preventDefault(); 
    }
}

function noSpacesInText(input){
        return input.replace(/ /g, "");
}

function allowDelete(event) {
    var ascii = event.which ;
    if(ascii == 8){
     return true;       
    }
    return false;
}

function allowArrow(event) {
    var ascii =  event.keyCode;
    //   Left     ||   Right
    if(ascii == 37 || ascii == 39){
     return true;       
    }
    return false;
}

function allowDot(event) {
    var ascii = event.which ;       
    //       . 
    if(ascii == 46 ){                 
     return true;       
    }
    return false;
}

function onlyOneDot(event){
   var input = $("#input_monto").val();
   var index = input.indexOf(".")
   if(!allowDot(event)){
       return false;
   }else if( index != -1 && allowDot(event)){      
       return false;
   }
   return true;
}
