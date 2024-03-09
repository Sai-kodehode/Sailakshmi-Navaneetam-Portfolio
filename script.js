document.addEventListener("DOMContentLoaded", function () {
  // Function to handle intersection changes
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Getting the id of the intersecting section
        const currentSectionId = entry.target.id;
        // Removing the active class from all navigation items
        document.querySelectorAll("nav ul li").forEach(function (navItem) {
          navItem.classList.remove("active");
        });

        // Add the active class to the corresponding navigation item
        const homeNavItem = document.getElementById("homeNavItem");
        const aboutMeNavItem = document.getElementById("aboutMeNavItem");
        const projectsNavItem = document.getElementById("projectsNavItem");
        const contactNavItem = document.getElementById("contactNavItem");

        switch (currentSectionId) {
          case "home":
            homeNavItem.classList.add("active");
            break;
          case "aboutme":
            aboutMeNavItem.classList.add("active");
            break;
          case "myprojects":
            projectsNavItem.classList.add("active");
            break;
          case "contact":
            contactNavItem.classList.add("active");
            break;
          default:
            homeNavItem.classList.add("active");
            break;
        }
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger when 10% of the target is visible
    offset: 500,
  });
  // Observing each section with the class "section-class"
  document.querySelectorAll(".section-class").forEach((section) => {
    observer.observe(section);
  });

  // Initial update when the page loads
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let totalHeight = document.body.scrollHeight - windowHeight;

  // Calculate the brightness based on the scroll position
  let brightness = 1 - (scrollPosition / totalHeight) * 0.5; // Adjust the factor (0.5) as needed

  // Apply the brightness filter to the background element
  document.querySelector(
    ".background"
  ).style.filter = `brightness(${brightness})`;
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const closeMenu = document.querySelector(".close-menu");
  const sectionLinks = document.querySelectorAll("nav a");

  // Function to close the navigation and header
  function closeNavigation() {
    nav.classList.remove("active");
    header.classList.remove("active");
    hamburgerMenu.innerHTML = "&#9776;"; // Change back to hamburger icon
  }

  hamburgerMenu.addEventListener("click", function () {
    if (nav.classList.contains("active")) {
      closeNavigation();
    } else {
      nav.classList.add("active");
      header.classList.add("active");
      hamburgerMenu.innerHTML = "&#10006;"; // Change to X icon
    }
  });

  closeMenu.addEventListener("click", function () {
    closeNavigation();
  });

  // Close the navigation and header when a section link is clicked
  sectionLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        closeNavigation();
      }
    });
  });
  let isHamburgerIconSet = false;

  window.addEventListener("resize", function () {
    if (window.innerWidth < 768 && !isHamburgerIconSet) {
      // Setting hamburger icon as default when window width is less than 768px
      closeNavigation();
    } else if (window.innerWidth >= 768) {
      isHamburgerIconSet = false;
    }
  });
});

document.addEventListener("touchend", function (event) {
  // Your touch-related styles go here
  var target = event.target;
  if (target.classList.contains("project-item")) {
    target.querySelector(".description").style.opacity = 1;
    target.querySelector(".description").style.color = "#ffffff";
    target.querySelector(".description").style.padding = "1em";
    target.querySelector(".description").style.fontSize = "1.24rem";
  }
});
