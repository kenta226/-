const leverBtn = document.getElementById('leverBtn');
const reel0 = new Reel(document.getElementById('reel0'), REEL_PATTERN);
leverBtn.addEventListener('click', () => {
    if (!reel0.isSpinning()) {
        reel0.start();
    }
});
document.getElementById('stop0').addEventListener('click', () => {
    reel0.stop();
});