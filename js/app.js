// Add mapbox map
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

// Change opacity of the map
$("#map").css({ opacity: 0.9 });

// Fade in Header and Nav after Map loads
map.on("load", function() {
    $("#header").fadeIn(6000);
    $(".navbar").fadeIn(12000);
});

// $(window).on("scroll", function fly() {
//     map.flyTo({
//         center: [-42.455278, 12.096623],
//         zoom: 1
//     });
// });
