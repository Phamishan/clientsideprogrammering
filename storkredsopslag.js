function searchForStorkredsopslag() {

    let resData = document.getElementById("resData");
    let userInput = document.getElementById("userInput").value;

    fetch('https://api.dataforsyningen.dk/storkredse/' + userInput)
        .then((response) => response.json())
        .then((data) => {
            if (data.navn === undefined) {
                console.log("Fejl - tallet findes ikke i databasen")
            }
            else {
                resData.innerHTML = data.navn;
                showMap(data.visueltcenter[1], data.visueltcenter[0], data.navn)
            }
        });
}

function showMap(longitude, latitude, storkredsName) {
    document.getElementById('button').addEventListener("click", function () {
        map.remove();
    });

    let map = L.map('map').setView([longitude, latitude], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    if (longitude != 56.311517 && latitude != 9.155959) {
        var marker = L.marker([longitude, latitude]).addTo(map);
        marker.bindPopup(`<b> ${storkredsName} </b>`).openPopup();
    }
}