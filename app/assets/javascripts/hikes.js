
console.log("loaded.");


var sm;  // scribblemaps object

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


    /////////////////////////////////////////// HIKES INDEX CODE ///////////////////////////////////////////
  if( $('.hikes.index').length){
  // page-specific code to run

    //
    var mymap = L.map('mapid'); //.setView([-33.804122, 151.246096], 13);

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/key={accessToken}&lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg'
    }).addTo(mymap);


//=====================================================================
//code from: http://plnkr.co/edit/YjcPKL7kB1bIByu7QJ2u?p=preview

    var GoogleSearch = L.Control.extend({
     onAdd: function() {
       var element = document.createElement("input");

       element.id = "searchBox";

       return element;
     }
   });

   (new GoogleSearch).addTo(mymap);

   var input = document.getElementById("searchBox");

   var searchBox = new google.maps.places.SearchBox(input);

   searchBox.addListener('places_changed', function() {
     var places = searchBox.getPlaces();

     if (places.length == 0) {
       return;
     }

     var group = L.featureGroup();

     places.forEach(function(place) {

       // Create a marker for each place.
       console.log(places);
       console.log(place.geometry.location.lat() + " / " + place.geometry.location.lng());
       var marker = L.marker([
         place.geometry.location.lat(),
         place.geometry.location.lng()
       ]);
       group.addLayer(marker);
     });

     group.addTo(mymap);
     mymap.fitBounds(group.getBounds());

   });


//=====================================================================
    // var searchLayer = L.geoJson()
    // // // //... adding data in searchLayer ...
    // L.map('mapid', { searchControl: {layer: searchLayer} });


    console.log('hikes', hikes);
    // the 'hikes' array of hikes is initialised in app/view/hikes/index.html.erb
    for (var i = 0; i < hikes.length; i++) {
      var hike = hikes[i];
      if(!hike.start_point) {
        continue;
      }
      console.log('hike:', hike);
      var m = L.marker( [ hike.start_point.lat, hike.start_point.long   ] ).addTo(mymap)
         .bindPopup('<h2>' + hike.name + '</h2>' + hike.description + '<br><a href="/hikes/' + hike.id + '">View</a>')
         .openPopup();

       markers.push( m );

    }

    var group = new L.FeatureGroup( markers );
    mymap.fitBounds( group.getBounds() );


    }

        ////////////////////////////////////  HIKES NEW //////////////////////////////////////////////
    if( $('.hikes.new').length){
    //
    window.scribblemaps = {
          settings: {
              baseAPI: 'leaflet',
            //   baseLayerType: "<YourMapTypeID>",
            //   token: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
              accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
              baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}',
               //'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}@2x?access_token=<Your Mapbox Token>'
          }
      }

    //   var sm = new ScribbleMap(document.getElementById('mapid'));
             sm = new ScribbleMap('mapid', {
                searchControl: false,
                lineSettingsControl: false,
                mapTypeControl: true,
                fillColorControl: false,
                lineColorControl: false,
                zoomControl: true,
                tools: ["edit", "drag", "eraser",
                        "scribble", "marker", "image"],
                defaultTool: "edit",
                startCenter: [ -33.804122, 151.246069 ],
                startZoom: 7,
                // startMapType: "road",
                disableZoom: false,
                settings: {
                    baseAPI: 'leaflet',
                    accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
                    baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}'
                }

            });


         ////////////////////////////////////  SAVE HIKE  /////////////////////////////////////////
        $('#saveHike').on('click', function(){

            if($('#hikeName').val()){
                var hikeName = $("#hikeName").val();
                var hikeDesc = $("#hikeDesc").val();
            }
            // Save hike path if a path has been drawn
            var overlays = sm.map.getOverlays();

            if(overlays.length > 0){
                // TODO: Make sure this overlay is actually a path/line ??
                var first_path = overlays[0];
                var path_coords = first_path.getCoords();

                var ajax_data = [];

                for (var i = 0; i < path_coords.length; i++) {
                    var coord = path_coords[i];
                    // console.log('lat:', coord.lat(), 'lng:', coord.lng());
                    var point = {
                      lat: coord.lat(),
                      lng: coord.lng()
                    };
                    ajax_data.push( point );
                }
                console.log(ajax_data);

                // Make AJAX call using $.ajax()

                $.ajax({
                    url: "/hikes/savepoints",
                    method: "POST",
                    data: {
                        waypoints: ajax_data,
                        name: hikeName,
                        description: hikeDesc
                     },
                     datatype: "json"
                })
                .done(function(res){
                    // debugger;
                    window.location.href="/hikes";
                    console.log(res);
                })
                .fail(function(xhr, status, error){
                    console.log(xhr, status, error);
                });


            } // overlays.length test

        });


        ////////////////////////////////////  HIKES SHOW /////////////////////////////////////////
    } // if (new hike page)
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
