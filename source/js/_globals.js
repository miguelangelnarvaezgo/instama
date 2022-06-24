//función maestra para inyectar elementos en DOM. Principalmente iconos NAV y HEADER.
export const insertElement = (quantity = 0, id = 'no ID', position, element='') => {
	if (element == '') {
		for (let i = 0; i < quantity; i++ ) {
				let content = `<div class="${id}" id="${id}-${i}"></div>`;
				document.getElementById(id).insertAdjacentHTML('beforeend' ,content);
			}
	} else {
		for (let i = 0; i < quantity; i++ ) {
				let content = element;
				document.getElementById(id).insertAdjacentHTML(position ,content);
			}
	}
}

export const resizeElement = (target, img, view = 0, side = 'height') => {
	let s = side;
	if (side == 'width' ) {
		s = 'width';
	}
  let elem = document.getElementsByClassName(target);
	console.log(elem[0].clientWidth);
	let imgs = document.getElementsByClassName(img);

	let w = elem[0].clientWidth + elem[0].clientWidth * view; // se podría recorrer el elemento "elem" y asignar a cada imagen el alto de su propio contenedor, pero como todos son iguales se reduce la carga de trabajo usando el tamaño del primer elemento
	console.log(w);

	for (let img of imgs) {
		// let w = elem[0].clientWidth + elem[0].clientWidth * view; // se podría recorrer el elemento "elem" y asignar a cada imagen el alto de su propio contenedor, pero como todos son iguales se reduce la carga de trabajo usando el tamaño del primer elemento
		img.setAttribute(s, w + "px");
	}
}

export const cleanContainer = (target) => {
  let container = document.getElementById(target);
  if ( container.hasChildNodes() ) {
    while ( container.childNodes.length >= 1 ){
      container.removeChild( container.firstChild );
    }
  }
}
