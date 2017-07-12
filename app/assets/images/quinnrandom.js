
var sm = new ScribbleMap('mapid', {
          searchControl: true,
          lineSettingsControl: true,
          mapTypeControl: true,
          fillColorControl: false,
          lineColorControl: false,
          zoomControl: true,
          tools: ["menu", "edit", "drag", "eraser", "fill",
                  "scribble", "line",
                  "polygon", "label", "marker", "image"],
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


var coordinates = sm.map.addListener('overlay_added', function(event){
      var overlay = event.data;
      var coords = overlay.getCoords();
      console.log(coords);
}

});
