# googlePlaces


Como usar google places, aplicaciones y ejemplos

Gran parte de esta guía esta basada en: https://developers.google.com/maps/documentation/
Esto es mi forma de entender la API y mis ejemplos utilizados para dominar el funcionamiento de esta.

Debemos cargar la Libreria de google maps cuando queramos utilizarla al final de nuestro body con:
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTU_API_KEYoMaVXrm7hwz15R4bJWZebaf6iSV07Wi0&callback=initMap"
    async defer></script>
  
En nuestro archivo JavaScript (cargado ANTES que la libreria) cargamos la función básica para utilizar un mapa:

La Función es initMap() en ella creamos las opciones ( options ), que es un objeto con todas las opciones necesaria para configurar nuestro mapa, ej: center, zoom, etc.

Además creamos la variable map, donde creamos el objeto google,maps.Map() aca pasamos el elementod e html donde ira el mapa, y las opciones que creamos en el objeto previo.

function initMap() {
  var options = {
    center: {lat: -33.4724727, lng: 70.9100285},
    zoom: 8
  }
  var map = new google.maps.Map(document.getElementById('mapa') , options) ;
}

A nuestro objeto "mapa" en html tenemos que darle un width y height para que se pueda ver

# Marcadores 
Para crear un marcador, creamos la variable de este y llamamos al objeto google.maps.Marker, le pasamos los parametros position, el mapa donde queremos cargarlo, y algunos opcionales, en este caso, el icono que este tendrá.

 // Agregar marcador
  var marker = new google.maps.Marker({
      position:{lat: -33.4724727, lng: -70.9100285},
      map:map,
      icon: "./bancoEstado.png"
  })
  
  
# Ventana informativa
 Creamos la variable de esta ventana, y llamamos al objeto google,maps.InfoWindow, por parametro le pasamos el content al cual le cargamos codigo html
 
 // Agregar ventana informativa 
  var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Banco estado</h1>'
  })
  
Luego creamos el listener para el objeto donde queremos que se habra esta ventana informativa, le decimos a marker, que cada vez que sea clickeado habra esta ventana
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  })  
  
  # Función para crear marcadores de manera eficiente
    const addMarker = (props)=> {
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
      
Ahora simplemente creamos un marcador usando:

    addMarker({
      cordenadas:{lat: -33.4724727, lng: -70.9100285},
      icono:'./bancoEstado.png',
      content:'<h1>Banco estado</h1><h2>wena wena</h2>'
    })
