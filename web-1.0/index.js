
var links = document.querySelectorAll(".sidebar ul li a");
var main=document.querySelector(".main");

links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        
        links.forEach(function(link) {
            link.classList.remove("active");
        });

        
        this.classList.add("active");
        fetch(this.dataset.page)
            .then(response=>response.text())
            .then(html => {
                main.innerHTML=html;
            })
            .catch(error =>{
                console.warn(error);
            });
    });
});

