function initMap() {
    console.log("i'm here");
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 8
    });
}