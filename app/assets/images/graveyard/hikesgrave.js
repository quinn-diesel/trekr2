
console.log("loaded.");

$(document).ready(function(){

    console.log("loaded.");

window.onresize = function(event){
    resizeDiv();
}

if( $('.hikes.index').length ){
  page-specific code to run


    var mymap = L.map('mapid').setView([-33.804122, 151.246096], 13);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    }).addTo(mymap);


    L.marker([-33.804122, 151.246096]).addTo(mymap)
       .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
       .openPopup();


    var points = [
        [-33.804122, 151.246096],
        [-33.806985, 151.251374],
        [-33.798827, 151.282705]
    ];

    var leafletPoints = [];

    for(var i = 0; i < points.length; i++) {
      var point = points[i];
      var p = new L.LatLng(point[0], point[1]);
      leafletPoints.push( p );
    }

    var firstpolyline = new L.Polyline(leafletPoints, {
        color: 'red',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    firstpolyline.addTo(mymap);


}

  function resizeDiv(){
      vpw = $(window).width();
      $('#mapid').css({'width': vpw});
  }

  window.scribblemaps = {
      settings:
          {
              "baseAPI": "google",
              "key": "AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg"
          }
  }



  window.onload = function () {
              var sm = new ScribbleMap(document.getElementById('mapid'));
          }
  }

}); // doc ready
//
// var gmapsLoaded = function(){
//     window.scribblemaps = {
//        settings:
//            {
//                "baseAPI": "google",
//                "key": "AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg"
//            }
//     }
//     var sm = new ScribbleMap(document.getElementById('mapid'));
// };
