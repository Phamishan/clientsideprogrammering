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
                resData.innerHTML = data.navn
            }
        });
}