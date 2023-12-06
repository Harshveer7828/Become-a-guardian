  
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var audio = new Audio("./insect-sound.mp3")
locoScroll.stop()








function textanime() {
  var clutter = ""
  var textContent = document.querySelector("#page3-part1>h1").textContent
  var splitText = textContent.split("")
  splitText.forEach(function (dets) {
    clutter += `<span>${dets}</span>`
  });

  document.querySelector("#page3-part1>h1").innerHTML = clutter;
}
textanime()


var timer = document.querySelector("#page1 #timer h1")
var page1M = document.querySelector("#page1")
var timerButton = document.querySelector("#timer button")
var grow = 0;
var int = setInterval(function () {
  if (grow < 100) {
    grow += Math.floor(Math.random() * 5);
    timer.innerHTML = grow + "%";


  }
  else if(grow>=100) {
    grow = 100 + "%";
    timer.style.transform = "translateY(-100%)"
    timerButton.style.transform = "translateY(-90%)"
    timerButton.style.opacity = 1
    clearInterval(int);

  }

}, 10)
timerButton.addEventListener("click", function () {
  locoScroll.start()
  audio.play()
  gsap.to("#page1", {
    scale: 1,
    duration: 0.5
  })
  gsap.to("#timer", {
    opacity: 0,
  })
  gsap.to("#log", {
    opacity: 1,
  })
  gsap.to(".lowertext1", {
    scale: 1,
  })
  gsap.to(".nav", {
    top: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.3,
    opacity: 1
  })
  gsap.to(".stickerdiv", {
    scale: 1
  })

})

gsap.to("#page2>video", {
  scale: 1,
  stagger: 0.2,
  scrollTrigger: {
    stagger: true,
    scroller: "#main",
    trigger: "#page2",
    start: "top 60%",
    end: "top 90%",
    scrub: 2,
  }
})
// page 3 animations
function page3() {
  var clutter = ''
  var h1Text = document.querySelector("#page3-part1 h1").textContent

  var splitText = h1Text.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  h1Text.innerHTML = clutter;
  var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page3",
      scrub: 1,
      start: "top 0",
      end: "top -250%",
      pin: true
    }
  })
  tl.to("#page3-part1 h1 span", {
    color: "#201b0d",
    stagger: 0.5
  })
    .to("#page3-part1", {
      transform: 'translateX(-100vw)',
      duration: 500
    }, "anime")
    .to(".page3-part2", {
      transform: 'translateX(-650vw)',
      duration: 1150
    }, "anime")
  gsap.from(".page3-part2 img", {
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    scrollTrigger: {
      scroller: "#main",
      trigger: ".page3-part2",
      start: "top -40%",
      end: "top -140%",
      scrub: 1
    }
  })
  
  gsap.from(".page3-part2 .h1first,.page3-part2 .pfirst", {
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    scrollTrigger: {
      scroller: "#main",
      trigger: ".page3-part2",
      start: "top -35%",
      end: "top -50%",
      // markers:true,
      scrub: 1
    }
  })


}
// page4 scripting
function page4(){
  gsap.from("#page4 h1",{
    y:100,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page4",
      start:"top 40%",
      end:"top 10%",
      scrub:1
    }
  })
}


// page5 script js
gsap.set("#page5 .elem h1", {
  opacity: 0.2
})
function page5() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page5",
      pin: true,
      scrub: 0,
      start: "top 0",
      end: "top -200%",
    }
  })
  gsap.set("#elem1>h1", {
    opacity: 1,
  })
  gsap.set("#elem1", {
    height: "34vh"
  })
  gsap.set("#elem1 .paracontainer p", {
    top: "0%"
  })
  gsap.set("#elem2 .paracontainer p", {
    top: "-100%"
  })
  gsap.set("#elem3 .paracontainer p", {
    top: "-100%"
  })
  tl2.to("#page5>img", {
    y: 220
  }, "anime1")
    .to("#elem1>h1", {
      opacity: 0.2
    }, "anime1")
    .to("#elem1 .paracontainer p", {
      top: "100%"
    }, "anime1")
    .to("#elem1", {
      height: "30vh"
    }, "anime1")
    .to("#elem2>h1", {
      opacity: 1
    }, "anime1")
    .to("#elem2 .paracontainer p", {
      top: "0"
    }, "anime1")

    .to("#page5>img", {
      y: 440
    }, "anime2")
    .to("#elem2>h1", {
      opacity: 0.2
    }, "anime2")
    .to("#elem3", {
      height: "34vh"
    }, "anime2")
    .to("#elem2 .paracontainer p", {
      top: "100%"
    }, "anime2")
    .to("#elem3>h1", {
      opacity: 1
    }, "anime2")
    .to("#elem3 .paracontainer p", {
      top: "0"
    }, "anime2")


}

function page6(){
  gsap.from("#page6 .top6 h2,#page6 .lower6 h1",{
    y:500,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page6",
      start:"top 40%",

      
    }
  })
}



// page 7 scripting

