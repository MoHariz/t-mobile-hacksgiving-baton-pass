
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
let location1;
let location2;
function initMap() {


// Map initialization   ------------------------------------------------------------------------
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;

// Try HTML5 geolocation. ------------------------------------------------------------------------
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
      location1 = pos;
      console.log(location1)
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }


  // Event Listener for click to place marker -----------------------------------------------
 
  var marker = new google.maps.Marker({
    
    map: map,
    title: 'click to add marker'
  });

  map.addListener('click', function(e) {
    marker.setPosition(e.latLng);
    location2 = e.latLng;
    console.log(e.latLng)
  })


}

// Error Handling for geolocation ------------------------------------------------------------------------
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// Get Distance between two points WARNING MAKE SURE NO INFINITE LOOPS --------------------------------------
window.onload = function() {

  console.log("Loaded")
  console.log("position 1" + location1)
  document.getElementById("getDistance").onclick = getDist;


function getDist() {
  console.log("Uncomment code, solve async prob")
  // var service = new google.maps.DistanceMatrixService();



  // service.getDistanceMatrix(
  // {
  //   origins: [map.getCurrentPosition],
  //   destinations: [location2],
  //   travelMode: 'DRIVING',
  //   avoidHighways: Boolean,
  //   avoidTolls: Boolean,
  // }, callback);

  // }

  // function callback(response, status) {
  //   console.log(response);
  // }

}








