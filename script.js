let timer;
let elapsedTime = 0;
let running = false;

function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedTime++;
            document.getElementById('time').textContent = formatTime(elapsedTime);
        }, 1000);
    }
});

document.getElementById('reset').addEventListener('click', function reset() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('time').textContent = formatTime(elapsedTime);
});

document.getElementById('stop').addEventListener('click', function stop() {
    console.log('stop');
    running = false;
    clearInterval(timer);
});
