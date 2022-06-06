// import * as g from "_globals";

export const insertStorie = (data) => {
	const stories = data.stories;

	for (let sto of stories) {
		let url = 'data/'+sto.avatar;
		// let url = '../data/'+sto.avatar;
		let storie = `
			<div class="stories" id="stories-${stories.indexOf(sto)}">
				<div class="sto-border" id="sto-border-${stories.indexOf(sto)}"><img src="${url}" class="sto-img" id="sto-img-${stories.indexOf(sto)}"></div>
				<span class="sto-title" id="sto-title-${stories.indexOf(sto)}">${sto.nombre}</span>
			</div>`;
		document.getElementById("stories").insertAdjacentHTML('beforeend' ,storie);
	}
}
