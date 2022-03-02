/*
Javascript es un lenguaje que posee un paradigma
orientado a objetos y a funciones, por tal motivo
presenta una particularidad la cual es:

NO TIPADO

no esiste int, float, string, nichar, ni nada

TODO ES VAR = VARIABLE

De acuerdo al estandar ES6 se manejan 3 tipos 
de variables

VAR
LET es una variable de tipo "protected"
CONST



 
*/
function validar(fomulario){
    //obtener los datos y discriminar a llos que tienen 5 letras
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 carcateres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "advuywtewrponbajcvcxmzljudñ"
    + "BUBYBIWUQORYOPÑLKHGSFDMZNBXVC";

    var checkStr = formulario.nombre.value;

    var todosvalido= true;

    for(var i= 0; i < checkStr.length; i++){
        var ch= checkStr.charAt(i);
        for(var j = 0; k <checkOk.length; j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
            
            }
            if(j == checkOk.length){
                todosvalido = false;
                break;
        }
    }

    if(!todosvalido){
        alert("escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false
    }
    var checkOk = "advuywtewrponbajcvcxmzljudñ"
    + "BUBYBIWUQORYOPÑLKHGSFDMZNBXVC";

    var checkStr = formulario.nombre.value;

    for(var i= 0; i < checkStr.length; i++){
        var ch= checkStr.charAt(i);
        for(var j = 0; k <checkOk.length; j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
            
            }
            if(j == checkOk.length){
                todosvalido = false;
                break;
        }
    }

    if(!todosvalido){
        alert("escriba unicamente letras en el campo edad");
        formulario.edad.focus();
        return false
    }

    var txt = formulario.email.value;
    //creo mi expresion regular
    //algo@algo o algo@.algo

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

        alert("email " + (b.test(txt)? " ": " no  ")+ " valido");
        
        return b.test;
        

}