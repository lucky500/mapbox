mapboxgl.accessToken = 'pk.eyJ1IjoibHVja3k1MDAiLCJhIjoiY2l1MnZqcXA0MGh6ZjJ0cncxdnB5NzlpbiJ9.lbwU3q5yzU0W5XcI1NCV1g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 6 // starting zoom
});