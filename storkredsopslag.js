function searchForStorkredsopslag(){

    let resData = document.getElementById("resData");
    let userInput = document.getElementById("userInput").value;
    
    fetch('https://api.dataforsyningen.dk/storkredse/' + userInput)
    .then((response) => response.json())
    .then((data) => {resData.innerHTML = data.navn});
}