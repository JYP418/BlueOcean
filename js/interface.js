// MAPBOX JS
L.mapbox.accessToken = 'pk.eyJ1IjoicGF1bHNjaG9pIiwiYSI6ImNpanltYTR5YzIwamZ2d201eTF6dXd2NGIifQ.VhnYA-RLHhYhw9Fht-HLwA';
// set variable for container id.setView([Lat, Long], start zoom);
var map = L.mapbox.map('map').setView([34.023126, -118.453823], 13);
    
// stylesheet location
L.mapbox.styleLayer('mapbox://styles/paulschoi/cijymanoy00hvqtkqsngv391z').addTo(map);

map.options.maxZoom = 13;
map.options.minZoom = 2;

// disable dragging
map.dragging.disable();
map.doubleClickZoom.disable();
map.keyboard.disable();

// remove Zoom Control up and down arrows
map.removeControl(map.zoomControl);


