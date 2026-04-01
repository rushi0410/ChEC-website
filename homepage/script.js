/**
 * Toggles the "open" class on the parent element of the clicked item.
 * Used for dropdown menus in the sidebar.
 */
function toggleDropdown(element) {
  element.parentElement.classList.toggle("open");
}

/**
 * Toggles the sidebar collapsed state and updates the toggle icon.
 * Also adjusts the theme switch button style when collapsed.
 */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menuIcon");
  const toggleButton = document.getElementById("themeSwitch");

  sidebar.classList.toggle("collapsed");

  // Switch the arrow icon direction based on state
  if (sidebar.classList.contains("collapsed")) {
    menuIcon.classList.remove("fa-circle-chevron-left");
    menuIcon.classList.add("fa-circle-chevron-right");
    
    // Remove background style from theme button when sidebar is collapsed
    if (toggleButton) {
      toggleButton.style.background = "none";
      toggleButton.style.boxShadow = "none";
      toggleButton.style.border = "none";
    }
  } else {
    menuIcon.classList.remove("fa-circle-chevron-right");
    menuIcon.classList.add("fa-circle-chevron-left");
    
    // Reset theme button to stylesheet defaults
    if (toggleButton) {
      toggleButton.style = ""; 
    }
  }
}

/**
 * Banner Carousel Logic
 */
const bannerImages = [
    "../assets/banner_1.png",
    "../assets/banner_2.png",
    "../assets/banner_3.png",
    "../assets/banner_4.png"
];

function initBannerCarousel() {
    const track = document.getElementById('bannerTrack');
    if (!track) return;

    // Build the slides
    bannerImages.forEach(url => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url('${url}')`;
        track.appendChild(slide);
    });

    // Clone the first slide for a seamless infinite loop
    const firstClone = document.createElement('div');
    firstClone.className = 'carousel-slide';
    firstClone.style.backgroundImage = `url('${bannerImages[0]}')`;
    track.appendChild(firstClone);

    let currentIndex = 0;
    const totalSlides = bannerImages.length;

    function nextSlide() {
        currentIndex++;
        track.style.transition = 'transform 800ms ease-in-out';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // If we reach the clone, jump back to the original first slide
        if (currentIndex === totalSlides) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
            }, 800);
        }
    }

    setInterval(nextSlide, 3500); // Change image every 3.5 seconds
}

function handleJoinRedirect() {
    alert("Redirecting to the ChEC Community page...");
}

function handleJoinClubRedirect() {
    alert("Club will release joining forms soon, stay tuned!");
}

// Ensure the carousel starts when the page loads
document.addEventListener('DOMContentLoaded', initBannerCarousel);

/**
 * Smoothly scrolls the window to the Events Section
 */
function scrollToEvents() {
  const eventsSection = document.getElementById("events-section");
  if (eventsSection) {
    eventsSection.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Infinite News Carousel Logic
 */
function initNewsCarousel() {
    const track = document.getElementById('newsTrack');
    if (!track) return;

    // Clone cards for infinite effect
    const cards = Array.from(track.children);
    const originalCount = cards.length;
    
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let index = 0;
    const gap = 25; 
    const cardWidth = 320; 
    const stepSize = cardWidth + gap;

    function moveCarousel() {
        index++;
        track.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
        track.style.transform = `translateX(-${index * stepSize}px)`;

        // Seamless reset
        if (index >= originalCount) {
            setTimeout(() => {
                track.style.transition = 'none';
                index = 0;
                track.style.transform = 'translateX(0)';
            }, 700);
        }
    }

    // Auto-slide interval
    let timer = setInterval(moveCarousel, 3000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', () => timer = setInterval(moveCarousel, 3000));
}

function handleViewAll() {
    alert("View all news coming soon!");
}

// Start once DOM is loaded
document.addEventListener('DOMContentLoaded', initNewsCarousel);

/**
 * Toggles between light and dark themes.
 * Updates the text and icons associated with the theme switch.
 */
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");

  // Update Main Toggle Icon
  const themeSvgIcon = document.getElementById("themeSvgIcon");
  if (themeSvgIcon) {
    themeSvgIcon.src = isDark ? "../assets/toggle_off.svg" : "../assets/toggle_on.svg";
  }

  // Update Text Label
  const themeText = document.getElementById("themeText");
  if (themeText) {
    themeText.textContent = isDark ? "Light Theme" : "Dark Theme";
  }

  // Update collapsed icon for dark/light theme
  const collapsedIcon = document.querySelector(".collapsed-icon");
  if (collapsedIcon) {
    collapsedIcon.src = isDark ? "../assets/light_off.png" : "../assets/light_on.png";
  }
}

/**
 * Animated Number Counter.
 * Runs when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat');

  counters.forEach(counter => {
    // The '+' converts the string to a number
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // Animation duration in ms
    
    // Calculate increment step to ensure animation fits duration
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
});

/**
 * Triggers animations only when the element is on screen
 */
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("active");
        // Stop watching once the animation has played
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Tell the observer what to watch
  // You can add more classes here like '.news-card' or '.action-card'
  const elementsToAnimate = document.querySelectorAll(".simple-separator, .fade-up, .news-card");
  
  elementsToAnimate.forEach((el) => observer.observe(el));
});

/**
 * Scroll Trigger for Faculty Section Animations
 */
function initScrollObserver() {
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all fade-up elements
    const targets = document.querySelectorAll(".fade-up");
    targets.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", initScrollObserver);

/**
 * Universal Smooth Scroll for all internal links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only run if it's an internal link (starts with #)
        if (targetId.startsWith("#")) {
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/**
 * Universal Scroll Retention Logic
 * Works for any page by using the URL path as a unique key.
 */
(function() {
    const scrollKey = `scrollPos_${window.location.pathname}`;

    // 1. Restore Scroll Position
    function restoreScroll() {
        const savedPos = sessionStorage.getItem(scrollKey);
        if (savedPos) {
            window.scrollTo({
                top: parseInt(savedPos),
                behavior: 'instant' // Instant prevents 'flicker' during loading
            });
        }
    }

    // 2. Save Scroll Position (Debounced for performance)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            sessionStorage.setItem(scrollKey, window.scrollY);
        }, 150); 
    });

    // 3. Handle Dynamic Content (The "Universal" Fix)
    // This watches if the page height changes (e.g., images loading) and re-applies scroll
    const observer = new MutationObserver(() => {
        if (sessionStorage.getItem(scrollKey)) {
            restoreScroll();
        }
    });

    // Start restoring as soon as DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', restoreScroll);
    } else {
        restoreScroll();
    }

    // Also restore after full window load (images/banners finished)
    window.addEventListener('load', restoreScroll);

    // Observe body changes to catch late-loading grids/cards
    observer.observe(document.body, { childList: true, subtree: true });

    // Stop observing after 5 seconds to save memory
    setTimeout(() => observer.disconnect(), 5000);
})();