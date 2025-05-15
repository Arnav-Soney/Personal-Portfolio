// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Form handler (Frontend only)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});

const blobs = document.querySelectorAll('.blob');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    blobs.forEach(blob => {
        blob.style.opacity = document.body.classList.contains('dark-mode') ? 0.2 : 0.4;
    });
});

const text = "Welcome to My Portfolio";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.querySelector("h1").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
