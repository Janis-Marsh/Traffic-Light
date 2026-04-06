// Get HTML Elements
const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const statusText = document.getElementById("status");

// Global Variables
let currentLight = 0;
let timer = null;

function showLight(lightName) {
    // Turn OFF all lights
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");

    // Turn ON correct light
    if (lightName === "red") {
        redLight.classList.add("active");
        statusText.textContent = "Stop - Red Light";
    } else if (lightName === "yellow") {
        yellowLight.classList.add("active");
        statusText.textContent = "Wait - Yellow Light";
    } else if (lightName === "green") {
        greenLight.classList.add("active");
        statusText.textContent = "Go - Green Light";
    }
}

function startTrafficLight(){
    // Prevent multiple timers
    if (timer !== null) {
        return;
    }

    // Start with red
    showLight("red");

    // Start looping
    timer = setInterval(function () {
        // Move to next light
        currentLight++

        // Loop back to start
        if (currentLight > 2) {
            currentLight = 0;
        }

        // Decide which light to show
        if (currentLight === 0) {
            showLight("red");
        } else if (currentLight === 1) {
            showLight("yellow");
        } else if (currentLight === 2) {
            showLight("green");
        }
    }, 2000);
}

function stopTrafficLight(){
    // Stop the Loop
    clearInterval(timer);

    // Reset timer
    timer = null;

    // Update text
    statusText.textContent = "Traffic light stopped";
}