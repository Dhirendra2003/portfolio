function showLoading() {
  const loadingContainer = document.getElementById('loader');
  loadingContainer.style.display = 'flex';
}

// Function to hide the loading animation
function hideLoading() {
  const loadingContainer = document.getElementById('loader');
  const content = document.getElementsByTagName('body');

  // Fade out the loading container
  loadingContainer.style.opacity = 1;
  const fadeOut = setInterval(() => {
    if (loadingContainer.style.opacity > 0) {
      loadingContainer.style.opacity -= 0.1;
    } else {
      clearInterval(fadeOut);
      loadingContainer.style.display = 'none';
      // Display the content
      content.style.display = 'block';
    }
  }, 100);
}

// Event listener for when all elements are loaded
window.onload = function () {
  // Simulate a delay (replace this with the actual loading of your content)
  setTimeout(() => {
    hideLoading(); // Call hideLoading once all elements are loaded
  }, 2000);
};