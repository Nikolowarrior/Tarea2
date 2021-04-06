function submit() {
	params = new URLSearchParams(document.location.search.substring(1));
	nombres = params.get("nombres");
	if (nombres != null) {
		formulario = document.getElementById("formulario");
		formulario.style.visibility = "hidden";
		formulario.style.height = "0px";
		datosRecibidos = document.getElementById("datosRecibidos");
		datosRecibidos.style.visibility="visible";
	}
}