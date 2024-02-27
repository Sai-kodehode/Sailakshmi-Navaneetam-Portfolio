document.addEventListener("DOMContentLoaded", function () {
  // Function to handle intersection changes
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the id of the intersecting section
        const currentSectionId = entry.target.id;

        // Remove the active class from all navigation items
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
    threshold: 0.5, // Trigger when 50% of the target is visible
  });

  // Observe each section with the class "section-class"
  document.querySelectorAll(".section-class").forEach((section) => {
    observer.observe(section);
  });

  // Initial update when the page loads
  updateActiveNavItem();
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

// toogle

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const header = document.querySelector("header");

  hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("show-header");
  });
});
