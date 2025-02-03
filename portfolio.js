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
        ],
        title: 'Individuals',
        description: `An Ode to Solitude
Solitude is a truth we all know but few of us are willing to embrace. In the noisy chaos of cities, amidst the ceaseless hustle of crowded streets, there are those who retreat to a corner, cloaked in their own silence. This project traces the overlooked presence of those silent individuals. Each frame captures a moment where solitude stands exposed in its entirety. The city changes, the geography shifts, but solitude remains the same, unadorned and sharp wherever we encounter it.

These images, gathered from various corners of the world, seem to depict the inevitable fate of individuals: solitude. Sometimes in the shadow of towering buildings, other times in a desolate alleyway; each person lost within themselves, enclosed in a world of their own. Yet isn’t that sense of being lost also a sign of profound awareness? When a person is alone, they are most truly with themselves. And perhaps, this confrontation makes them more present than anyone else.

“Individuals - An Ode to Solitude” brings this reality to light. In each photograph, solitude emerges not as a question but as an acceptance. These images may not tell stories, but each one points to a deeper truth.`
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
        ],
        title: 'Light and Shadow',
        description: `Light and Shadow exhibition reflects on the profound impact of time and the passion of capturing the fleeting moment through photography. The dynamic interplay between light and shadow invites a reflection on the transient and the lost. Each frame is an effort to freeze time, a part of a continuous journey through it. The photographs taken in different parts of the world over the past years—both indoors and outdoors—immerse the viewer in the moment as every passing instant transforms into a shadow.`
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
        ],
        title: 'Life Today',
        description: `Life Today
The story of everyday life on the streets, capturing both the beauty and complexity of public society and culture.`
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
        ],
        title: 'Dreams from a Northern Country',
        description: `This series traces the quiet pulse of Russia, where time flows like winter rivers—slow, heavy, and unyielding. Mist and frost blur the boundaries of space, creating a world that feels half-remembered, half-imagined. Each image is a fragment of a dreamscape: barren fields bathed in soft glow, weathered faces lost in thought, and the silent poetry of empty roads. These moments speak of a timeless solitude, vast yet intimate, cold yet full of life.​​​​​​​“Dreams from a Northern Country” is an ode to the intangible—a place between reality and reverie.`
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
        const imagesContainer = document.getElementById('images-container');
        imagesContainer.innerHTML = item.images.map((image, index) => `
            <div class="image-container">
                <img src="${image}" alt="Portfolio Image ${index + 1}">
                <p>${item.descriptions[index]}</p>
            </div>
        `).join('');
        updateProjectDescription(item.title, item.description);
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

document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('images-container');

    // Add event listeners to portfolio items
    portfolioItems.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.images[0]; // Use the first image as a thumbnail
        img.alt = item.title;
        img.addEventListener('click', () => {
            updateProjectDescription(item.title, item.description);
        });
        imagesContainer.appendChild(img);
    });
});
