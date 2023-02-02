/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function onlyWriteNumber(event){
    $("#input_cuenta").removeAttr('style');
    //Explorer  || Otros   
    var ascii =  event.keyCode || event.which ;    
    //No space
    noSpace(event);                                                    
    if(!allowArrow(event) && !allowDelete(event) && !isNumber(String.fromCharCode(ascii))) {
        //Stop the actual action
        event.preventDefault();        
    }
}

function writeNumberMonto(event){
    $("#input_monto").removeAttr('style');
    //Explorer  || Otros    
    var ascii =  event.keyCode || event.which ;
    //No space
    noSpace(event);
    if(!allowArrow(event) && !allowDelete(event) && !onlyOneDot(event)  && !isNumber(String.fromCharCode(ascii))) {
        //Stop the actual action
        event.preventDefault();        
    }
}


function writeAlphaNumeric(event){
     $("#input_criterio").removeAttr("style")
    //Explorer  || Otros    
    var ascii =  event.keyCode || event.which ;
    //No space
    noSpace(event);         
    if(!allowArrow(event) && !allowDelete(event) && !allowDot(event)  && !isAlphanumeric(String.fromCharCode(ascii))) {
        //Stop the actual action
        event.preventDefault();        
    }
} 

function writeValidCharacterClaveRastreo(event){
    //Explorer  || Otros    
    var ascii =  event.keyCode || event.which ;    
    if( ascii!=8  && !(ascii>=32 && ascii <=59) && !((ascii>=63 && ascii <=90)) && ascii!=92 && ascii !=95 && !(ascii>=97 && ascii <=122) && ascii!= 130 && !(ascii>=160 && ascii <=165) && ascii!=168 && ascii!=173){
        event.preventDefault();        
    }
}

var htmlBotonPago= '<br/><a id="btn_Consultar" style="cursor:default;" class="boton disabled"  tabindex="0"><i class="icon-search" style="margin-right: 5px;"></i>Consultar Pago</a>';

function cambiaTextosFormulario() {
    var esParticipante = $("input[name='receptorParticipante']")[0].checked;
    if(esParticipante == undefined || !esParticipante) {
        // 20220705_AJRG_GML_Cambios para forzar uso de monto y cuenta como parametros de consulta del pago.
        // $("#lbl_input_cuenta").html("Cuenta Beneficiaria *");
        $("#lbl_input_cuenta").html("Cuenta Beneficiaria");
        $("input[name='cuenta']").attr('placeholder', 'Cuenta Beneficiaria');
        // 20220705_AJRG_GML_Cambios para forzar uso de monto y cuenta como parametros de consulta del pago.
        // $("#div_hint_buscar_pago").html("* Si no cuentas con la cuenta beneficiaria y el monto del pago, puedes consultar el estado del pago."+htmlBotonPago);
        $("#div_hint_buscar_pago").html("Para tener certeza de que se trata del pago que está buscando, se requiere proporcionar la Cuenta Beneficiaria y el Monto del pago."+htmlBotonPago);
        $("input[name='receptorParticipante']")[0].value = "0";  
        //$("#input_benef_es_part").val("0");
    } else {
        // 20220705_AJRG_GML_Cambios para forzar uso de monto y cuenta como parametros de consulta del pago.
        // $("#lbl_input_cuenta").html("Cuenta Ordenante *");
        $("#lbl_input_cuenta").html("Cuenta Ordenante");
        $("input[name='cuenta']").attr('placeholder', 'Cuenta Ordenante');
        // 20220705_AJRG_GML_Cambios para forzar uso de monto y cuenta como parametros de consulta del pago.
        // $("#div_hint_buscar_pago").html("* Si no cuentas con la cuenta ordenante y el monto del pago, puedes consultar el estado del pago."+htmlBotonPago);
        $("#div_hint_buscar_pago").html("Para tener certeza de que se trata del pago que está buscando, se requiere proporcionar la Cuenta Ordenante y el Monto del pago."+htmlBotonPago);
        $("input[name='receptorParticipante']")[0].value = "1";
        //$("#input_benef_es_part").val("1");
    }
    CEP.estableceEventosBotones();
}