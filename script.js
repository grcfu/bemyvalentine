document.addEventListener('DOMContentLoaded', () => {

    const timerDisplay = document.getElementById('love-timer');
    const startDate = new Date('2023-01-15'); 

    function updateTimer() {
        const now = new Date();
        const difference = now - startDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (timerDisplay) {
            timerDisplay.textContent = `${days} DAYS, ${hours} HRS`;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000 * 60 * 60);

    const memoryImages = document.querySelectorAll('.memory-cell img');

    memoryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('span');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = '1.2rem';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '1000';
                sparkle.style.transition = 'all 0.8s ease-out';
                
                img.parentElement.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
                    sparkle.style.opacity = '0';
                }, 50);

                setTimeout(() => {
                    sparkle.remove();
                }, 850);
            }
        });
    });

    const valentineForm = document.getElementById('valentine-form');
    if (valentineForm) {
        valentineForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Proposal Submitted! Get ready for the best Valentine's Day ever, ${name}! ❤️`);
            valentineForm.reset();
        });
    }
});