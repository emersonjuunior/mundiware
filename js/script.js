const movieForm = document.querySelector("#movie-form");
const newsletterForm = document.querySelector("#newsletter form");
const ads = document.querySelector("#ads");
const closeAds = document.querySelector("#close-ads");

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

closeAds.addEventListener("click", (e) => {
  ads.style.display = "none";
});
