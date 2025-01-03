const projects = [
    {
        title: "Project 1",
        description: "This is a detailed description of Project 1.",
        image: "project1.jpg"
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
