function toggleDropdown(element) {
  element.parentElement.classList.toggle("open");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menuIcon");

  sidebar.classList.toggle("collapsed");

  menuIcon.src = sidebar.classList.contains("collapsed")
    ? "assets/menu_expand.svg"
    : "assets/collapse_icon.svg";

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
