gsap.fromTo('.header_left-logoChar', { opacity: 0, x: -30 }, { delay: 0.5, opacity: 1, x: 15 })
    // gsap.fromTo('.header_left-logoImg', { opacity: 0, x: -20 }, { opacity: 1, x: 0, rotation: 220 })

// gsap.from('.header_left-logoImg', { scaleX: 0.2, scaleY: 0.3 })

const timeline = gsap.timeline({
    // defaults: { duration: 1 }
})
timeline
gsap.fromTo('.header_left-logoImg', { opacity: 0, x: -20 }, { delay: 1.5, opacity: 1, x: 0, rotation: 180 })
gsap.fromTo('.header_left-logoImg', { scaleX: 1, scaleY: 1 }, { delay: 1, scaleX: 0.8, scaleY: 0.8 })


gsap.fromTo(".header_left-logoChar", { scaleX: 1, scaleY: 1 }, { delay: 1, scaleX: 0.8, scaleY: 0.8 })
gsap.fromTo('.header_left-hidden', { x: 0 }, { ease: Power3, delay: 2.2, x: 119 })