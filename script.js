//Comentario: declaración de variables
let vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let vocaEnc = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};


//Comentario: función "asignarTextoElemento" para mostrar mensaje "Ningún mensaje fue encontrado"
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//Comentario: función para que el mensaje "Ningún mensaje fue encontrado" se comporte como un placeholder 
document.getElementById("inputTexto").oninput = function () {
  ocultarMostrarMensaje(); 
};
function ocultarMostrarMensaje() {
  asignarTextoElemento("p", "");
  let contenido = document.getElementById("inputTexto").value;
  if (contenido.length < 1) {
    asignarTextoElemento("p", `Ningún mensaje fue encontrado`);
  }
  //agregue return
  return;
}

function botonEncriptar() {
  
  //Comentario: agregue "toLowerCase" para convertir en minusculas el texto encriptado
  let textArea2 = document.getElementById("inputTexto").value.toLowerCase();
  textArea2 = textArea2.replace(/a|e|i|o|u/g, function (matched) {
    return vocales[matched];});

  let inputTexto = document.getElementById("textoEncriptar");
  inputTexto.value = textArea2;

  console.log(textArea2);
  
  limpiar_inputTexto();
  asignarTextoElemento("p", `El texto fue encriptado con exito`);
  let color = document.getElementById('mensaje');
  color.style.color= "red";
  mostrarBotonCopiar();
  mostrarBotonDesencriptar();
  return;
  }

//Comentario: esta funcion es para desencriptar
function botonDesencriptar() {
  
  let textArea2 = document.getElementById("inputTexto").value.toLowerCase();
  textArea2 = textArea2.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
    return vocaEnc[matched];
  });
  
  let inputTexto = document.getElementById("textoEncriptar");
  inputTexto.value = textArea2;

  console.log(textArea2);

  limpiar_inputTexto();
  asignarTextoElemento("p", `El texto fue desencriptado con exito`);
  let color = document.getElementById('mensaje');
  color.style.color= "blue";
  mostrarBotonCopiar();
  return;
}

//Comentario: activación del botón copiar para pasar el contenido de un textarea a otro
function botonCopiar() {
  let boton = document.getElementById("botonCopiar");
  let textEn = document.getElementById("textoEncriptar").value;
  
  navigator.clipboard.writeText(textEn)
  .then(() => {console.log('Texto copiado al portapapeles...')})
  .catch(err => {
    console.log('Algo va mal', err);
  })

  //cambiar el nombre del boton 
  boton.textContent = 'Copiado';
  boton.style.backgroundColor="red";

  //luego de un segundo se retorna al nombre original del boton
  setTimeout(() => {
    boton.textContent = 'Copiar';
    boton.style.backgroundColor="#1875E8";
  }, 5000);
  
}  


function limpiar_inputTexto() {
  document.getElementById("inputTexto").value = "";
}

function limpiar_textoEncriptar() {
  document.getElementById("textoEncriptar").value = "";
}

function mostrarBotonCopiar() {
  document.getElementById("botonCopiar").style.display = "block";
}

function mostrarBotonDesencriptar() {
  let botonDesencriptado = document.getElementById("botonDesencriptar");
  botonDesencriptado.removeAttribute("disabled");
}

function habilitar_BtnEncriptar(){
  let btn_Encriptar = document.getElementById("botonEncriptar");
  btn_Encriptar.removeAttribute('disabled');
}

function deshabilitar_BtnEncriptar(){
  let btnEncriptar = document.getElementById("botonEncriptar");
  btnEncriptar.setAttribute('disabled', 'true');
}

function mostrarMensaje() {
  asignarTextoElemento("p", `Ningún mensaje fue encontrado`);
}

mostrarMensaje();


//Comentario: zona de codigos de prueba



