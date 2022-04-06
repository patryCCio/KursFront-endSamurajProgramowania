const clock = () => {
    let time = 1;
    return () => {
        document.body.textContent = `Czas spędzony: ${time++} sek!`;
    }
}


const start = clock();

setInterval(start, 1000);