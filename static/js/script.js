const modal = document.querySelector('.modal');

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
})