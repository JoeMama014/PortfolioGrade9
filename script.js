const data = ["Sports", "Playing instruments", "Playing Online Games"]

let currentIndex = 0

function cycleData() {
   const displayElement = document.getElementById("display");
   
    displayElement.innerHTML = data[currentIndex];

    currentIndex = (currentIndex + 1) % data.length;
}