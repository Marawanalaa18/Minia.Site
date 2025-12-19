function startMiniCountdown() {
    const update = () => {
        const currentYear = new Date().getFullYear();
        let target = new Date(`March 18, ${currentYear} 00:00:00`).getTime();
        const now = new Date().getTime();

        if (now > target) {
            target = new Date(`March 18, ${currentYear + 1} 00:00:00`).getTime();
        }

        const diff = target - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
    };

    setInterval(update, 1000);
    update();
}

// تشغيل العداد
startMiniCountdown();