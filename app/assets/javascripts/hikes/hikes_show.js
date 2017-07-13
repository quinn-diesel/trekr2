
var markers = [];

$(document).ready(function(){

    console.log("loaded.");
    // console.log('test object: ', '<%= @startLocation %>');

    window.onresize = function(event){
        resizeDiv();
    }

    function resizeDiv(){
        vpw = $(window).width();
        $('#mapid').css({'width': vpw});
    }

    ////////////////////////////////////  HIKES SHOW /////////////////////////////////////////

if( $('.hikes.show').length){

    $('#backHikes').on('click', function(){
        window.location.href="/hikes";
    })

    startingWaypoint = waypoints[0];
    console.log(Array.isArray(startingWaypoint));
    var mymap = L.map('mapid').setView(startingWaypoint, 13);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    }).addTo(mymap);

    var leafletPoints = [];

    for(var i = 0; i < waypoints.length; i++) {
      var waypoint = waypoints[i];
      var p = new L.LatLng(waypoint[0], waypoint[1]);
      leafletPoints.push( p );
    }

    var firstpolyline = new L.Polyline(leafletPoints, {
        color: 'red',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    firstpolyline.addTo(mymap);
} // if (single hike show page )


}); // doc ready
