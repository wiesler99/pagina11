/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Author: A15547
 */

function isNumber(input){
     var expre = RegExp("^[0-9]+$");
     return expre.test(input);
}

function isCharacter(input){
     var expre = RegExp("^[A-Za-z]+$");
     return expre.test(input);
}

function isAlphanumeric(input){
     var expre = RegExp("^[0-9A-Za-z]+$");
     return expre.test(input);
}

function isNumericExtraCharacteres(input){
    var expre = RegExp("^([0-9]*\.{0,1}[0-9]{0,2})$");              
    return expre.test(input);
}

function isValidASCII(input){
    var expre = RegExp("^[0-9a-zA-Z\"!#$%&'()\*\+,-./:;\?@\\_éáíóúñÑ¿¡\\s]+$");    
     return expre.test(input);
}