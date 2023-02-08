
function httpGet() {
    let userIn = document.getElementById("postNrIn").value;
    let postNrOut = document.getElementById("postNrOut");
    let kommunerOut = document.getElementById("kommunerOut")
    fetch('https://api.dataforsyningen.dk/postnumre/' + userIn)
        .then((response) => response.json())
        .then((data) => {
            let i = 0;
            let s = "";
            //s = s + data.kommuner[0].navn;
            let k = 1;
            console.log(data.kommuner[i].navn)
            postNrOut.innerHTML = data.navn
            while (i < data.kommuner.length) {
                if (i < 1) {
                    s = s + data.kommuner[0].navn;
                }
                if (i >= 1) {
                    s = s + ", " + data.kommuner[i].navn
                }
                i++;
            }
            kommunerOut.innerHTML = s;
        })
}
