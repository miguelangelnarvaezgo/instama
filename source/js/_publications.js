import * as g from "_globals";

export const insertPublication = (data) => {
	const pubs = data.publicaciones;

	for (let pub of pubs){
		let url = 'data/'+pub.img;
		let download = 'data/'+pub.dw;
		// let url = '../data/'+pub.img;
		// let download = '../data/'+pub.dw;
		let count = new Number;
		let post = '';

		count = pub.comentarios.length;
		let comments = pub.comentarios;
		for (let i = 0; i < pub.comentarios.length; i++) {
			count = count + comments[i].respuestas.length;
		}

		if (pub.dw == "") {
			post =
				 `<div id="publications-${pubs.indexOf(pub)}" class="publications">
						<img src="${url}" id="pub-img-${pubs.indexOf(pub)}" class="pub-img">

						<div id="overlay-data-publication-${pubs.indexOf(pub)}" class="overlay-data-publications">
							<div id="likes-info-${pubs.indexOf(pub)}" class="icon-info-1">
								<svg width="22px" height="22px" viewBox="0 0 512 456" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g id="like-icon-${pubs.indexOf(pub)}" class="icon-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<path class="icon-path" fill="#000000" fill-rule="nonzero" d="M471.382812,44.578125 C444.878906,15.832031 408.511719,0 368.972656,0 C339.417969,0 312.351562,9.34375 288.523438,27.769531 C276.5,37.070312 265.605469,48.449219 256,61.730469 C246.398438,48.453125 235.5,37.070312 223.472656,27.769531 C199.648438,9.34375 172.582031,0 143.027344,0 C103.488281,0 67.117188,15.832031 40.613281,44.578125 C14.425781,72.988281 2.84217094e-14,111.800781 2.84217094e-14,153.871094 C2.84217094e-14,197.171875 16.136719,236.808594 50.78125,278.613281 C81.773438,316.007812 126.316406,353.96875 177.898438,397.925781 C195.511719,412.9375 215.476562,429.953125 236.207031,448.078125 C241.683594,452.875 248.710938,455.515625 256,455.515625 C263.285156,455.515625 270.316406,452.875 275.785156,448.085938 C296.515625,429.957031 316.492188,412.933594 334.113281,397.914062 C385.6875,353.964844 430.230469,316.007812 461.222656,278.609375 C495.867188,236.808594 512,197.171875 512,153.867188 C512,111.800781 497.574219,72.988281 471.382812,44.578125 Z"></path>
										</g>
								</svg>
								<span is="likes-num-${pubs.indexOf(pub)}" class="likes-num"> ${pub.likes} </span>
							</div>

							<div id="comments-info-${pubs.indexOf(pub)}" class="icon-info-2">
								<svg width="22px" height="22px" viewBox="0 0 133 131" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g id="comment-icon-${pubs.indexOf(pub)}" class="icon-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<path class="icon-path" fill="#000000" d="M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z" ></path>
										</g>
								</svg>
								<span is="comments-num-${pubs.indexOf(pub)}" class="comments-num"> ${count} </span>
							</div>
						</div>

					</div>`;
		} else {
			post =
				 ` <div id="publications-${pubs.indexOf(pub)}" class="publications">
						<a href="${download}" download="${pub.dw}"><img src="${url}" id="pub-img-${pubs.indexOf(pub)}" class="pub-img"></a>

						<div id="overlay-data-publication-${pubs.indexOf(pub)}" class="overlay-data-publications">
							<div id="likes-info-${pubs.indexOf(pub)}" class="icon-info-1">
								<svg width="22px" height="22px" viewBox="0 0 512 456" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g id="like-icon-${pubs.indexOf(pub)}" class="icon-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<path class="icon-path" fill="#000000" fill-rule="nonzero" d="M471.382812,44.578125 C444.878906,15.832031 408.511719,0 368.972656,0 C339.417969,0 312.351562,9.34375 288.523438,27.769531 C276.5,37.070312 265.605469,48.449219 256,61.730469 C246.398438,48.453125 235.5,37.070312 223.472656,27.769531 C199.648438,9.34375 172.582031,0 143.027344,0 C103.488281,0 67.117188,15.832031 40.613281,44.578125 C14.425781,72.988281 2.84217094e-14,111.800781 2.84217094e-14,153.871094 C2.84217094e-14,197.171875 16.136719,236.808594 50.78125,278.613281 C81.773438,316.007812 126.316406,353.96875 177.898438,397.925781 C195.511719,412.9375 215.476562,429.953125 236.207031,448.078125 C241.683594,452.875 248.710938,455.515625 256,455.515625 C263.285156,455.515625 270.316406,452.875 275.785156,448.085938 C296.515625,429.957031 316.492188,412.933594 334.113281,397.914062 C385.6875,353.964844 430.230469,316.007812 461.222656,278.609375 C495.867188,236.808594 512,197.171875 512,153.867188 C512,111.800781 497.574219,72.988281 471.382812,44.578125 Z"></path>
										</g>
								</svg>
								<span is="likes-num-${pubs.indexOf(pub)}" class="likes-num"> ${pub.likes} </span>
							</div>

							<div id="comments-info-${pubs.indexOf(pub)}" class="icon-info-2">
								<svg width="22px" height="22px" viewBox="0 0 133 131" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g id="comment-icon-${pubs.indexOf(pub)}" class="icon-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<path class="icon-path" fill="#000000" d="M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z" ></path>
										</g>
								</svg>
								<span is="comments-num-${pubs.indexOf(pub)}" class="comments-num"> ${count} </span>
							</div>
						</div>

					</div>`;
		}

		document.getElementById("content-container").insertAdjacentHTML('beforeend' ,post);

	}
	window.setTimeout(g.resizeElement('publications', 'pub-img'), 500);
	// g.resizeElement('publications', 'pub-img');
}


