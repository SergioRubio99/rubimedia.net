gsap.fromTo('.header', { y: -60 }, { ease: 'circ.out', duration: 1, delay: 0.3, y: 0 })
gsap.fromTo('.header_left-logoChar', { opacity: 0, x: -30 }, { delay: 0.5, opacity: 1, x: 15 })
    // gsap.fromTo('.header_left-logoImg', { opacity: 0, x: -20 }, { opacity: 1, x: 0, rotation: 220 })

// gsap.from('.header_left-logoImg', { scaleX: 0.2, scaleY: 0.3 })

const timeline = gsap.timeline({
    // defaults: { duration: 1 }
})
timeline
gsap.fromTo('.header_left-logoImg', { opacity: 0, x: -20 }, { delay: 1.5, opacity: 1, x: 0, rotation: 180 })
gsap.fromTo('.header_left-logoImg', { scaleX: 1, scaleY: 1 }, { delay: 1, scaleX: 0.8, scaleY: 0.8 })
gsap.fromTo('.header_left-logoImg', { rotation: 180 }, { delay: 1.5, rotation: 200 })

gsap.fromTo(".header_left-logoChar", { scaleX: 1, scaleY: 1 }, { delay: 1.5, scaleX: 0.8, scaleY: 0.8 })
gsap.fromTo('.header_left-hidden', { y: 1, x: 0 }, { y: 1, ease: Power3, delay: 2.5, x: 119 })
gsap.fromTo('.layer2', { y: 0 }, { ease: Power0, duration: 1.5, y: -10 })



// Button animation:

gsap.fromTo('.presentation-btn', { y: 0, opacity: 0, }, { duration: 1, y: 8, delay: 1, duration: 1, opacity: 1, })
gsap.fromTo('.presentation-title', { y: -10, opacity: 0, }, { y: 0, delay: 1, duration: 1, opacity: 1, })