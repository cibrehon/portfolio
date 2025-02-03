document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentImageIndex = 0;
const portfolioItems = [
    {
        src: 'image1.jpg',
        description: 'Description for image 1'
    },
    // Add more portfolio items as needed
];

function openModal(index) {
    currentImageIndex = index;
    document.getElementById('modal-image').src = portfolioItems[index].src;
    document.getElementById('modal-description').innerText = portfolioItems[index].description;
    document.getElementById('image-count').innerText = `${index + 1}/${portfolioItems.length}`;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = portfolioItems.length - 1;
    } else if (currentImageIndex >= portfolioItems.length) {
        currentImageIndex = 0;
    }
    openModal(currentImageIndex);
}