export const insertIgtv = (data) => {
  let igtvs = data.igtv;

  for (let igtv of igtvs){
    let url = 'data/'+igtv.img;
    // let url = '../data/'+igtv.img;
    let count = new Number;

		count = igtv.comentarios;
		// count = igtv.comentarios.length;
		// let comments = igtv.comentarios;
		// for (let i = 0; i < igtv.comentarios.length; i++) {
		// 	count = count + comments[i].respuestas.length;
		// }

    let post = `
      <div id="igtv-${igtvs.indexOf(igtv)}" class="igtv">
        <img src="${url}" id="igtv-img-${igtvs.indexOf(igtv)}" class="igtv-img">

        <div id="overlay-data-publication-${igtvs.indexOf(igtv)}" class="overlay-data-publications">

          <div id="play-info-${igtvs.indexOf(igtv)}" class="icon-info-1">
            <svg width="22px" height="22px" viewBox="0 0 372 495" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="play-icon-${igtvs.indexOf(igtv)}" class="icon-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path class="icon-path" fill="#000000" fill-rule="nonzero" d="M344.284,201.188 L69.804,13.28 C57.128,4.596 44.356,0 33.74,0 C13.216,0 0.52,16.472 0.52,44.044 L0.52,450.168 C0.52,477.708 13.2,494.148 33.676,494.148 C44.308,494.148 56.876,489.548 69.58,480.84 L344.188,292.936 C361.848,280.832 371.628001,264.544 371.628001,247.052 C371.632,229.572 361.964,213.288 344.284,201.188 Z" ></path>
                </g>
            </svg>
            <span is="plays-num-${igtvs.indexOf(igtv)}" class="play-num"> ${igtv.replay} </span>
          </div>

          <div id="comments-info-${igtvs.indexOf(igtv)}" class="icon-info-2">
            <svg width="22px" height="22px" viewBox="0 0 133 131" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="comment-icon-${igtvs.indexOf(igtv)}" class="icon-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path class="icon-path" fill="#000000" d="M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z" ></path>
                </g>
            </svg>
            <span is="comments-num-${igtvs.indexOf(igtv)}" class="comments-num"> ${count} </span>
          </div>

        </div>

      </div>
    `
    document.getElementById("content-container").insertAdjacentHTML('beforeend' ,post);

  }
	g.resizeElement('igtv', 'igtv-img', 0.644);
}

//Se detectan cambios en el ancho del navegador pr daptar ajustar el alto de las publicaciones. Las publicaciones deben tener igual ancho que alto con independencia de ancho del navegador.
window.onresize = () => {
  g.resizeElement('publications', 'pub-img');
  g.resizeElement('igtv', 'igtv-img', 0.644);
}
