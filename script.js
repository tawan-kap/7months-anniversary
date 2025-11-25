document.addEventListener('DOMContentLoaded', function() {
    const youtubeMusic = document.getElementById('youtubeMusic');
    youtubeMusic.width = '0';
    youtubeMusic.height = '0';

    function createHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'hearts';
        document.body.appendChild(heartsContainer);

        const heartEmojis = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝'];
        
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, 300);
    }

    document.getElementById('loveBtn').addEventListener('click', function() {
        this.textContent = 'I Love You! ❤️❤️❤️';
        this.style.background = 'linear-gradient(45deg, #fd79a8, #e84393)',
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = '30px';
        heart.style.zIndex = '100';
        heart.style.left = '50%';
        heart.style.top = '60%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.animation = 'animate__animated animate__bounceOutUp 1s';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    });

    // เรียกใช้ฟังก์ชันสร้างหัวใจลอย
    createHearts();

    // เพิ่มอนิเมชันให้กับ feature boxes ด้วย Intersection Observer
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
