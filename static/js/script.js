document.querySelectorAll('.categoria-header').forEach(header => {
    header.addEventListener('click', () => {
        const dropdown = header.nextElementSibling;
        const isOpen = dropdown.style.maxHeight;

        // Fecha todos os outros dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.maxHeight = null;
        });

        // Abre se estiver fechado
        if (!isOpen || isOpen === "0px") {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 500,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    
});

