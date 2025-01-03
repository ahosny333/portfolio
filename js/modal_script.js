const projects = [
    {
        title: "Fish feeding system with Rasberry Pi",
        description: "The goal of that project is to control motors and pumps used in fishing feeder system with RPI and configure settings for programs for each feeder using HMIthe client already have the project in PLC and need to use RPI instead to add more wifi options ,i completely implement that project for backend and frontend using python and pyqt and and make all designs for hardware interfacing RPI to control motors and pumps",
        image: "img/projects/programming-470x351.jpg" 
    },
    {
        title: "Project 2",
        description: "This is a detailed description of Project 2.",
        image: "project2.jpg"
    },
    // Add more projects as needed
];

function showModal(index) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modal.style.display = "flex";
    modalImage.src = projects[index].image;
    modalTitle.textContent = projects[index].title;
    modalDescription.textContent = projects[index].description;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
