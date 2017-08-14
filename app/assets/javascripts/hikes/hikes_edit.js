var sm;  // scribblemaps object

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

    ////////////////////////////////////  EDIT HIKE  /////////////////////////////////////////

    // for(var i = 0; i < waypoints.length; i++) {
    //   var waypoint = waypoints[i];
    //   var p = (waypoint[0], waypoint[1]);
    //   leafletPoints.push( p );
    // }

    if( $('.hikes.edit').length){

    startWaypoint = waypoints[0];
    window.scribblemaps = {
          settings: {
              baseAPI: 'leaflet',
              accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
              baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}'
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
                startCenter: startWaypoint,
                startZoom: 14,
                // startMapType: "road",
                disableZoom: false,
                settings: {
                    baseAPI: 'leaflet',
                    accessToken: 'AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg',
                    baseLayer: 'http://mt0.google.com/vt/key=AIzaSyB4e1KgLbKlIWzhOiPoJcBW6v_02e6fwCg&lyrs=p&x={x}&y={y}&z={z}'
                }

            });

            var o = sm.draw.line(waypoints);

       $('#updateHike').on('click', function(){

           if($('#hikeName').val()){
               var hikeName = $("#hikeName").val();
               var hikeDesc = $("#hikeDesc").val();
           }

           var hikeID = $(this).attr('hike-id');

           // Save hike path if a path has been drawn
           var overlays = sm.map.getOverlays();
           console.log(overlays);
           if(overlays.length > 0){
               //todo: Make sure this overlay is actually a path/line ??
               var first_path = overlays[0];
               var path_coords = first_path.getCoords();

               var ajax_data = [];

               for (var i = 0; i < first_path.length; i++) {
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
                   url: "/hikes/updatepoints",
                   method: "POST",
                   data: {
                       waypoints: ajax_data,
                       name: hikeName,
                       description: hikeDesc,
                       hike_id: hikeID
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

     }   // if (edit hike page)

    }); // doc ready
