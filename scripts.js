mapboxgl.accessToken = apiKey;
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 6 // starting zoom
});