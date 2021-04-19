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

    var direccion = "https://demo6497253.mockable.io/noticias/1";
    //"http://demo6497253.mockable.io/noticias/1"

    var gg = "https://demo6497253.mockable.io/categoria/deporte";
    //"http://demo6497253.mockable.io/categoria/deporte"

    var jj = "https://demo6497253.mockable.io/categoria/tecnologia";
    //"http://demo6497253.mockable.io/categoria/tecnologia";


    var objeto = "";
    var a= "";
    var b= "";         
      

      leerDireccion(direccion).then((noticias)  => {
        noticias.forEach((noticiasPrincipales) => {
          objeto += `
                
                <h1>${noticiasPrincipales.titulo} </h1>
                <p>${noticiasPrincipales.descripcion}</p> 
                <p>${noticiasPrincipales.detalle}</p>
                <h1>${noticiasPrincipales.categoria} - ${noticiasPrincipales.fecha}</h1>
           
             `;
        });
        
        document.getElementById("objeto").innerHTML = objeto;
      })

    leerDireccion(gg).then((seccionDeportes) => {
        seccionDeportes.forEach((deportes1) => {

          a += ` 
                <h5>${deportes1.titulo}</h5>  
            `;
        });
        document.getElementById("seccionDeportes").innerHTML = a;
      })

    
      leerDireccion(jj).then((seccionTecnologia) => {
        seccionTecnologia.forEach((tecnologias1) => {
          b += ` 
                <h5>${tecnologias1.titulo}</h5>  
            `;
        });
        document.getElementById("seccionTecnologia").innerHTML = b;
      })


       
  }

    cargarInformacion();