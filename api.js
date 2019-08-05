var token = 2179678172154837;


function recoger(){

var heroe = document.getElementById("Consultar").value;
var link = "https://www.superheroapi.com/api.php/2179678172154837/"+heroe+"";
var nombre="";
var ocupacion="";
var genero="";
var raza="";
var imagen="";

console.log(link);

fetch(link)
.then (function (response){
    return response.json();
})
.then (function(cosa){
    console.log(cosa);

    nombre="<p> Nombre: "+ cosa.name+"</p>";
    console.log(nombre)

    ocupacion= "<p> ocupacion: "+ cosa.work.occupation+"</p>"; 
    console.log(ocupacion);

    genero= "<p> genero: "+ cosa.appearance.gender+"</p>";  
    console.log(genero);

    raza= "<p> raza: "+ cosa.appearance.race+"</p>";  
    console.log(raza);
    
    imagen="<img src='" + cosa.image.url + "'width='100px' heigth='100px' " + "id=" + "'imagen'" + ">";

    document.getElementById("heores").innerHTML+=ocupacion;
    document.getElementById("heores").innerHTML+=nombre;
    document.getElementById("heores").innerHTML+=genero;
    document.getElementById("heores").innerHTML+=raza;
    document.getElementById("heores").innerHTML+=imagen;
    document.getElementById("heores").innerHTML+="<p> <h1> </h1></p>";
    
})

}

