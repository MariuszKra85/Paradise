function initMap() {
  const leeds = { lat: 53.807, lng: -1.549 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: leeds,
  });

  const marker = new google.maps.Marker({
    position: leeds,
    map: map,
  });
}
