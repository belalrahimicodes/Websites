//Digital Clock
function clock(){
    const time = new Date();
    let hour = time.getHours().toString().padStart(2, 0);
    const meridiem = hour >= 12 ? "PM" : "AM"; 
    hour = hour % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    const displayTime = document.getElementById("clock").textContent = `${hour}:${minutes}:${seconds} ${meridiem}`;
}

clock();
setInterval(clock, 1000);