mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bHNjaG9pIiwiYSI6ImNpanltYTR5YzIwamZ2d201eTF6dXd2NGIifQ.VhnYA-RLHhYhw9Fht-HLwA';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/paulschoi/cijymanoy00hvqtkqsngv391z', //stylesheet location
    center: [-118.451784, 34.035947], // starting position
    zoom: 11.66 // starting zoom
});


// Construct a bounding box for this map that the user cannot
// move out of
var southWest = L.latLng(34.035947, -118.451784),
    northEast = L.latLng(34.035947, -118.451784),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'mapbox.streets', {
    // set that bounding box as maxBounds to restrict moving the map
    // see full maxBounds documentation:
    // http://leafletjs.com/reference.html#map-maxbounds
    maxBounds: bounds,
    maxZoom: 11.66,
    minZoom: 0.45
});

// zoom the map to that bounding box
map.fitBounds(bounds);

