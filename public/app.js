var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -41.286, lng: 174.776
        },
        zoom: 8
    });
}