mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pcmJhbmszMyIsImEiOiJja3l4MWNlbGkwZTIwMzFwdGd0a25pd2diIn0.K7EJ3jBhIL1QrkwdaSiGSA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation , { enableHighAccuracy: true 
})

function successLocation (posittion) {
    console.log(posittion)
    setupMap([posittion.coords.longitude, posittion.coords.latitude])
}
function errorLocation () {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    console.log(center)
    const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center,
        zoom: 15
        })

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav)

        var directions = new MapboxDirections({
            accessToken: 'mapboxgl.accessToken',
          });
          
          map.addControl(directions, 'top-left');
        
}
