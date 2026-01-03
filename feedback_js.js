const modal = document.getElementById("feedbackModal");
const openBtn = document.getElementById("openFormBtn");
const feedbackForm = document.getElementById("feedbackForm");
const toast = document.getElementById("successToast");

// Open Modal
openBtn.onclick = () => {
    modal.style.display = "flex";
}

// Close Modal when clicking outside the box
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Submit
feedbackForm.onsubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    
    // Hide Modal
    modal.style.display = "none";
    
    // Show Notification
    toast.className = "toast show";
    
    // Reset Form
    feedbackForm.reset();

    // Hide Notification after 3 seconds
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}