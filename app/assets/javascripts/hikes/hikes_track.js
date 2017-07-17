
$(document).ready(function (){


  console.log("hike tracking loaded");



  if( $('body.hikes.track_hike').length) {

    $('#trackGo').on('click', function (){

      navigator.geolocation.watchPosition(function(position) {
      console.log('loc', position.coords.latitude, position.coords.longitude);
      }, null, {timeout: 2000});

    });




// GOOGLE MAP //
    var trackMap = L.map('trackMap').setView(startingWaypoint, 13);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    }).addTo(mymap);



  }// IF FUNCTION



});// DOC READY FUNCTION







///////////////// EXAMPLE //////////////////////////

// function geoFindMe() {
//   var output = document.getElementById("out");
//
//   if (!navigator.geolocation){
//     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//     return;
//   }
//
//   function success(position) {
//     var latitude  = position.coords.latitude;
//     var longitude = position.coords.longitude;
//
//     output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
//
//     var img = new Image();
//     img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
//
//     output.appendChild(img);
//   }
//
//   function error() {
//     output.innerHTML = "Unable to retrieve your location";
//   }
//
//   output.innerHTML = "<p>Locating…</p>";
//
//   navigator.geolocation.getCurrentPosition(success, error);
// }

/////////// OLD DEAD CODE //////////////

// var geo_options = {
//   timeout: 10
// } ;

// var latitude = position.coords.latitude;
// var longitude = position.coords.longitude;
// var geoLocation = navigator.geoLocation;
//
// var newLocation = if ("geolocation" in navigator){
//   geoLocation.getCurrentPosition(function(position){
//     console.log("lat1 : " + latitude + "long1: " + longitude);
//   });
//
// var currentLocation = function (){
//   if ("geolocation" in navigator) {
//     geoLocation.getCurrentPosition(function(position){
//       console.log("lat2: " + latitude + "long2: " + longitude);
//     });
//   } else {
//     console.log('tracking is unavailable');
//   }
// };

// var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
