window.onload = () => {

    let site = document.querySelector(".fullSite");
    let loader = document.querySelector(".loader");

    loader.style.display = "none";
    site.style.display = "block";

    let moveUp = document.querySelector('.arrowUp');
    let lastScrollTop = 0;
    let threshold = 400;
    let header = document.querySelector("header");

    window.addEventListener('scroll', () => {

        if(this.scrollY > 30){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }

        if(this.scrollY > 400){
            moveUp.classList.add("showArrow");
        }
        else{
            moveUp.classList.remove("showArrow");
        }


        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > threshold) {
            header.classList.add("fadeUp");
        }
        else{
            header.classList.remove("fadeUp");
        }
        lastScrollTop = scrollTop;
    });


    


    window.addEventListener("scroll", () => {

        const screenPosition = window.innerHeight;

        const anime1 = document.querySelectorAll(".anime1");
        anime1.forEach(anime => {
            position = anime.getBoundingClientRect().top;

            if(screenPosition > position){
                anime.classList.add('show1')
            }
            else{
                anime.classList.remove('show1')
            }
        });


        const anime2 = document.querySelectorAll(".anime2");
        anime2.forEach(anime => {
            position = anime.getBoundingClientRect().top;

            if(screenPosition > position){
                anime.classList.add('show2')
            }
            else{
                anime.classList.remove('show2')
            }
        });


        const anime3 = document.querySelectorAll(".anime3");
        anime3.forEach(anime => {
            position = anime.getBoundingClientRect().top;

            if(screenPosition > position){
                anime.classList.add('show3')
            }
            else{
                anime.classList.remove('show3')
            }
        });
        
    })


    let burger = document.querySelector('.bars');
    let nav = document.querySelector('.nav');
    let bars = document.querySelectorAll('.bar');
    let navLinks = document.querySelectorAll('.mobileNav');
    let body = document.body;

    burger.addEventListener('click', () => {
        nav.classList.toggle("slideFromTop");
        bars.forEach(bar => {
            bar.classList.toggle("closeBtn");
        });
        body.classList.toggle("overflow");
        moveUp.classList.toggle("showArrow");
    })

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            nav.classList.toggle("slideFromTop");
            bars.forEach(bar => {
                bar.classList.toggle("closeBtn");
            });
            
            body.classList.toggle("overflow");
        })
    });
}









// SLIDER SCRIPT
// const slides = Array.from(document.querySelectorAll('.slide'));
// const slider = document.querySelector('.slider');
// const buttons = document.querySelectorAll('.buttons div');
// const dotEl = document.querySelector('.dots');

// function getNextPrev(){
//     const activeSlide = document.querySelector('.slide.active');
//     const activeIndex = slides.indexOf(activeSlide);
//     let next, prev;

//     if(activeIndex === slides.length - 1){
//         next = slides[0];
//     }
//     else{
//         next = slides[activeIndex + 1];
//     }

//     if(activeIndex === 0){
//         prev = slides[slides.length - 1]
//     }
//     else{
//         prev = slides[activeIndex - 1];
//     }
//     return [next, prev];

    
//     clearInterval(intervalID);
//     // console.log(prev);
//     //console.log("Next", next, "Prev", prev);
// }

// function getPosition(){
//     const activeSlide = document.querySelector('.slide.active');
//     const activeIndex = slides.indexOf(activeSlide);
//     const [next, prev] = getNextPrev();

//     slides.forEach((slide, index) => {
//         if(index === activeIndex){
//             slide.style.transform = 'translateX(0)';
//         }
//         else if(slide === prev){
//             slide.style.transform = 'translateX(-100%)';
//         }
//         else if(slide === next){
//             slide.style.transform = 'translateX(100%)';
//         }
//         else{
//             slide.style.transform = 'translate(100%)';
//         }

//         slide.addEventListener('transitionend', () => {
//             slide.classList.remove('top');
//         });
//     });
// }
// getPosition();


// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         if(button.classList.contains('next')) getNextSlide();
//         else if(button.classList.contains('prev')) getPrevSlide();
//     });
// });


// let intervalID = setInterval(() => {
//     getNextSlide();
// }, 5000);

// function getNextSlide(){
//     const current = document.querySelector('.slide.active');
//     const [next, prev] = getNextPrev();

//     if(current.classList.contains('top')){
//         return;
//     }
//     current.classList.add('top');
//     next.classList.add('top');
//     current.classList.remove('active');
//     current.style.transform = 'translateX(-100%)';
//     next.classList.add('active');
//     next.style.transform = 'translate(0)';

//     getPosition();
// }
// function getPrevSlide(){
//     const current = document.querySelector('.slide.active');
//     const [next, prev] = getNextPrev();

//     if(current.classList.contains('top')){
//         return;
//     }
//     current.classList.add('top');
//     prev.classList.add('top');
//     current.classList.remove('active');
//     current.style.transform = 'translateX(100%)';
//     prev.classList.add('active');
//     prev.style.transform = 'translate(0)';

//     getPosition();
// }
