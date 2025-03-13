    // Modal functionality
    document.addEventListener("DOMContentLoaded", () => {
    // Close modal when clicking on the X or outside the modal
    const closeButtons = document.querySelectorAll(".close-modal")
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
        const modal = this.closest(".modal")
        modal.style.display = "none"
        })
    })

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
        event.target.style.display = "none"
        }
    })

    // Handle registration form submission
    const registrationForm = document.getElementById("registration-form")
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault()

        // Here you would typically send the form data to a server
        // For this demo, we'll just show a success message

        // Close registration modal
        document.getElementById("registration-modal").style.display = "none"

        // Show success modal
        document.getElementById("success-modal").style.display = "block"

        // Reset form
        registrationForm.reset()
    })

    // Close success modal
    document.querySelector(".close-success-modal").addEventListener("click", () => {
        document.getElementById("success-modal").style.display = "none"
    })
    })

