document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentIndex = 0;

    function showSlide(index, direction) {
        sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            item.style.opacity = 0;
            item.style.transform = `translateX(${direction === 'left' ? '-' : ''}100%)`;
        });

        sliderItems[index].classList.add('active');
        sliderItems[index].style.opacity = 1;
        sliderItems[index].style.transform = 'translateX(0)';
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        showSlide(currentIndex, 'right');
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex, 'left');
    });

    showSlide(currentIndex, 'left');
});
