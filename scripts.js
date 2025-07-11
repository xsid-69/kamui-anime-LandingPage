function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
}
 locoScroll()

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function cursorEffects(){
    var page1Content=document.querySelector("#page1-content")
var cursor=document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0
    })
})
}
cursorEffects();
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    mousewheel: {
      invert: false, // Scroll normally
      forceToAxis: true, // Only scroll in Swiper direction
      sensitivity: 1, // Adjust sensitivity
    },
    // Change cursor to grabbing hand
  });
});

var tl =gsap.timeline()
tl.from("#loader" ,{
   
   duration:1.5,
})
tl.to("#loader",{
  opacity:0,
  duration:1,
})
tl.to("#loading",{
  opacity:0,
  duration:0.5,
})
tl.to("#loading ",{
  display:"none"
})

tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2,
  durarion:0.5,
} )