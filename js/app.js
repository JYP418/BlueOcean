mapboxgl.accessToken = "pk.eyJ1IjoicGF1bHNjaG9pIiwiYSI6ImNpanltYTR5YzIwamZ2d201eTF6dXd2NGIifQ.VhnYA-RLHhYhw9Fht-HLwA";

var map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/paulschoi/cijymanoy00hvqtkqsngv391z", //stylesheet location
    center: [-118.451784, 34.035947], // starting position
    zoom: 11.66,
    maxZoom: 11.66, // starting zoom
    minZoom: 1.4,
    doubleClickZoom: false,
    dragRotate: false,
    dragPan: false
});


function myFunction() {
    document.querySelector("#header");
}