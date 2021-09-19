const d = document;

    // gsap.fromTo('.header_left-logoImg', { opacity: 0, x: -20 }, { opacity: 1, x: 0, rotation: 220 })

// gsap.from('.header_left-logoImg', { scaleX: 0.2, scaleY: 0.3 })

const timeline = gsap.timeline({
    // defaults: { duration: 1 }
})
timeline


if (window.innerWidth > 600) {
    gsap.fromTo('.header_left-logoChar', { opacity: 0, x: -30,scaleX: 1.2, scaleY: 1.2 }, { delay: 1.5, scaleX: 1, scaleY: 1 , opacity: 0.8, x: 15 })
    gsap.fromTo('.header_left-logoChar', {scaleX: 1,scaleX: 1 }, { scaleX: 0.8, scaleY:0.8, delay: 2.5})
    gsap.fromTo('.header', { y: -90 }, { ease: 'circ.out', duration: 1, delay: 1, y: 0 })

    gsap.fromTo('.header_left-logoImg', { scaleX: 1.3, scaleY: 1.3, y: -100 }, { delay: 1, scaleX: 1.3, scaleY: 1.3, y: 0 })

    gsap.fromTo('.layer2', { y: 0 }, { ease: Power0, duration: 1.5, y: -10 })


    // gsap.fromTo('.presentation-btn', { y: 0, opacity: 0, }, { duration: 1, y: 8, delay: 1, duration: 1, opacity: 1, });
    // gsap.fromTo('.presentation-title', { y: -10, opacity: 0, }, { y: 0, delay: 1, duration: 1, opacity: 1, });

} else {
    //Responsive Mobile:
    gsap.fromTo('.header_left-logoImg', { y: -100 }, {  y: 0 })
    gsap.fromTo(".header_left-logoChar", { scaleX: 1.2, scaleY: 1.2 }, { delay: 1.5, scaleX: 1, scaleY: 1 })
    gsap.fromTo('.layer2', { y: 0 }, { ease: Power0, duration: 1.5, y: -10 })
        //Animación barra derecha:
    gsap.fromTo(".header_right-linkedIn", { opacity: 0 }, { delay: 2.5, opacity: 1, duration: 2 })
    gsap.fromTo('.header_right-github', { opacity: 0 }, { delay: 2.5, opacity: 1, duration: 2 })
    gsap.fromTo('.header_right-contact ', { opacity: 0 }, { delay: 2.5, opacity: 1, duration: 2 })

    gsap.fromTo('.presentation-btn', { y: 0, opacity: 0, }, { duration: 1, delay: 2.6, duration: 1, opacity: 2, });
    gsap.fromTo('.presentation-title', { opacity: 0, }, { delay: 2.6, duration: 2, opacity: 1, });

}





const crowdfunding = d.querySelector('.crowdfunding')
crowdfunding.addEventListener("mouseenter", function(event) {
    gsap.fromTo('.crowdfunding-text', { opacity: 0, }, { opacity: 1, });
    crowdfunding.addEventListener("mouseleave", function(event) {
        gsap.fromTo('.crowdfunding-text', { opacity: 1, }, { opacity: 0, });

    }, false);
}, false);

const pokeApi = d.querySelector('.pokeApi')
pokeApi.addEventListener("mouseenter", function(event) {
    gsap.fromTo('.pokeApi-text', { opacity: 0, }, { opacity: 1, });
    pokeApi.addEventListener("mouseleave", function(event) {
        gsap.fromTo('.pokeApi-text', { opacity: 1, }, { opacity: 0, });

    }, false);
}, false);

const propertyManager = d.querySelector('.propertyManager')
propertyManager.addEventListener("mouseenter", function(event) {
    gsap.fromTo('.propertyManager-text', { opacity: 0, }, { opacity: 1, });
    propertyManager.addEventListener("mouseleave", function(event) {
        gsap.fromTo('.propertyManager-text', { opacity: 1, }, { opacity: 0, });

    }, false);
}, false);

const socialdashboard = d.querySelector('.socialdashboard')
socialdashboard.addEventListener("mouseenter", function(event) {
    gsap.fromTo('.socialdashboard-text', { opacity: 0, }, { opacity: 1, });
    socialdashboard.addEventListener("mouseleave", function(event) {
        gsap.fromTo('.socialdashboard-text', { opacity: 1, }, { opacity: 0, });

    }, false);
}, false);




// if (window.innerWidth > 600) {
//     // SCROLL Y AXIS ANIMATION TO SHOW THE PORTFOLIO:
//     const presentationBtn = d.querySelector('.presentation-btn');

//     presentationBtn.addEventListener('click', function(event) {
//         let a = window.scrollY;
//         let int = setInterval(() => {
//             a += 20;
//             window.scroll(0, a);
//         }, 1);

//         setInterval(() => {
//             if (a > 500) {
//                 clearInterval(int);
//             }
//         })

//     }, 1);

// } else {
//     // SCROLL Y AXIS ANIMATION TO SHOW THE PORTFOLIO:
//     const presentationBtn = d.querySelector('.presentation-btn');

//     presentationBtn.addEventListener('click', function(event) {
//         let a = window.scrollY;
//         let int = setInterval(() => {
//             a += 20;
//             window.scroll(0, a);
//         }, 1);

//         setInterval(() => {
//             if (a > 1080) {
//                 clearInterval(int);
//             }
//         })

//     }, 1);
// }