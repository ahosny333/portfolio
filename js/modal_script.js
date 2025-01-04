const projects = [
    {
        title: "Fish feeding system with Raspberry Pi",
        description: "The goal of that project is to control motors and pumps used in fishing feeder system with RPI and configure settings for programs for each feeder using HMI the client already have the project in PLC and need to use RPI instead to add more wifi options ,i completely implement that project for backend and frontend using python and pyqt and and make all designs for hardware interfacing RPI to control motors and pumps",
        images: ["img/projects/programming-470x351.jpg", "img/projects/HFS-control-panel-1.jpg"],
        keywords: ["Raspberry Pi", "Embedded Linux", "PyQt", "Python", "MySQL", "Automation"]
    },
    {
        title: "SMARTZEE PLATFORM",
        description: " SMARTZEE is A cloud platform that gathers and monitor data from smart meters .<br><strong>Features</strong><br> <ul> <li> Add, monitor and control SmartZee devices from discrete locations from the cloud.</li><li>Define child smart meters under each ZEE device, monitor PV system power/energy readings and control energy import/export.</li>\
<li>Add discrete standalone smart meters and monitor their readings from the cloud.</li>\
<li>Remotely control system’s energy import/export from full export to zero export ( feed-in to grid ) based on power setpoint, time schedule, voltage , or simply switch to local config with a single button click.</li></ul>",
        // images: ["img/projects/Untitled.png","img/projects/Untitled1.png","img/projects/Untitled2.png","img/projects/Untitled3.png","img/projects/Untitled4.png","img/projects/slider-phone.png"]
        images: ["img/projects/Untitled.png", "img/projects/Untitled1.png", "img/projects/Untitled2.png", "img/projects/Untitled3.png", "img/projects/Untitled4.png", "img/projects/slider-phone.png"],
        keywords: ["Django", "Django REST framework", "DEVOPS", "CIRCLECI", "Docker", "AWS IOT", "AWS Lambda" , "AWS RDS", "AWS CloudFormation", "WebSocket"]
    },
    {
        title: "IOT SMART METER",
        description: `<p style="text-align: left;"> <strong>My role: </strong>implement all features and protocols of power meter (IOT,SPI,modbus,aws IOT,MQTT,internal webserver)<br>\
<strong>Project description:</strong> elgris Smart Meter is an innovative measuring device and enables consumers to monitor and control their electricity consumption. It records the feed-in and consumption values ​​with phase accuracy and in real time.\
<br><strong>feature:</strong><br>\
<ul style="text-align: left;"><li>Control of Shelly products (smart plugs)</li>\
<li>Functionally compatible with SMA products</li>\
<li>SUNSPEC MODBUS/TCP server integrated (LAN)</li>\
<li>Real-time measurement of consumption and feed-in with up to 50 ms (50 Hz) update</li>\
<li>Easy operation via integrated web configuration</li>\
<li>Multifunctional: Simultaneous communication with up to 4 different inverters / brands</li></ul></p>`,
        // images: ["img/projects/Untitled.png","img/projects/Untitled1.png","img/projects/Untitled2.png","img/projects/Untitled3.png","img/projects/Untitled4.png","img/projects/slider-phone.png"]
        images: ["img/projects/sm_lan_2.0_final_GIF_v1.1.gif", "img/projects/SM-IOT-Diagram-2024-1024x419.jpg"],
        keywords: ["ESP32", "ESP-IDF", "IOT", "MQTT", "MODBUS", "SPI", "Mdns", "AWS IOT Core"]
    },
    {
        title: "IOT with industrial boiler",
        description: `<p style="text-align: left;"> <strong>Project description:</strong> The goal of project is to control the process of industrial boiler and publish its reading to AWS using esp32 controller and idf framework based on AWS IOT Core for fleet provisioning , registration , collecting data and store in AWS dynamoDB, sending commands for settings and Over The Air update (OTA)</p>`,
        // images: ["img/projects/Untitled.png","img/projects/Untitled1.png","img/projects/Untitled2.png","img/projects/Untitled3.png","img/projects/Untitled4.png","img/projects/slider-phone.png"]
        images: ["img/projects/Industrial_Boiler_Control_Project.jpg"],
        keywords: ["AWS IoT Core", "Arduino", "ESP32", "Fleet Provisioning"]
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
    //modalDescription.textContent = projects[index].description;
    modalDescription.innerHTML = projects[index].description;

    // Clear previous images
    modalImagesContainer.innerHTML = "";

    // Add images dynamically
    projects[index].images.forEach((imageSrc, idx) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.style.display = idx === 0 ? "block" : "none"; // Show only the first image
        img.style.marginTop = "300px";
        img.style.height = "200px";
        modalImagesContainer.appendChild(img);
    });

    keywordsList.innerHTML = ""; // Clear previous keywords
    projects[index].keywords.forEach((keyword) => {
        // const li = document.createElement("li");
        // li.textContent = keyword;
        // keywordsList.appendChild(li);
        const li = document.createElement("button");
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