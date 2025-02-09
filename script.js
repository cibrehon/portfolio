const portfolioItems = [
    {
        images: [
            // Add actual image URLs here
        ],
        descriptions: [
            // Add actual descriptions here
        ]
    },
    {
        images: [
            // Add actual image URLs here
        ],
        descriptions: [
            // Add actual descriptions here
        ]
    },
    {
        images: [
            // Add actual image URLs here
        ],
        descriptions: [
            // Add actual descriptions here
        ]
    },
    {
        images: [
            // Add actual image URLs here
        ],
        descriptions: [
            // Add actual descriptions here
        ]
    }
];

let currentItemIndex = 0;
let currentImageIndex = 0;

function showImages(itemIndex) {
    window.location.href = `portfolio.html?itemIndex=${itemIndex}`;
}

function openModal(itemIndex) {
    currentItemIndex = itemIndex;
    currentImageIndex = 0;
    updateModalContent();
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = portfolioItems[currentItemIndex].images.length - 1;
    } else if (currentImageIndex >= portfolioItems[currentItemIndex].images.length) {
        currentImageIndex = 0;
    }
    updatePortfolioContent();
}

function updateModalContent() {
    const item = portfolioItems[currentItemIndex];
    document.getElementById("modal-image").src = item.images[currentImageIndex];
    document.getElementById("modal-description").textContent = item.descriptions[currentImageIndex];
    document.getElementById("image-count").textContent = `${currentImageIndex + 1}/${item.images.length}`;
}

function updatePortfolioContent() {
    const item = portfolioItems[currentItemIndex];
    const selectedImagesContainer = document.getElementById("selected-images");
    selectedImagesContainer.innerHTML = `
        <div class="image-container">
            <img src="${item.images[currentImageIndex]}" alt="Portfolio Image">
            <p>${item.descriptions[currentImageIndex]}</p>
            <div class="navigation">
                <span class="prev" onclick="changeImage(-1)">&#10094;</span>
                <span class="next" onclick="changeImage(1)">&#10095;</span>
                <p>${currentImageIndex + 1}/${item.images.length}</p>
            </div>
        </div>
    `;
}

function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });

        slideIndex++;
        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex - 1].style.opacity = '1';

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
});

function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}

function scrollToBio() {
    document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
}


