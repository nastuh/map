// Начальная вставка
document.getElementById('start-btn').onclick = function() {
    document.getElementById('intro').style.display = 'none';
};

// Открытие модального окна с видео
document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', function() {
        const city = this.getAttribute('data-city');
        const video = this.getAttribute('data-video');
        document.getElementById('city-title').textContent = city;
        document.getElementById('video-frame').src = video + "?autoplay=1";
        document.getElementById('modal').style.display = 'flex';
    });
});

// Закрытие модального окна
document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('video-frame').src = '';
};

// Закрытие по клику вне окна
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('video-frame').src = '';
    }
};