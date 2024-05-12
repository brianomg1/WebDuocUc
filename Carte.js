let pagina = 1;
const Anterior = document.getElementById('Anterior');
const Siguiente = document.getElementById('Siguiente');

Siguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

Anterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);

		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="peliculas">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula no tengo buscar vacio');
		} else {
			console.log('error que no sabia  que paso?');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();