document.addEventListener("scroll", function() {
    let header = document.getElementById("dynamic-header");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

const menuIcon = document.querySelector('.menu-icon-container');
const dropdown = document.getElementById('dropdownMenu');

menuIcon.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

function openPanel(panelId) {
    // Select all panels by ID or custom class
    document.querySelectorAll('.content-panel, .home-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    document.getElementById(panelId).style.display = 'block';
    dropdown.style.display = 'none';
}


function showPreview(id) {
    document.getElementById(id + 'Preview').style.display = 'flex';
}

function hidePreview() {
    document.querySelectorAll('.preview-images').forEach(img => img.style.display = 'none');
}

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let current = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove("active");
        });
        items[index].classList.add("active");
    }

    showItem(current); // Initial

    setInterval(() => {
        current = (current + 1) % items.length;
        showItem(current);
    }, 3000); // Change image every 3 seconds
});




