
var sm;  // scribblemaps object


$(document).ready(function(){

    console.log("new hike loaded.");
    // console.log('test object: ', '<%= @startLocation %>');

    window.onresize = function(event){
        resizeDiv();
    }

    function resizeDiv(){
        vpw = $(window).width();
        $('#mapid').css({'width': vpw});
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
                       // todo: Make sure this overlay is actually a path/line ??
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

          } // if (new hike page)





}); // doc ready
