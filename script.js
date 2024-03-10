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
    if (window.innerWidth >= 786) {
      closeNavigation();
    } else {
      isHamburgerIconSet = false;
    }
  });
});

// To place elements vertically center always for #contact section
const contactElement = document.getElementById("contact");
const contactDetailsElement = document.getElementById("contact-details");

function updateContactDetailsMarginTop() {
  const marginTop =
    (contactElement.clientHeight - contactDetailsElement.clientHeight) / 2;
  document.documentElement.style.setProperty(
    "--contact-details-margin-top",
    marginTop + "px"
  );
}

// calling the function initially
updateContactDetailsMarginTop();

// Adding event listener for window resize
window.addEventListener("resize", updateContactDetailsMarginTop);

// For mobile touch
document.addEventListener("DOMContentLoaded", function () {
  //  touchstart event listener
  document.addEventListener("touchstart", function (event) {
    var target = event.target.closest(".project-item");
    // toggle the description visibility
    if (target) {
      var description = target.querySelector(".description");
      description.style.opacity = description.style.opacity === "1" ? "0" : "1";
    }
  });
});
