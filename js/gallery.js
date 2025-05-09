import changeMenu from "./main.js";

document.querySelector(".hamButton").addEventListener("click", () => {
  changeMenu();
});

let imageModal = document.querySelector(".imageModal");
let images = document.querySelectorAll(".images img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    console.log(img.getAttribute("src"));
    imageModal
      .querySelector("img")
      .setAttribute("src", img.getAttribute("src"));
    imageModal.querySelector("h2").innerText = img.getAttribute("alt");
    imageModal.showModal();
  });
});

let xButton = document.querySelector(".xButton");

xButton.addEventListener("click", () => {
  imageModal.close();
});
