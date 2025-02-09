const portfolioItems = [
    {
        folder: 'images/1',
        title: 'Individuals',
        description: `An Ode to Solitude
Solitude is a truth we all know but few of us are willing to embrace. In the noisy chaos of cities, amidst the ceaseless hustle of crowded streets, there are those who retreat to a corner, cloaked in their own silence. This project traces the overlooked presence of those silent individuals. Each frame captures a moment where solitude stands exposed in its entirety. The city changes, the geography shifts, but solitude remains the same, unadorned and sharp wherever we encounter it.

These images, gathered from various corners of the world, seem to depict the inevitable fate of individuals: solitude. Sometimes in the shadow of towering buildings, other times in a desolate alleyway; each person lost within themselves, enclosed in a world of their own. Yet isn’t that sense of being lost also a sign of profound awareness? When a person is alone, they are most truly with themselves. And perhaps, this confrontation makes them more present than anyone else.

“Individuals - An Ode to Solitude” brings this reality to light. In each photograph, solitude emerges not as a question but as an acceptance. These images may not tell stories, but each one points to a deeper truth.`,
        imageCount: 21
    },
    {
        folder: 'images/2',
        title: 'Light and Shadow',
        description: `Light and Shadow exhibition reflects on the profound impact of time and the passion of capturing the fleeting moment through photography. The dynamic interplay between light and shadow invites a reflection on the transient and the lost. Each frame is an effort to freeze time, a part of a continuous journey through it. The photographs taken in different parts of the world over the past years—both indoors and outdoors—immerse the viewer in the moment as every passing instant transforms into a shadow.`,
        imageCount: 18
    },
    {
        folder: 'images/3',
        title: 'Life Today',
        description: `Life Today
The story of everyday life on the streets, capturing both the beauty and complexity of public society and culture.`,
        imageCount: 36
    },
    {
        folder: 'images/4',
        title: 'Dreams from a Northern Country',
        description: `This series traces the quiet pulse of Russia, where time flows like winter rivers—slow, heavy, and unyielding. Mist and frost blur the boundaries of space, creating a world that feels half-remembered, half-imagined. Each image is a fragment of a dreamscape: barren fields bathed in soft glow, weathered faces lost in thought, and the silent poetry of empty roads. These moments speak of a timeless solitude, vast yet intimate, cold yet full of life.​​​​​​​“Dreams from a Northern Country” is an ode to the intangible—a place between reality and reverie.`,
        imageCount: 20
    },
    // ...other portfolio items...
];

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function displayImages() {
    const itemIndex = getQueryParameter('itemIndex');
    if (itemIndex !== null) {
        const item = portfolioItems[itemIndex];
        updateProjectDescription(item.title, item.description);
        showSlideshow(item.folder, item.imageCount, 0); // Show the first image immediately
    }
}

function updateProjectDescription(title, description) {
    const projectTitle = document.createElement('h2');
    const projectDescription = document.createElement('p');
    projectTitle.textContent = title;
    projectDescription.textContent = description;

    const projectDescriptionSection = document.getElementById('project-description');
    projectDescriptionSection.innerHTML = ''; // Clear existing content
    projectDescriptionSection.appendChild(projectTitle);
    projectDescriptionSection.appendChild(projectDescription);
}

window.onload = displayImages;

let currentSlideIndex = 0;
let images = [];
let folderPath = '';

function showSlideshow(folder, imageCount, startIndex) {
    folderPath = folder;
    images = [];
    currentSlideIndex = startIndex;
    loadImages(imageCount);
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.src = images[currentSlideIndex];
    slideshowImage.classList.add('large-image'); // Add this line to apply the CSS class
    document.querySelector('.slideshow-container').style.display = 'block';
    updateImageCount();

    // Add event listener to the slideshow image to show the next image on click
    slideshowImage.addEventListener('click', () => {
        changeSlide(1);
    });
}

function loadImages(imageCount) {
    for (let i = 1; i <= imageCount; i++) {
        const imagePath = `${folderPath}/P-${String(i).padStart(2, '0')}.jpg`;
        images.push(imagePath);
    }
}

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1;
    }
    document.getElementById('slideshow-image').src = images[currentSlideIndex];
    updateImageCount();
}

function updateImageCount() {
    const imageCountElement = document.getElementById('image-count');
    imageCountElement.textContent = `${currentSlideIndex + 1} / ${images.length}`;
}

function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}
