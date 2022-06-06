import * as g from "_globals";

//se lee el JSON y se inyecta el contenido del header
export const userData = (data) => {
	const user = data.user;
	let element = ``;
	let elementMv = ``;
	let usMv = ``;

	for (let us in user) {
		switch (us) {

			case 'avatar':
				element = `<img src="data/${user.avatar}">`;
				// element = `<img src="../data/${user.avatar}">`;
				g.insertElement(1, us, 'beforeend', element);
				break;

			case 'nombre':
				element = `${user.nombre}`;
				g.insertElement(1, us, 'beforeend', element);
				break;

			case 'publicaciones':
				element = `<span class="share-num">${user.publicaciones}</span>`;
				g.insertElement(1, us, 'afterbegin', element);

				elementMv = `<p>${user.publicaciones}</p>`;
				usMv = `${us}-mv`;
				g.insertElement(1, usMv, 'afterbegin', elementMv);
				break;

			case 'seguidores':
				element = `<span class="share-num">${user.seguidores}</span>`;
				g.insertElement(1, us, 'afterbegin', element);

				elementMv = `<p>${user.seguidores}</p>`;
				usMv = `${us}-mv`;
				g.insertElement(1, usMv, 'afterbegin', elementMv);
				break;

			case 'seguidos':
				element = `<span class="share-num">${user.seguidos}</span>`;
				g.insertElement(1, us, 'afterbegin', element);

				elementMv = `<p>${user.seguidos}</p>`;
				usMv = `${us}-mv`;
				g.insertElement(1, usMv, 'afterbegin', elementMv);
				break;

			case 'descripcion':
				const descripcion = user.descripcion;
				for (let des in descripcion) {
					switch (des) {

						case 'nombreCompleto':
							element = `${descripcion.nombreCompleto}`;
							g.insertElement(1, des, 'beforeend', element);
							break;

						case 'historia':
							element = `${descripcion.historia}`;
							g.insertElement(1, des, 'beforeend', element);
							break;

						case 'lesigue':
							element = `<span>${descripcion.lesigue}</span>`;
							g.insertElement(1, des, 'afterbegin', element);
							break;

						case 'link':
							element = `<a class="link" href="${descripcion.link}">${descripcion.link}</a>`;
							// element = `<a class="link" href="http://www.${descripcion.link}">${descripcion.link}</a>`;
							g.insertElement(1, des, 'beforeend', element);
							break;

						default:
							break;
					}
				}
				break;
			default:
				break;
		}
	}
}
