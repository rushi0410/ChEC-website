function toggleDropdown(element) {
  element.parentElement.classList.toggle("open");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menuIcon");

  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    menuIcon.classList.remove("fa-circle-chevron-left");
    menuIcon.classList.add("fa-circle-chevron-right");
  } else {
    menuIcon.classList.remove("fa-circle-chevron-right");
    menuIcon.classList.add("fa-circle-chevron-left");
  }

  const toggleButton = document.getElementById("themeSwitch");
  // Removing bg style when collapsed :)
  if (sidebar.classList.contains("collapsed")) {
    toggleButton.style.background = "none";
    toggleButton.style.boxShadow = "none";
    toggleButton.style.border = "none";
  } else {
    toggleButton.style = ""; // reset to stylesheet defaults
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");

  document.getElementById("themeSvgIcon").src = isDark
    ? "assets/toggle_off.svg"
    : "assets/toggle_on.svg";

  document.getElementById("themeText").textContent = isDark
    ? "Light Theme"
    : "Dark Theme";

  // Update collapsed icon for dark/light theme
  const collapsedIcon = document.querySelector(".collapsed-icon");
  collapsedIcon.src = isDark
    ? "assets/light_off.png"
    : "assets/light_on.png";

}

const counters = document.querySelectorAll('.stat');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 1);
    let count = 0;

    const updateCount = () => {
      count++;
      counter.textContent = count;
      if (count < target) {
        setTimeout(updateCount, stepTime);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  });