let select = document.getElementById("calendario")



select.addEventListener("click", meses)

function meses(){
    
    if(select.value == "ENERO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    
    if(select.value == "ABRIL"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "none";
      }     

    if(select.value == "FEBRERO"){
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("ocultar1").style.display = "none";
        document.getElementById("ocultar2").style.display = "none";
    }
    if(select.value == "MARZO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    if(select.value == "MAYO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    if(select.value == "JUNIO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "none";
    }
    if(select.value == "JULIO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    if(select.value == "AGOSTO"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    if(select.value == "SEPTIEMBRE"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "none";
    }
    if(select.value == "OCTUBRE"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
    if(select.value == "NOVIEMBRE"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "none";
    }
    if(select.value == "DICIEMBRE"){
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar1").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
    }
}   
