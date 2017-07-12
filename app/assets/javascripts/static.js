
$(document).ready(function () {

    if( $('.static.show').length){

        var mymap = L.map('welcomeMap').setView([-33.804122, 151.246096], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.pirate',
            accessToken: 'pk.eyJ1IjoicXVpbm5kcmljayIsImEiOiJjajR4Z2s3b3Yxajg4MnFxcGpnd3owMW4zIn0.MggRMIsoIc9X5Iga_MLEPw'
    }).addTo(mymap);

    }; //if (static show page)
}); // doc ready
