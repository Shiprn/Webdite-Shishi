const messageButton = document.querySelector("#message-button");
const message = document.querySelector("#test");

messageButton.addEventListener("click", () => {
  message.textContent =
    "This is what JavaScript does for the website and by the way, my name is ShiShi.";
});
