const profileForm = document.querySelector("#profile-form");
const firstNameInput = document.querySelector("#fname");

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("FirstName", firstNameInput.value.trim());
});
