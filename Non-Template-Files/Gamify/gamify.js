// Get a collection of all buttons with the class "activity"
const activityButtons = document.getElementsByClassName("activity");

for (let i = 0; i < activityButtons.length; i++) {
    activityButtons[i].onclick = function(event) {
    // Access the popup text element
      const popupText = document.getElementById("popupText");

      // Get click event coordinates (relative to the document)
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Position the popup text element (adjust offsets as needed)
      popupText.style.left = clickX + "px";
      popupText.style.top = clickY - 60 + "px" ;
      // Show the popup text with animation
      popupText.style.display = "block";
      popupText.classList.add("animate"); // Add a class for animation
  
    };
  }

// Health count, hedon count, and time count (assuming global)
let healthCount = 0;
let hedonCount = 0;
let timeCount = 0;

const textbooks = document.getElementById("textbooks");

textbooks.onclick = function() {
  // Prompt user for duration
  let duration = Number(window.prompt("For how long (in minutes)?"));

  // Check if user entered a valid number (optional)
  if (isNaN(duration)) {
    alert("Please enter a valid number of minutes.");
    return; // Exit the function if input is invalid
  }

  // Update health count with entered duration
  healthCount += 2*duration;

  // Update time count with entered duration
  timeCount += duration;

  // Update UI elements with current values
  document.getElementById("health").textContent = healthCount;
  document.getElementById("time").textContent = timeCount;

  // Update popup text (assuming defined elsewhere)
  const timePopupText = document.getElementById("timePopupText");
  timePopupText.textContent = `+${duration}`;
  const healthPopupText = document.getElementById("healthPopupText");
  healthPopupText.textContent = `+${2*duration}`;
  // const hedonPopupText = document.getElementById("hedonPopupText");

  // Show the popup (assuming a function for showing/hiding)
  showTimePopup();
  showHealthPopup();
  showHedonPopup();
};

// Function to show and hide popup (assuming animation logic)
function showTimePopup() {
  const popupLogo = document.getElementById("timePopup");
  popupLogo.style.display = "block";
  popupLogo.classList.add("animate");

  setTimeout(function() {
    popupLogo.style.display = "none";
    popupLogo.classList.remove("animate");
  }, 1500);

  const popupText = document.getElementById("timePopupText");
  popupText.style.display = "block";
  popupText.classList.add("animate");

  setTimeout(function() {
    popupText.style.display = "none";
    popupText.classList.remove("animate");
  }, 1500);
}
function showHedonPopup() {
  const popupLogo = document.getElementById("hedonPopup");
  popupLogo.style.display = "block";
  popupLogo.classList.add("animate");

  setTimeout(function() {
    popupLogo.style.display = "none";
    popupLogo.classList.remove("animate");
  }, 1500);

  const popupText = document.getElementById("hedonPopupText");
  popupText.style.display = "block";
  popupText.classList.add("animate");

  setTimeout(function() {
    popupText.style.display = "none";
    popupText.classList.remove("animate");
  }, 1500);
}
function showHealthPopup() {
  const popupLogo = document.getElementById("healthPopup");
  popupLogo.style.display = "block";
  popupLogo.classList.add("animate");

  setTimeout(function() {
    popupLogo.style.display = "none";
    popupLogo.classList.remove("animate");
  }, 1500);

  const popupText = document.getElementById("healthPopupText");
  popupText.style.display = "block";
  popupText.classList.add("animate");

  setTimeout(function() {
    popupText.style.display = "none";
    popupText.classList.remove("animate");
  }, 1500);
}
