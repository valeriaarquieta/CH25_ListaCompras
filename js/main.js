let txtNombre=document.getElementById("Name");
let txtNumber=document.getElementById("Number");

let btnAgregar=document.getElementById("btnAgregar");
let btnClear=document.getElementById("btnClear");

let alertValidacionesTexto=document.getElementById("alertValidacionesTexto");
let alertValidaciones=document.getElementById("alertValidaciones");

btnClear.addEventListener("click",function(event){event.preventDefault();
txtNombre.value="";
txtNumber.value="";
});

btnAgregar.addEventListener("click",function(event){event.preventDefault();
  let lista="Los siguientes campos estan mal:<ul>";
 alertValidacionesTexto.innerHTML="";
 alertValidaciones.style.display="none";


    if(txtNombre.value.length==0){
    txtNombre.style.border="solid thin red";
    lista+="<li>Escribir nombre válido.</li>";
    alertValidaciones.style.display="block";
}else{txtNombre.style.border="";}

if(txtNumber.value.length==0){
    txtNumber.style.border="solid thin red";
    lista+="<li>Escribir cantidad válida.</li>";
    alertValidaciones.style.display="block";
}else{txtNumber.style.border="";}

lista+="<ul/>";
alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
});

txtNumber.addEventListener("blur",function(event){event.preventDefault();
txtNumber.value=txtNumber.value.trim();
});

txtNombre.addEventListener("blur",function(event){event.preventDefault();
txtNombre.value=txtNombre.value.trim();
});