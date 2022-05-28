const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");

// mobile navbar functionality
hamburgerMenuBtn.addEventListener("click", () => {
  const header = document.querySelector("#header");
  const overlay = document.querySelector(".overlay");
  const mobileMenu = document.querySelector(".mobile-menu");

  // toggling the nav postion when opened
  document.querySelector(".navbar").classList.toggle('fixed')

  // stop scrolling when mobile nav is open
  document.body.classList.toggle("overflow-hidden");
  // allow scrolling when width increase
  document.body.classList.toggle("lg:overflow-y-auto");

  // opening mobile nav
  header.classList.toggle("open");
  // unhiding overlay and mobile menu respectively
  overlay.classList.remove("hidden");
  mobileMenu.classList.remove("hidden");

  // adding fade-in animation for overlay and mobile menu respectively
  overlay.classList.toggle("fade-in-animation");
  mobileMenu.classList.toggle("fade-in-animation");

  if (header.classList.contains("open")) {
    // removing fade-out animation from overlay and mobile menu respectively
    overlay.classList.remove("fade-out-animation");
    mobileMenu.classList.remove("fade-out-animation");
  } else {
    // Adding fade-out animation for overlay and mobile menu respectively
    overlay.classList.add("fade-out-animation");
    mobileMenu.classList.add("fade-out-animation");

    // hiding  overlay and mobile menu after animation end
    setTimeout(() => {
      overlay.classList.add("hidden");
      mobileMenu.classList.add("hidden");
    }, 450);
  }
});
