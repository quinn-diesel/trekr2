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


//========================================================================
//some code below from: http://plnkr.co/edit/YjcPKL7kB1bIByu7QJ2u?p=preview
//========================================================================


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

     places.forEach(function(place) {

      mymap.flyTo([
         place.geometry.location.lat(),
         place.geometry.location.lng()
     ]); // flytTo method
   }); //forEach loop


    }); //Search box event listener

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


}); // document ready
