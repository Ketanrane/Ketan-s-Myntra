// ------------------------------
//  Myntra Clone JS Functionality
// ------------------------------

// Navbar shadow effect on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".header");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Search bar functionality
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

searchBtn?.addEventListener("click", () => {
  const query = searchBar.value.trim();
  if (query.length > 0) {
    alert(`Searching for "${query}" on Myntra...`);
  } else {
    alert("Please enter something to search!");
  }
});

// Highlight active category
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Product hover animation
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "all 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.classList.add("scrollTopBtn");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add styles for scroll button dynamically
const style = document.createElement("style");
style.innerHTML = `
.scrollTopBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 14px;
  background-color: #ff3f6c;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  display: none;
  transition: all 0.3s ease;
}
.scrollTopBtn:hover {
  background-color: #e63560;
}
.active {
  color: #ff3f6c;
  font-weight: bold;
  border-bottom: 2px solid #ff3f6c;
}
`;
document.head.appendChild(style);
