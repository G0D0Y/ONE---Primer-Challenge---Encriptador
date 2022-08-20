    
    var input;
    var textoParaEncriptar;
    var textoEncriptado;
    const vocales = ["e","i","a","o","u"];
    const llaves= ["enter","imes","ai","ober","ufat"];

    function ocultarElementos(){
        document.getElementById("munheco").style.display="none";
        document.getElementById("mensaje1").style.display="none";
        document.getElementById("mensaje2").style.display="none";
        document.getElementById("botoncopiar").style.display="initial";
        document.getElementById("output").style.display="block";
    }
   
    function getValue(){
        input = document.getElementById("texto-fuente").value;
        textoParaEncriptar = input.split("");
    }
    
    function encriptarTexto(vocal,i){
        var posicion = input.indexOf(vocal);
        while(posicion != -1){
            textoParaEncriptar.splice(posicion,1,llaves[i]);
            input=textoParaEncriptar.toString().replace(/,/g,"");
            textoParaEncriptar = input.split("");
            posicion = input.indexOf(vocal,posicion+llaves[i].length); 
        }
    }

    function desencriptarTexto(llave){
        var posicion = input.lastIndexOf(llave);
        while(posicion != -1){
            textoParaEncriptar.splice(posicion+1,llave.length - 1);
            input=textoParaEncriptar.toString().replace(/,/g,"");
            posicion = input.lastIndexOf(llave); 
        }
    }

    function encriptar(){
        getValue();
        if(input){
        ocultarElementos();
        for(var i=0;i<5;i++){
            encriptarTexto(vocales[i],i);
        }
        textoEncriptado=textoParaEncriptar.toString().replace(/,/g,"");
        document.getElementById("output").innerHTML = textoEncriptado;
        }
    }

    function desencriptar(){
        getValue();
        if(input){
        ocultarElementos();
        
        for(var i=0;i<5;i++){
            desencriptarTexto(llaves[i]);
        }

        textoEncriptado=textoParaEncriptar.toString().replace(/,/g,"");
        document.getElementById("output").innerHTML = textoEncriptado;
        }
    }
    
    function copiarPortapapeles(){
        navigator.clipboard.writeText(textoEncriptado);
        alert("Copiado al portapapeles");
    }

    document.getElementById("botencriptar").addEventListener("click", encriptar);
    document.getElementById("botdesencriptar").addEventListener("click", desencriptar);
    document.getElementById("botoncopiar").addEventListener("click", copiarPortapapeles);
    