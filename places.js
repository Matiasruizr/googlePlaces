// KEY: AIzaSyBoMaVXrm7hwz15R4bJWZebaf6iSV07Wi0 
// AIzaSyCoEz-WUnQHnqUMjot5oHvnT9LmvRG_95w
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCoEz-WUnQHnqUMjot5oHvnT9LmvRG_95w
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Bank%20Chile&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCoEz-WUnQHnqUMjot5oHvnT9LmvRG_95w
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCoEz-WUnQHnqUMjot5oHvnT9LmvRG_95w
// Scotiabank
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=Scotiabank&location=-33.5346427,-70.6307518&radius=10000&key=AIzaSyCoEz-WUnQHnqUMjot5oHvnT9LmvRG_95w





function initMap() {
  // En este objeto cargamos todas las opciones para nuestro mapa 
  var center =  {lat: -33.5346427, lng: -70.6307518}
  var options = {
    center: center,
    zoom: 13
  }
  // Esta variable de tipo Map, carga nuestro mapa en el objeto html
  // seleccionado, y le envia las opciones
  var map = new google.maps.Map(document.getElementById('mapa') , options) ;

  // Funcion para crear marcador, le pasamos "props" por parametros
  // utilizaremos props.icono para el icono y props.cordenadas para las cords
  const addMarker = (props) => {
    var marker = new google.maps.Marker({
        position: props.cordenadas,
        map:map,
        icon: props.icono
    })
 
    var infoWindow = new google.maps.InfoWindow({
        content: props.content
    })

    marker.addListener('click', function(){
    infoWindow.open(map, marker);
    })
  }


  var bEstado = {
    location: center,
    radius: '1000',
    query: 'bancoestado'
  };

  var bItau = {
    location: center,
    radius: '1000',
    query: 'itau'
  };
  var bBCI = {
    location: center,
    radius: '1000',
    query: 'bci'
  };
  var cStarbucks = {
    location: center,
    radius: '1000',
    query: 'Starbucks'
  };
  var fSalcobrand = {
    location: center,
    radius: '1000',
    query: 'Salcobrand'
  };


  var service = new google.maps.places.PlacesService(map);
  service.textSearch(bEstado, callback);
  service.textSearch(bItau, callbackItau );
  service.textSearch(bBCI, callbackBCI);
  service.textSearch(cStarbucks, callbackStarbucks);
  service.textSearch(fSalcobrand, callbackSalcobrand);

  

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addMarker({cordenadas:results[i].geometry.location, icono:`./icono/bancoestado.png`, content: results[i].name});
        // console.log(results[i])
      }
    }
  }
  function callbackItau(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addMarker({cordenadas:results[i].geometry.location, icono:`./icono/itau.png`, content: results[i].name});
        // console.log(results[i])
      }
    }
  }

  function callbackBCI(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addMarker({cordenadas:results[i].geometry.location, icono:`./icono/bci.png`, content: results[i].name});
        // console.log(results[i])
      }
    }
  }
  function callbackStarbucks(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addMarker({cordenadas:results[i].geometry.location, icono:`./icono/starbucks.png`, content: results[i].name});
        // console.log(results[i])
      }
    }
  }
  function callbackSalcobrand(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addMarker({cordenadas:results[i].geometry.location, icono:`./icono/salcobrand.png`, content: results[i].name});
        // console.log(results[i])
      }
    }
  }
  // var service = new.google.maps.places.PlacesService(map)
  

  // Utiliza el servicio de google places, y busca la peticion (creada arriba)
  // service.nearbySearch(request, callback)

    // addMarker({
    //   cordenadas:{lat: -33.5346427, lng: -70.6307518},
    //   icono:'./bancoEstado.png',
    //   content:'<h1>Banco estado</h1><h2>wena wena</h2>'
    // })



  }

