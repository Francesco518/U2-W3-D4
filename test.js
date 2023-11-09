document
  .getElementById("loadImages")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://api.pexels.com/v1/search?query=lion", {
      headers: {
        Authorization:
          "aDRLciys6pwvOG7Zcn36SrmLaqcVNkvWT99fgFTajBYYZJyTCQLbLR67",
      },
    })
      .then((response) => response.json())
      .then((chart) => {
        const container1 = document.getElementById("imageContainer1");
        const container2 = document.getElementById("imageContainer2");
        const container3 = document.getElementById("imageContainer3");
        const container4 = document.getElementById("imageContainer4");
        const container5 = document.getElementById("imageContainer5");
        const container6 = document.getElementById("imageContainer6");
        const container7 = document.getElementById("imageContainer7");
        const container8 = document.getElementById("imageContainer8");
        const container9 = document.getElementById("imageContainer9");

        container1.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";

        chart.url.forEach((photo, index) => {
          const img = document.createElement("img");
          img.src = photo.url;
          img.alt = photo.photographer_id;
          img.style.width = "100px";
          img.style.margin = "5px";

          const targetContainer =
            (index / 9) % 2 === 0 ? container1 : container2;
          targetContainer.appendChild(img);
        });
      });
  });
document
  .getElementById("loadImages")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://api.pexels.com/v1/search?query=tigers", {
      headers: {
        Authorization:
          "aDRLciys6pwvOG7Zcn36SrmLaqcVNkvWT99fgFTajBYYZJyTCQLbLR67",
      },
    })
      .then((response) => response.json())
      .then((chart) => {
        const container1 = document.getElementById("imageContainer1");
        const container2 = document.getElementById("imageContainer2");
        const container3 = document.getElementById("imageContainer3");
        const container4 = document.getElementById("imageContainer4");
        const container5 = document.getElementById("imageContainer5");
        const container6 = document.getElementById("imageContainer6");
        const container7 = document.getElementById("imageContainer7");
        const container8 = document.getElementById("imageContainer8");
        const container9 = document.getElementById("imageContainer9");

        container1.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";

        chart.url.forEach((photo, index) => {
          const img = document.createElement("img");
          img.src = photo.url;
          img.alt = photo.photographer_id;
          img.style.width = "100px";
          img.style.margin = "5px";

          const targetContainer =
            (index / 9) % 2 === 0 ? container1 : container2;
          targetContainer.appendChild(img);
        });
      });
  });
document.getElementById("editButton").addEventListener("click", function () {
  const editButton = document.getElementById("editButton");
  const hideButton = document.createElement("button");
  hideButton.innerText = "Hide";

  hideButton.addEventListener("click", function () {
    console.log("Hide button clicked");
  });
  editButton.parentNode.replaceChild(hideButton, editButton);
});

const toggleButton = document.getElementById("toggle");
const card = document.getElementById("card");
toggleButton.addEventListener("click", function () {
  card.style.display = card.style.display === "none" ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
  "aDRLciys6pwvOG7Zcn36SrmLaqcVNkvWT99fgFTajBYYZJyTCQLbLR67";
  fetch("aDRLciys6pwvOG7Zcn36SrmLaqcVNkvWT99fgFTajBYYZJyTCQLbLR67").then(
    (response) =>
      response
        .json()
        .then((data) => {
          "id";
          const imageElement = document.getElementById("image");
          if (data.photos.id) {
            imageElement.textContent = data.photos.id;
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
  );
});
