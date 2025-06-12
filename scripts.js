// Modal Zoom Viewer for Gallery Images
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".gallery-grid img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav a");
// Add Glitter and Cute Effects on Image Click
const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const close = document.querySelector(".close");

// Add event listener for each image click
images.forEach((img) => {
  img.addEventListener("click", () => {
    // Show modal
    modal.style.display = "block";
    modalImg.src = img.src;

    // Add glitter effect
    createGlitterEffect();
  });
});

// Close the modal
close.onclick = () => {
  modal.style.display = "none";
};

// Close on clicking outside the modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Function to create glitter effect
function createGlitterEffect() {
  const glitter = document.createElement("div");
  glitter.classList.add("floating-glitter");
  document.body.appendChild(glitter);

  // Remove glitter after animation
  setTimeout(() => {
    glitter.remove();
  }, 2000);
}
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});