    <script>
        // Wait for the DOM to load
        document.addEventListener("DOMContentLoaded", function () {
            // Select all elements with class "box"
            var boxes = document.querySelectorAll(".box");

            // Iterate over each box and initialize VanillaTilt
            boxes.forEach(function (box) {
                VanillaTilt.init(box, {
                    max: 10,
                    speed: 200,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                    reverse: true,
                    glare: true,
                    "max-glare": 0.1,
                });
            });
        });
    </script>
    <script>
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            spaceBetween: 5,
            slidesPerView: 7,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centerInsufficientSlides: true,
            slideToClickedSlide: true,
        });
        var galleryTop = new Swiper(".gallery-top", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".cstm-swiper-btn-next",
                prevEl: ".cstm-swiper-btn-prev"
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChange: function () {
                    let activeIndex = this.activeIndex + 1;

                    let activeSlide = document.querySelector(
                        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`
                    );
                    let nextSlide = document.querySelector(
                        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex + 1})`
                    );
                    let prevSlide = document.querySelector(
                        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex - 1})`
                    );

                    if (nextSlide && !nextSlide.classList.contains("swiper-slide-visible")) {
                        this.thumbs.swiper.slideNext();
                    } else if (
                        prevSlide &&
                        !prevSlide.classList.contains("swiper-slide-visible")
                    ) {
                        this.thumbs.swiper.slidePrev();
                    }
                }
            }
        });
    </script>