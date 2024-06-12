const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageElement = document.getElementById('message');

yesButton.addEventListener('click', () => {
    messageElement.textContent = "You just made my heart skip a beat! I love you so much. Being with you is my greatest joy. 💖💑";
});

noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noButton.textContent = "No 😢";
});

noButton.addEventListener('mouseleave', () => {
    noButton.textContent = "No";
});