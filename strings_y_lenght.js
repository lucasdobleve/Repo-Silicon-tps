var verdadero, char //definiendo dos variables que entren en el array
var valores = [verdadero, false, 2, "hola", "mundo", 3, char];
var ListaString= [];
var listaNumeros=[];
for (let i=0; i<valores.length; i++){
    
    if (typeof valores[i]==="string") {
        ListaString.push(valores[i]);
    }
}
Mayor=0;
PalabraMayor=0;
for (let i=0; i<ListaString.length; i++){
   if (ListaString[i].length>Mayor){
    PalabraMayor=ListaString[i];
    Mayor=ListaString[i].length;
   }
}

for (let i=0; i<valores.length; i++){
    if (typeof valores[i]==="number"){
        listaNumeros.push(valores[i])  
    }
}
sumaNumeros=0;
for (let i=0; i<listaNumeros.length; i++){
    sumaNumeros+=listaNumeros[i];
}

document.write("La palabra con más letras es: "+PalabraMayor+"<br>");
document.write("Imprimiendo los elementos de menor a mayor: "+ " <br> "+ListaString.sort(function(a,b){return a.length-b.length})+"<br>");
document.write("La suma de los números en la lista es de: "+sumaNumeros);