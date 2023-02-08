
function httpGet() {
    let userIn = document.getElementById("postNrIn").value;
    let postNrOut = document.getElementById("postNrOut");
    let kommunerOut = document.getElementById("kommunerOut")
    fetch('https://api.dataforsyningen.dk/postnumre/' + userIn)
        .then((response) => response.json())
        .then((data) => { console.log(data.kommuner)
           postNrOut.innerHTML = data.navn
           kommunerOut.InnerHTML = data.kommuner
        })
}
