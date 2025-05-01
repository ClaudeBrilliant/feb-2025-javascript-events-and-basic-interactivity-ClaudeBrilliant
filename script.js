const rate = document.getElementById("ratingvalue");
const slider = document.getElementById("ratingsvalue");
slider.addEventListener("input", function () {
  rate.textContent = this.value;
});
 
const submit = document.getElementById("submitButton");
submit.addEventListener("click", function () {
  const rate = document.getElementById("ratingvalue").textContent;
  const message = document.getElementById("message");
  message.textContent = `You have rated this ${rate} out of 10`;
  message.style.display = "block";
});

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  // Prevent default form submission (optional if you're not sending data)
  event.preventDefault();

  const inputText = document.getElementById("textInput").value;

  if (inputText.trim() !== "") {
    alert("Form submitted with name: " + inputText + " and rating: " + rate.textContent);
  }
});