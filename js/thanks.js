const greeting = document.querySelector("#myh1");
const firstName = localStorage.getItem("FirstName");

greeting.textContent = firstName ? `Hello ${firstName}` : "Hello";

const searchButton = document.querySelector("#searchbutton");
const songInput = document.querySelector("#songinput");
const results = document.querySelector("#results");

searchButton.addEventListener("click", () => {
  const song = songInput.value.trim();

  results.textContent = song
    ? `You searched for ${song}`
    : "Did you search for something?";
});
