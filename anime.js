const cargarPeliculas = async() => {
   const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=5dba216a4a48439eb21fa18dd4387501&language=es-MX');

    console.log(respuesta);

}


cargarPeliculas();