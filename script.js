//#region unsplash API
const clientId = "BwbPJ5iMWHjY-Ecu4BnizmQTIgybna3i6cHo1mgD41g";

const myImg = document.querySelectorAll(".myImg");
const myImgId = [
    "k8pbRSAzoS0",
];

const loadImages = () => {
    const fetchPromises = myImgId.map((imgId, index) => {
        return fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                myImg[index].src = data.urls.regular;
            })
            .catch((error) => console.error("Error fetching image:", error));
    });

    Promise.all(fetchPromises)
        .then(() => {
            console.log("All images loaded successfully.");
        })
        .catch((error) => {
            console.error("Error loading images:", error);
        });
};
loadImages();
//#endregion
