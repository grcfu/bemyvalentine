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
            
            for (let i = 0; i < 30; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';
                heart.style.zIndex = '9999';
                heart.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                document.body.appendChild(heart);

                const x = (Math.random() - 0.5) * window.innerWidth;
                const y = (Math.random() - 0.5) * window.innerHeight;

                setTimeout(() => {
                    heart.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
                    heart.style.opacity = '0';
                }, 50);

                setTimeout(() => heart.remove(), 1800);
            }

            const name = document.getElementById('name').value;
            setTimeout(() => {
                alert(`Proposal Submitted! Get ready for the best Valentine's Day ever, ${name}! ❤️`);
                valentineForm.reset();
            }, 500);
        });
    }

    let lastSpawnTime = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSpawnTime > 50) { 
            const heart = document.createElement('div');
            heart.className = 'cursor-heart';
            heart.innerHTML = '❤️';
            
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            
            const size = Math.random() * 15 + 10;
            heart.style.fontSize = size + 'px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1200);
            
            lastSpawnTime = now;
        }
    });
});