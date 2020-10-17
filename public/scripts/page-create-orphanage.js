//create map
const map = L.map("mapid").setView([-27.2163379, -49.6546252], 14);

//create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create marker
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//add marker on click
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field (btn)
function addPhotoField() {
  const container = document.querySelector("#images");
  const fieldsContainer = document.querySelectorAll(".new-upload");
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  input.value = "";

  container.appendChild(newFieldContainer);
}

//delete photo field
function deletePhotoField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if(fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

//yes or no select (weekends)
function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  if(document.querySelector('[name="lat"]').value == "" || document.querySelector('[name="lng"]').value == "") {
    event.preventDefault();
    alert("Selecione uma localidade no mapa para continuar");
  }
}
