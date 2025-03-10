export function startTimer(duration, display, onEnd) {
    let timer = duration;
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            onEnd();  // Callback when timer reaches zero
        }
    }, 1000);
}
