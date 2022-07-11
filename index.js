function show(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
show()
// $("#left>h1").textillate({ in: { effect: 'rollIn' } });


document.querySelector("#menu").addEventListener("click", function () {
  document.querySelector("#fullScreenNav").style.left = 0;
})
document.querySelector("#back").addEventListener("click", function () {
  document.querySelector("#fullScreenNav").style.left = "-100vw";
})

gsap.from("#left>h1",{
  opacity:0,
  duration:1,
  onStart:function(){
      $('#left>h1').textillate({ in: { effect: 'fadeInUp' } });
  }
})
gsap.from("#page2Img1",{
  scrollTrigger:{
      trigger:"#page2Img1",
      scroller:"#main",
      markers:true,
      start:"top 70%",
      // scrub:true
  },
  opacity:0,
  rotateX:60,
  duration:1
})

gsap.to("#right img",{
  y:"-100vh",
  duration:4,
  repeat:-1,
  ease: Power0.easeNone
})
gsap.from("#page2Img2",{
  scrollTrigger:{
      trigger:"#page2Img2",
      scroller:"#main",
      markers:true,
      start:"top 70%",
      // scrub:true
  },
  opacity:0,
  rotateX:60,
  duration:1
})

gsap.to("#right img",{
  y:"-100vh",
  duration:4,
  repeat:-1,
  ease: Power0.easeNone
})
gsap.from("#page2Img3",{
  scrollTrigger:{
      trigger:"#page2Img3",
      scroller:"#main",
      markers:true,
      start:"top 70%",
      // scrub:true
  },
  opacity:0,
  rotateX:60,
  duration:1
})

gsap.to("#right img",{
  y:"-100vh",
  duration:4,
  repeat:-1,
  ease: Power0.easeNone
})