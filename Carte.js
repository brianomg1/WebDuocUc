let pagina = 1;
    
    const Anterior = document.getElementById('Anterior')
    const Siguiente = document.getElementById('Siguiente')

    Siguiente.addEventListener('click',() => {
        if (pagina < 1000){
            pagina +=1;
            bookesCARD();
        }
    });

    Anterior.addEventListener('click',()=>{
        if(pagina > 1){
            pagina -=1;
            bookesCARD();
        }
    });

    const bookesCARD = async() => {
        try{
            const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

            console.log(respuesta);
            if(respuesta.status===200){
                const datos=await respuesta.json();

                let peliculas = '';
                datos.results.forEach(peliculas => {
                    peliculas+=`
                    <div class="peliculas">
                    <img class = "poster" src= "//image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class = "pelicasbookes">${peliculas.title}</h3>
                    </div>
                    `;
                });
                document.getElementById('contenedor').innerHTML=peliculas;

            }   else if (respuesta.status === 401){
                console.log(' llave muy mal');

            } else if (respuesta.status === 404){
                console.log('pelicula no hay buscar');
            } else {
                console.log('un error no sabia que paso?')
            }

          } catch(error){
		console.log(error);
	}

}

cargarPeliculas();