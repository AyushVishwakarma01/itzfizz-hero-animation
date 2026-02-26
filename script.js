gsap.registerPlugin(ScrollTrigger);

//Page Load Animation (Headline)
gsap.from(".headline span", {
  y: 50,
  opacity: 0,
  stagger: 0.05,
  duration: 1
});

//Stats Animation
gsap.to(".stat", {
  opacity: 1,
  y: -10,
  stagger: 0.3,
  duration: 1,
  delay: 1
});

//Scroll Based Animation
gsap.to(".car", {
  x: 400,
  scale: 1.2,
  rotattion: 10,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});