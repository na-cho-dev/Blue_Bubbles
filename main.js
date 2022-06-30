window.onload = () => {
    window.addEventListener('scroll', () => {
        let header = document.querySelector("header");
        //let scrollUpBtn = document.querySelector('.scroll-up-btn');

        if(this.scrollY > 30){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }

    })
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
