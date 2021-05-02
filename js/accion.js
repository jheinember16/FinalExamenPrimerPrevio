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
    let i = 0;
    let j = 0;
    let z = 0;


     
      
      leerDireccion(direccion2).then((seccionDeportes) => {
        seccionDeportes.forEach((deportes1) => {
            if(i<3){  
          a += ` 
                <li class="list-group-item" ${deportes1.categoria}"> 
              ${deportes1.titulo}</li>`;
            i++;
          }
        });
        document.getElementById("seccionDeportes").innerHTML = a;
      })

      // Para tecnologias
      leerDireccion(direccion3).then((seccionTecnologia) => {
        seccionTecnologia.forEach((tecnologias1) => {

             if(j<3){  

          b += `

                <li class="list-group-item" ${tecnologias1.categoria}">
                ${tecnologias1.titulo}</li>  
            `;
            j++;
          }
        });
        document.getElementById("seccionTecnologia").innerHTML = b;
      })

      leerDireccion(direccion).then((noticias) => {
        noticias.forEach((noticiasPrincipales) => {    
          if(z<3){               

          objeto += ` <div class="card col-12 mt-2" >                        
              <div class="card-body">
                <h5 class="card-title">${noticiasPrincipales.titulo} - ${noticiasPrincipales.categoria} - ${noticiasPrincipales.fecha}</h5>
                <p class = "card-text">
                  ${noticiasPrincipales.descripcion}
                  </p>  
                <a href="contenidoNoticia.html">Ver más</a>
                </div> 
              </div>  
            `; 
            z++;
            }       
          
        });        
        document.getElementById("objeto").innerHTML = objeto;
      })


      
  }

    cargarInformacion();