function page7() {
  var clutter1 = '';
  var h1Text1 = document.querySelector("#page7>h1").textContent
  var h1split = h1Text1.split("")
  h1split.forEach(function (e) {
    clutter1 += `<span>${e}</span>`
  })
  document.querySelector("#page7>h1").innerHTML = clutter1;
  var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page7",
      pin: true,
      scrub: 2,
      start: "top 0",
      end: "top -300%"
    }
  })
  tl.to("#page7>h1 span", {
    color: "black",
    stagger: 0.2
  })
    .to("#page7>h1", {
      duration: 80,

      transform: 'translateX(-100vw)'

    }, "anime2")
    .to(".part27", {
      duration: 100,
      transform: 'translateX(-400vw)'
    }, "anime2")
}

function page9Swipper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: -30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var drag=document.querySelector(".drag")
  var slide=document.querySelector("#page10")
  slide.addEventListener("mouseenter",function(){
    slide.addEventListener("mousemove",function(dets){
      gsap.to(drag,{
        left:dets.x,
        top:dets.y,
        opacity:1
      })
    })
  })
  slide.addEventListener("mouseleave",function(){
    gsap.to(drag,{
      opacity:0
    })
  })
  

}
page9Swipper();


// page5 animation function when window width is less than 600px
function respage5(){
  gsap.set("#elem1>h1", {
    opacity: 1,
  })
  gsap.set("#elem1 .paracontainer p", {
    top: "0%"
  })
  gsap.set("#elem1", {
    height: "45vh"
  })
  gsap.set("#elem2 .paracontainer p", {
    top: "-100%"
  })
  gsap.set("#elem3 .paracontainer p", {
    top: "-100%"
  })
  var tl3 = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page5",
      pin: true,
      scrub: 1,
      start: "top -0vh",
      end: "top -100vh",
      // stagger:true
    }
  })
  tl3.to("#elem1>h1",{
    opacity:0.5
  },"animation1")
  .to("#elem1",{
    height:'13vh'
  },"animation1")
  .to("#elem1 .paracontainer p",{
    top:"-100%"
  },"animation1")
  .to("#elem2",{
    height:"35vh"
  },"animation2")
  .to("#elem2>h1",{
    opacity:1
  },"animation2")
  .to("#elem2 .paracontainer p",{
    top:0
  },"animation2")
  .to("#elem2",{
    height:'13vh'
  },"animation3")
  .to("#elem2>h1",{
    opacity:0.5
  },"animation3")
  .to("#elem2 .paracontainer p",{
    top:"-100%"
  },"animation4")
  
  .to("#elem3",{
    height:'45vh'
  },"animation4")
  .to("#elem3>h1",{
    opacity:1
  },"animation4")
  .to("#elem3 .paracontainer p",{
    top:0
  },"animation4")
}

// page8 scripting
function page8(){
  gsap.from("#page8 .text81 h1",{
    y:200,
    stagger:0.3,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page8",
      scrub:2,
      start:"top 40%",
      end:"top 0"
    }
  })
  gsap.from("#page8 img",{
    y:200,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page8",
      scrub:2,
      start:"top 60%",
      end:"top 0"
    }
  })
}
// page script js
function page9(){
  var tl=gsap.timeline({
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page9",
      start:"top 70%",
      end:"top 40%",
    }
  })
  tl.from("#page9>p",{
    opacity:0
  })
  .from(".innerdiv9",{
    y:200
  })
}
function page11(){
  var tl=gsap.timeline({
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page11",
      start:"top 60%",
      end:"top 30%",
    }
  })
  tl.from(".left11>h1",{
    opacity:0,
    y:100
  })
  .from(".pp11",{
    height:0
  })
  .from(".flower11",{
    height:0
  })
}
function page12(){
  gsap.from("#page12>img",{
    y:1000,
    duration:0.7,
    height:0,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page12",
      start:"top 30%",
    }
  })
}









// pavge 3 responsive animation
function page3res() {
  var clutter = ''
  var h1Text = document.querySelector("#page3-part1 h1").textContent

  var splitText = h1Text.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  h1Text.innerHTML = clutter;
  var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page3",
      scrub: 2,
      start: "top 50%",
      end: "top 70%",
      // pin: true
    }
  })
  tl.to("#page3-part1 h1 span", {
    color: "#201b0d",
    duration:1.5,
    stagger: 0.1
  })
}

// page 13 scripting
function page13(){
  gsap.from(".midtext13 .topmid h1,.midtext13 .lowermid h1",{
    y:400,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page13",
      start:"top -20%",
    }
  })
}

function runAnimations() {
  // Check the screen width
  if (window.innerWidth >= 550) {
      // Code for animations on larger screens
      page3();
      page5();
      page7();
      page4();
      page6();
      page8();
      page9();
      page11();
      page12();
      page13();
    } else {
      page3res()
      respage5()
      timerButton.addEventListener("click", function () {
        document.body.style.overflow = 'auto'      
      })
      // Code for handling small screens or alternative behavior
      document.querySelector("#page3-part1 h1").style.color="black"
      document.querySelector(".first7").style.color="black"
      // You can add specific code here for smaller screens.
  }
}
runAnimations();

window.addEventListener('resize', runAnimations);







