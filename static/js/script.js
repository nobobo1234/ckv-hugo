const modal = document.querySelector('.modal');

if (modal) {
    const imgs = document.querySelectorAll('.column-image');
    const modalImg = document.querySelector('.modal-image');
    for(const img of imgs) {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.style.display = 'block';
        });
    }

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

const headerTitle = document.querySelector('#header-title').textContent.trim();
if (headerTitle === "Noah's Kunstautobiografie") {
    const instance = new TypeIt('#header-title', {
        speed: 100,
        startDelay: 1000,
        lifeLike: true,
        cursor: false,
        deleteSpeed: 20
    })
        .pause(1500)
        .delete(18)
        .type('Kunst Website')
        .go();
} else {
    console.log(headerTitle)
    const instance = new TypeIt('#header-title', {
        speed: 100,
        startDelay: 1000,
        lifeLike: true,
        cursor: false
    }).go();
}