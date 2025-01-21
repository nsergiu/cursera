// Toggle the navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
}

// Add event listener for the hamburger icon
document.querySelector('.hamburger-icon')?.addEventListener('click', toggleMenu);

// Smooth scroll to sections
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Filter projects based on category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Event listener for filter buttons
document.querySelector('#filter-buttons')?.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        filterProjects(e.target.dataset.category);
    }
});

// Lightbox effect for project images
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <img src="${src}" alt="Lightbox Image">
        <button id="close-lightbox">Close</button>
    `;
    document.body.appendChild(lightbox);

    document.getElementById('close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Add click event for project images
document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

// Form validation
const form = document.querySelector('#contact form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}