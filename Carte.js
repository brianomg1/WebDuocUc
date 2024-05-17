const apiKey = '0980dcf64fcba5b2f25674a5a9b10579'; // Reemplaza con tu clave API real
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'; // URL base para las imágenes

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieResults = document.getElementById('movie-results');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    return;
  }

  fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      if (movies.length === 0) {
        movieResults.innerHTML = '<p>No se encontraron películas.</p>';
        return;
      }

      movieResults.innerHTML = '';
      movies.forEach(movie => {
        const movieTitle = movie.title;
        const moviePosterPath = movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : 'placeholder.jpg'; // Ruta completa del póster


        const movieElement = document.createElement('div');
        movieElement.className = 'movie-result';
        movieElement.innerHTML = `
          <img src="${moviePosterPath}">
          <h3>${movieTitle}</h3>
        `;

        movieResults.appendChild(movieElement);
      });
    })
    .catch(error => console.error('Error:', error));
});


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
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log(' pelicula que buscas no tengo ');
		} else {
			console.log('error no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();