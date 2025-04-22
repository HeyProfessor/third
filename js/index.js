document.getElementById('dog-image').addEventListener('click', () => {
    const description = document.getElementById('dog-description');
    const image = document.getElementById('dog-image');

    description.textContent = "Buddy loves you! 🐾";
    image.style.transform = "rotate(360deg)";
    image.style.transition = "transform 1s ease";
});
