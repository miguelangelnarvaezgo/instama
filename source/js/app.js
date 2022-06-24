import * as g from "_globals";
import * as user from "_user";
import * as story from "_stories";
import * as pub from "_publications";
// import * as igt from "igtv";

import {data} from "../data/data";


// control de eventos para escuchar click en las pestañas del aside.
const publicaciones = document.getElementById('label-publicaciones');
publicaciones.addEventListener('click', function(event) {
	g.cleanContainer('content-container');
	document.getElementById('content-container').setAttribute('style', "display: grid; grid-template-columns: repeat(3, 1fr);");
	pub.insertPublication(data);
	console.log('se ha hecho click en Publicaciones');
});

const igtv = document.getElementById('label-igtv');
	igtv.addEventListener('click', function(event) {
	g.cleanContainer('content-container');
	document.getElementById('content-container').setAttribute('style', "display: grid; grid-template-columns: repeat(4, 1fr);");
	pub.insertIgtv(data);
	console.log('se ha hecho click en IGTV');
});

const etiquetadas = document.getElementById('label-etiquetadas');
etiquetadas.addEventListener('click', function(event) {
	g.cleanContainer('content-container');
	console.log('se ha hecho click en Etiquetadas');
});

pub.insertPublication(data);
// Se detecta el evento DOMContentLoaded para sber cuando el documento esta cargado y listo. Función de iniciación del programa.
document.addEventListener("DOMContentLoaded", function(event) {
	g.insertElement(5, 'nav-icon', 'beforeend');
	// pub.insertPublication(data);
	story.insertStorie(data);
	user.userData(data);
});
