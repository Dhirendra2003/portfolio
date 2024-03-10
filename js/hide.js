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


//mouse follow
let initialMouseX = 0;
let initialMouseY = 0;

document.addEventListener('mousemove', (event) => {
  const hoverBall = document.getElementById('hoverBall');

  // Adjust the offset to center the ball on the cursor
  const offsetX = -15;
  const offsetY = -15;

  initialMouseX = event.clientX;
  initialMouseY = event.clientY;

  const x = initialMouseX + offsetX;
  const y = initialMouseY + offsetY;

  hoverBall.style.transform = `translate(${x}px, ${y}px)`;
});

// Ensure the ball remains fixed during scrolling
document.addEventListener('scroll', () => {
  const hoverBall = document.getElementById('hoverBall');
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;

  const x = initialMouseX + offsetX; // Adjusting for the ball's offset
  const y = initialMouseY + offsetY + scrollY;

  hoverBall.style.transform = `translate(${x}px, ${y}px)`;
});

//nav scroll blur bg
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  console.log('function ran')
  // Function to handle scroll events
  function handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if the scroll position is greater than a certain threshold
    if (scrollPosition > window.innerHeight*2) {
      // Add a class when scrolled down
      navbar.classList.add("nav-scroll");
    } else {
      // Remove the class when scrolled back to the top
      navbar.classList.remove("nav-scroll");
    }
  }

  // Initial call to set the class based on the initial scroll position
  handleScroll();

  // Event listener for scroll events
  window.addEventListener("scroll", handleScroll);
});