
let listaAmigos=[];
let inputamigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let  ulResultado=document.getElementById ("resultado");


function agregarAmigo() {

    if (inputamigo.value===""){
        alert ("Por favor, Inserte un nombre");
        return;
    }

    listaAmigos.push(inputamigo.value);
    mostrarLista();
    console.log(listaAmigos);
    //llamar a funcion para limpiar caja 
    limpiarCaja ();
    return;
}
function mostrarLista() {
    lista.innerHTML = ""; 
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
 
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sorteo];
    ulResultado.innerHTML = ` Tu amigo secreto es: ${amigoSecreto}`;
}


function limpiarCaja (){

    let valorCaja=document.querySelector("#amigo").value="";
}



