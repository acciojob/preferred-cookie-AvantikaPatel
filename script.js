//your JS code here. If required.
// Get reference to the form element in the HTML document
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior which would refresh the page
  event.preventDefault();

  // Get the values entered by the user for font size and color
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Store the font size preference in a cookie that expires in 30 days
  // max-age is specified in seconds: 60 sec * 60 min * 24 hours * 30 days
  document.cookie = `fontsize=${fontSize};max-age=${60 * 60 * 24 * 30}`;

  // Store the font color preference in a cookie that expires in 30 days
  document.cookie = `fontcolor=${fontColor};max-age=${60 * 60 * 24 * 30}`;

  // Apply the selected font size to the page immediately using CSS variables
  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);

  // Apply the selected font color to the page immediately using CSS variables
  document.documentElement.style.setProperty("--fontcolor", `${fontColor}`);
});

// On page load, retrieve and apply any previously saved preferences from cookies
const cookieString = document.cookie;

// Split the cookie string into individual cookies
const cookies = cookieString.split(";");

// Iterate through each cookie to find and apply saved preferences
for (const cookie of cookies) {
  // Split each cookie into name and value pairs
  const [name, value] = cookie.split("=");

  // Check if this cookie is the font size preference
  if (name.trim() === "fontsize") {
    // Apply the saved font size to the page
    document.documentElement.style.setProperty("--fontsize", `${value}px`);
  }
  // Check if this cookie is the font color preference
  else if (name.trim() === "fontcolor") {
    // Apply the saved font color to the page
    document.documentElement.style.setProperty("--fontcolor", `${value}`);
  }
}