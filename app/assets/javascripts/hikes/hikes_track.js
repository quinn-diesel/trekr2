
$(document).ready(function (){

  console.log("hike tracking loaded");


  if( $('body.hikes.track_hike').length) {


    // var options = {
    //   timeout: 1000,
    // };
    //
    // function success(pos){
    //   var crd = pos.coords;
    // };
    //
    // function error(errr){
    //   console.log(`ERROR(${err.code}): ${err.message}`);
    // };


    $('#trackGo').on('click', function (){


      var options = {
        // enableHighAccuracy: true,
        timeout: 1000,
        // maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude;
        var long = crd.longitude;

      console.log('Your current position is:');
      console.log(`Latitude : ${lat}`);
      console.log(`Longitude: ${long}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success);


  //   navigator.geolocation.watchPosition(function(position) {
  //   console.log('loc', position.coords.latitude, position.coords.longitude);
  // }, {timeout: 1000});

    // var marker = new L.marker(e.latlng).addtop

  }); // ON start click

  $('#trackStop').on('click',function (){
    navigator.geolocation.clearWatch();
  });



// GOOGLE MAP //
    var trackMap = L.map('trackMap').setView([-33.804122, 151.246096], 13);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    }).addTo(trackMap);


    // add marker to he current location




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
