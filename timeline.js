// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}

// Close modal with Escape key
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === "block") {
                modals[i].style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }
};