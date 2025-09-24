document.addEventListener('DOMContentLoaded', function () {
    let clicks = 0;
    let totalClicks = document.getElementById('clicker__counter');
    let cookie = document.getElementById('cookie');

    cookie.addEventListener('mousedown', function () {
        cookie.style.width = '220px';
    });

    cookie.addEventListener('mouseup', function () {
        cookie.style.width = '200px';
    });

    cookie.addEventListener('click', function () {
        clicks++;
        totalClicks.textContent = clicks;
    });
});