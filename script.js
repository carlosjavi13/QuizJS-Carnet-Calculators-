//Generación de carnet

window.onload= init;

let carnet; 

function init() { 
	carnet = new CarnetManager();
    carnet.addTestData();
    carnet.displayContactsAsATable("information");
    }

document.getElementById("btnData").addEventListener("click", capturaDatos);
document.getElementById("btnGener").addEventListener("click", generaCarnet);

let formulario_fin = document.getElementById("formulario_fin");
let formulario_ini = document.getElementById("formulario_ini");


function capturaDatos(){
    
    formulario_fin.style.display = "block";
      
         let nombreCompleto = document.querySelector("#nombreCompleto");
         let Apellidos = document.querySelector("#Apellidos");
         let Edad = document.querySelector("#Edad");
         let Cargo = document.querySelector("#Cargo");
         let RH = document.querySelector("#RH");
         let numeroDocumento= document.querySelector("#numeroDocumento");
         let Telefono= document.querySelector("#Telefono");
         let newContact = new Contact(nombreCompleto.value, Apellidos.value, Edad.value, Cargo.value, RH.value, numeroDocumento.value, Telefono.value);
         carnet.add(newContact);
         
         carnet.displayContactsAsATable("information");
          
         nombreCompleto.value = "";
         Apellidos.value = "";
         Edad.value = "";
         Cargo.value = "";
         RH.value = "";
         numeroDocumento.value = "";
         Telefono.value = "";
 
         return false;
 }

function generaCarnet(){

    let text = document.querySelector("#nombreCompleto");
    let text1 = document.querySelector("#Apellidos");
    let number = document.querySelector("#Edad");
    let text2 = document.querySelector("#Cargo");
    let text3 = document.querySelector("#RH");
    let number2= document.querySelector("#numeroDocumento");
    let number3= document.querySelector("#Telefono");
    if(text.value.length === 0){
         alert("Llena el campo Nombre Completo")
         return false;
     }else if (text1.value.length === 0){
        alert("Llena el campo Apellidos")
        return false;
     }else if (number.value.length === 0){
        alert("Edad incorrecta")
        return false;
     }else if (text2.value.length === 0){
        alert("Digite el cargo")
        return false;
     }else if (text3.value.length === 0){
        alert("Digite el grupo sanguíneo")
        return false;
    }else if (number2.value.length === 0){
        alert("Digite el número de documento")
        return false;
    }else if (number3.value.length === 0){
        alert("Digite el número telefónico")
    return false;
    }else
     alert("Se ha generado el carnet")

    formulario_ini.style.display = "block";
    formulario_ini.style.left = "400px";
    formulario_ini.style.top = "100px";
    formulario_ini.style.color = "black";

return;
    }

    function emptyList() {
        carnet.empty();
          carnet.displayContactsAsATable("information");
    }
        
    class Contact {
        constructor(nombreCompleto, Apellidos, Edad, Cargo, RH, numeroDocumento, Telefono) {
            this.nombreCompleto = nombreCompleto;
            this.Apellidos = Apellidos;
            this.Edad = Edad;
            this.Cargo = Cargo;
            this.RH = RH;
            this.numeroDocumento = numeroDocumento;
            this.Telefono = Telefono;
        
        }
    }

   
    class CarnetManager {
        constructor() {
            this.listOfContacts = [];
        }
        addTestData() {
            let c1 = new Contact("Nombre Completo y", "Apellidos:","Edad y", "Cargo:", "RH y", "Numero de Documento:", "Teléfono:")
            this.add(c1);
                        
                    }
              
        empty() {
            this.listOfContacts = [];
        }
        
        add(contact) {
            this.listOfContacts.push(contact);
        }
        
          displayContactsAsATable(idOfContainer) {
            let container = document.querySelector("#" + idOfContainer);
            container.innerHTML = " ";
    
            
            if(this.listOfContacts.length === 0) {
                container.innerHTML = "<p>No contacts to display!</p>";
                return;
            }  
      
            let table = document.createElement("table");
              
            this.listOfContacts.forEach(function(currentContact) {
                let row = table.insertRow();
                row.innerHTML = currentContact.nombreCompleto+ " " + currentContact.Apellidos 
             });
             this.listOfContacts.forEach(function(currentContact) {
                let row1 = table.insertRow();
                row1.innerHTML = currentContact.Edad + " " +currentContact.Cargo
                
             });
             this.listOfContacts.forEach(function(currentContact) {
                let row2 = table.insertRow();
                row2.innerHTML = currentContact.RH + " " +currentContact.numeroDocumento
             });
             this.listOfContacts.forEach(function(currentContact) {
                let row3 = table.insertRow();
                row3.innerHTML = currentContact.Telefono
             });
      
             container.appendChild(table);
          }
    }

//Calculador Básica

let resultado;
document.getElementById("suma").addEventListener("click", ()=>{
    resultado = "+"
});
document.getElementById("resta").addEventListener("click", ()=>{
    resultado = "-"
});
document.getElementById("multiplicacion").addEventListener("click", ()=>{
    resultado = "*"
});
document.getElementById("division").addEventListener("click", ()=>{
    resultado = "/"
});
document.getElementById("vaciar").addEventListener("click", vaciar);


document.getElementById("igualdad").addEventListener("click", () =>{
    let numero1 = parseFloat(document.getElementById("Numero1").value);
    let Numero2 = parseFloat(document.getElementById("Numero2").value);
    let op;

    if(resultado === "+"){
        op = numero1 + Numero2;
    }else if (resultado === "-"){
        op = numero1 - Numero2;
    }else if (resultado === "*"){
        op = numero1 * Numero2;
    }else op = numero1 / Numero2;

    document.querySelector("#op").innerHTML = op;
});


function vaciar(){
    let numero1 = document.getElementById("Numero1");
    let Numero2 = document.getElementById("Numero2");

    numero1.value = "";
    Numero2.value = "";
}

//Calculadora Avanzada

window.addEventListener("load", ()=>{
    const display = document.querySelector(".calculadora-d");
    const botonesKey = document.getElementsByClassName("key-butt");

    const botonesKeyArray = Array.from(botonesKey);

    botonesKeyArray.forEach((boton) => {
        boton.addEventListener("click", ()=>{
            calcul(boton, display)
        })
    }
    )
});

function calcul(boton, display){
    if (boton.innerHTML === "C"){
        borrar (display);
        return false;
    }else if (boton.innerHTML === "="){
        calcular(display);
        return false;
    }else actualizar (boton, display);
    return false;
}

function calcular (display){
    display.innerHTML = eval(display.innerHTML);
}
function actualizar(boton, display){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML+=boton.innerHTML;
}
function borrar(display){
    display.innerHTML = 0;
}