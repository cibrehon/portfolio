const portfolioItems = [
    {
        images: [
            "https://via.placeholder.com/600x400?text=Individuals+1",
            "https://via.placeholder.com/600x400?text=Individuals+2",
            "https://via.placeholder.com/600x400?text=Individuals+3"
        ],
        descriptions: [
            "Description for Individuals 1",
            "Description for Individuals 2",
            "Description for Individuals 3"
        ]
    },
    {
        images: [
            "https://via.placeholder.com/600x400?text=Light+and+Shadow+1",
            "https://via.placeholder.com/600x400?text=Light+and+Shadow+2",
            "https://via.placeholder.com/600x400?text=Light+and+Shadow+3"
        ],
        descriptions: [
            "Description for Light and Shadow 1",
            "Description for Light and Shadow 2",
            "Description for Light and Shadow 3"
        ]
    },
    {
        images: [
            "https://via.placeholder.com/600x400?text=Life+Today+1",
            "https://via.placeholder.com/600x400?text=Life+Today+2",
            "https://via.placeholder.com/600x400?text=Life+Today+3"
        ],
        descriptions: [
            "Description for Life Today 1",
            "Description for Life Today 2",
            "Description for Life Today 3"
        ]
    },
    {
        images: [
            "https://via.placeholder.com/600x400?text=Dreams+from+a+Northern+Country+1",
            "https://via.placeholder.com/600x400?text=Dreams+from+a+Northern+Country+2",
            "https://via.placeholder.com/600x400?text=Dreams+from+a+Northern+Country+3"
        ],
        descriptions: [
            "Description for Dreams from a Northern Country 1",
            "Description for Dreams from a Northern Country 2",
            "Description for Dreams from a Northern Country 3"
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
