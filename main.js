const nav = document.querySelector(".navbar");
const ctaButton = document.querySelector(".btn-secondary");

function updateNavbarBackground() {
  if (!nav) {
    return;
  }

  if (window.scrollY > 50) {
    nav.style.background = "#ffffff";
    nav.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
}

window.addEventListener("scroll", updateNavbarBackground);
window.addEventListener("load", updateNavbarBackground);

if (ctaButton) {
  ctaButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Signup process initiated!");
    alert("Thank you for your interest!");
  });
}
