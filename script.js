
function updateClock() { 
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

function changeBackgroundColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c= document.getElementById("clock");
    c.style.border = `3px solid rgb(${r},${g},${b})`;
    // document.clock.style.border = `rgb(${r}, ${g}, ${b})`;
}

function box1() {
    window.location.href = ''; // Replace 'index1.html' with the actual login page URL
}

setInterval(updateClock, 1000);
updateClock(); 
setInterval(changeBackgroundColor, 1000);
changeBackgroundColor();