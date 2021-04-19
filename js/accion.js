async function leerDireccion(direccion) {
    try {
      let response = await fetch(direccion);
      let user = await response.json();
      return user;
    } catch (err) {
      alert(err);
    }
  }


  function cargarInformacion() {
    var direccion = "https://demo6497253.mockable.io/noticias";
    //http://demo6497253.mockable.io/noticias"

    var direccion2 = "https://demo6497253.mockable.io/categoria/deporte";
    //"http://demo6497253.mockable.io/categoria/deporte"

    var direccion3 = "https://demo6497253.mockable.io/categoria/tecnologia";
    //"http://demo6497253.mockable.io/categoria/tecnologia";
    
    var objeto = "";
    var a= "";
    var b= "";
    
      
      leerDireccion(direccion2).then((seccionDeportes) => {

        seccionDeportes.forEach((deportes1) => {
          a += ` 
                <h5>${deportes1.titulo}</h5>  
            `;
        });
        document.getElementById("seccionDeportes").innerHTML = a;
      })
      // Para tecnologias
      leerDireccion(direccion3).then((seccionTecnologia) => {
        seccionTecnologia.forEach((tecnologias1) => {
          b += ` 
                <h5>${tecnologias1.titulo}</h5>  
            `;
        });
        document.getElementById("seccionTecnologia").innerHTML = b;
      })
      
      leerDireccion(direccion).then((noticias) => {
        noticias.forEach((noticiasPrincipales) => {
          objeto += `
                <img>${noticiasPrincipales.img}</img>
                <h1>${noticiasPrincipales.titulo} - ${noticiasPrincipales.categoria} - ${noticiasPrincipales.fecha}</h1>
                <p>${noticiasPrincipales.descripcion}</p>  
                <a href="contenidoNoticia.html">Ver más</a>
            `;
        });
        
        document.getElementById("objeto").innerHTML = objeto;
      })
       

  }

    cargarInformacion();


