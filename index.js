const words = [
  'Roxanne Tran.',
  'a designer.',
  'a developer.',
  'a photographer.'
]

let cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: 'power2.inOut',
  repeat: -1
})

let boxTL = gsap.timeline()

boxTL
  .to('.box', {
    duration: 1,
    width: '18vw',
    delay: 0.5,
    ease: 'power4.inOut'
  })
  .from('.hi', {
    duration: 1,
    y: '7vw',
    ease: 'power3.out',
    onComplete: () => masterTL.play()
  })
  .to('.box', {
    duration: 1,
    height: '7vw',
    ease: 'elastic.out'
  })
  .to('.box', {
    duration: 2,
    autoAlpha: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "rough({template: none.out, strength:1,points:20, taper:'none', randomize: true, clamp: false})"
  })

let masterTL = gsap.timeline({ repeat: -1 }).pause()

words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })

  tl.to('.text', { duration: 1.3, text: word })
  masterTL.add(tl)
})
