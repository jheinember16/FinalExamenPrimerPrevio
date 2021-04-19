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

    var direccion4 = "https://demo6497253.mockable.io/noticias/1";
    //"http://demo6497253.mockable.io/noticias/1"
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
       

  }

    cargarInformacion();


