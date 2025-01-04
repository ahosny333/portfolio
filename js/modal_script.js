const projects = [
    {
        title: "Fish feeding system with Raspberry Pi",
        description: "The goal of that project is to control motors and pumps used in fishing feeder system with RPI and configure settings for programs for each feeder using HMI the client already have the project in PLC and need to use RPI instead to add more wifi options ,i completely implement that project for backend and frontend using python and pyqt and and make all designs for hardware interfacing RPI to control motors and pumps",
        images: ["img/projects/programming-470x351.jpg", "img/projects/HFS-control-panel-1.jpg"],
        keywords: ["Raspberry Pi", "Embedded Linux", "PyQt", "Python", "MySQL", "Automation"]
    },
    {
        title: "Project 2",
        description: "This is a detailed description of Project 2.",
        images: ["project2.jpg"]
    },
    // Add more projects as needed
];

let currentImageIndex = 0;
let slideshowInterval;

function showModal(index) {
    const modal = document.getElementById("modal");
    const modalImagesContainer = document.querySelector(".modal-images");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const keywordsList = document.getElementById("keywords-list");

    // Set modal content
    modal.style.display = "flex";
    modalTitle.textContent = projects[index].title;
    modalDescription.textContent = projects[index].description;

    // Clear previous images
    modalImagesContainer.innerHTML = "";

    // Add images dynamically
    projects[index].images.forEach((imageSrc, idx) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.style.display = idx === 0 ? "block" : "none"; // Show only the first image
        modalImagesContainer.appendChild(img);
    });

    keywordsList.innerHTML = ""; // Clear previous keywords
    projects[index].keywords.forEach((keyword) => {
        const li = document.createElement("li");
        li.textContent = keyword;
        keywordsList.appendChild(li);
    });

    // Start the slideshow
    startSlideshow(index);
}

function startSlideshow(index) {
    const modalImages = document.querySelectorAll(".modal-images img");

    // Clear any existing interval
    clearInterval(slideshowInterval);

    // Initialize slideshow
    currentImageIndex = 0;
    slideshowInterval = setInterval(() => {
        // Hide all images
        modalImages.forEach((img) => {
            img.style.display = "none";
        });

        // Show the next image
        currentImageIndex = (currentImageIndex + 1) % modalImages.length;
        modalImages[currentImageIndex].style.display = "block";
    }, 2000); // Change image every 3 seconds
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    clearInterval(slideshowInterval); // Stop slideshow when modal is closed
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};