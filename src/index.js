const init = () => {
    const slideshow = document.querySelector('.slideshow');    
    const slideItens = document.querySelectorAll('.slideshow-item');
    const slideWidth = slideshow.offsetWidth;
    const slideListArray = [...slideItens];

    const slideLeft = () => {
        const activeSlide = slideListArray.findIndex(item => item.classList.contains('active'));
        if (activeSlide > 0) {
            setAttribute(slideshow, `margin-left: -${slideWidth * (activeSlide - 1)}px`);
            handlerActiveSliderClass(activeSlide - 1, activeSlide);
        } 
        return;
    }

    const slideRight = () => {
        const activeSlide = slideListArray.findIndex(item => item.classList.contains('active'));
        if (activeSlide + 1 < slideItens.length) {
            setAttribute(slideshow, `margin-left: -${slideWidth * (activeSlide + 1)}px`);
            handlerActiveSliderClass(activeSlide + 1, activeSlide);         
        } else {
            setAttribute(slideshow, `margin-left: -${slideWidth * (slideItens.length - 1)}px`);
        }
    }

    const setAttribute = (element, property) => element.setAttribute('style', `${property}`);

    const handlerActiveSliderClass = (activeSlide, activedSlide) => {
        slideItens[activeSlide].classList.add('active');
        slideItens[activedSlide].classList.remove('active');
    }

    const initialSetUp = () => {
        const slideshowWrap = document.querySelector('.slideshow-wrap');
        const btnLeft = document.querySelector('.left');
        const btnRight = document.querySelector('.right');
        btnRight.addEventListener('click', slideRight);
        btnLeft.addEventListener('click', slideLeft);
        setAttribute(slideshowWrap, `width:${slideWidth}px`);
        slideItens[0].classList.add('active');
    }

    initialSetUp();
}

init();