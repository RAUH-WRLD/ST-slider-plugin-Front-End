export function activateSlider(object) {
    class Slider {
        constructor(object) {
            this.prev = document.querySelector(object.prevButton);
            this.next = document.querySelector(object.nextButton);
            this.slides = document.querySelectorAll(object.slides);
            this.slider([this.prev, this.next, this.slides]);
        };
        slider([prev, next, slides]) {
            let index = 1;
            let action;
            const close = (slides) => {
                slides.forEach(slide => {
                    slide.classList.add("close-animation");
                    setTimeout(() => {
                        slide.classList.remove("close-animation");
                        slide.classList.add("default");
                    }, 250);
                    slide.classList.remove("default");
                });
            };
            const open = (slides) => {
                slides.forEach(slide => {
                    slide.classList.add("open-animation");
                    setTimeout(() => {
                        slide.classList.remove("open-animation");
                        slide.classList.add("default");
                    }, 250);
                    slide.classList.remove("default");
                });
            };
            function slider(x, action) {
                if (x < 1) index = slides.length;
                if (x > slides.length) index = 1;
                slides.forEach(slide => slide.classList.add("not-active"));
                slides[index - 1].classList.remove("not-active");
                if (action === "open") open(slides);
                if (action === "close") close(slides);
            };
            slider(index);
            function launchSlider([item1, item2, action]) {
                return item1.addEventListener("click", () => slider(index += item2, action));
            };
            launchSlider([prev, -1, "close"]);
            launchSlider([next, 1, "open"]);
        };
    };
    const slider = new Slider(object);
};