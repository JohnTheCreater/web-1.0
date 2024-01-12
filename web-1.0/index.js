var main = document.querySelector(".main");

function applyStyle(){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='dashboard/dashboard.css';

    link.onload = function() {
        // The stylesheet is now loaded, apply styles or perform other actions
        console.log(    'Stylesheet loaded successfully');
    };

    link.onerror = function() {
        // Handle errors if the stylesheet fails to load
        console.error('Error loading stylesheet');
    };
    document.head.appendChild(link);
}

function loadContent(url) {
    console.log(url)
    fetch(url)
        .then(response => response.text())
        .then(html => {
            main.innerHTML = html;
            applyStyle();
            attachDateInfoClick();
            
        })
        .catch(error => {
            console.error(error);
        });
}

function attachDateInfoClick() {
    var dateInfoElements = document.querySelectorAll('.capsules .date-info a, .capsules .date-info-current a');

    dateInfoElements.forEach(dateInfo => {
        dateInfo.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Clicked on:', this.dataset.page); // Add this line to log the clicked data-page
            loadContent(this.dataset.page);
        });

    });
}

function handleLinkClickNav() {
    var links = document.querySelectorAll(".sidebar ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            loadContent(this.dataset.page);
        });
    });
}

function search_obj() {
    let search = document.getElementById('search').value.toLowerCase();
    let x = document.querySelectorAll('.date-info, .date-info-current');

    for(let i = 0; i < x.length; i++) {
        let id = x[i].id.toLowerCase();

        if(!id.includes(search)) {
            x[i].style.display = 'none';
        } else {
            x[i].style.display = 'list-item';
        }
    }
}


handleLinkClickNav();
attachDateInfoClick();
