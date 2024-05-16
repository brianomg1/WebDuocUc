const cargarPeliculas = async() => {

    try{

        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=5dba216a4a48439eb21fa18dd4387501&language=es-MX');

        console.log(respuesta);

        if(respuesta.status ===200){
            const datos= await respuesta.json();
            console.log(datos.title);
        }

    }catch(error){
        console.log(error);
    }
   
}


cargarPeliculas();