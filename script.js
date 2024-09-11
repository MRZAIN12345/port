gsap.registerPlugin(ScrollTrigger);
gsap.to('#sasa',{
    scrollTrigger: {
        trigger: "#sasa",
        start: "top center",
        end: "20vh center",
        scrub: 3,
        //toggleActions: "play pause resume reset",
//        markers: true
      },
      display:"block",
      opacity:1,
      y:-100,
    });
    gsap.registerPlugin(ScrollTrigger);

  gsap.to("#b", {
    scrollTrigger: {
        trigger: "#b",       // Element that triggers the animation
        start: "top center",  // When the top of the trigger hits the center of the viewport
        end: "bottom bottom",  // When the bottom of the trigger hits 100px from the bottom of the viewport
        scrub: 1,
        ease:"power1.in",          // Smooth scrubbing
      //  markers: true,        // Show markers for debugging
       // toggleActions: "play pause resume reset", 
    },
    width:"300px",
    opacity: 1,
    duration: 3, 
              // Duration of animation
});
gsap.to("#c", {
    scrollTrigger: {
        trigger: "#c",       // Element that triggers the animation
        start: "top center",  // When the top of the trigger hits the center of the viewport
        end: "bottom bottom",  // When the bottom of the trigger hits 100px from the bottom of the viewport
        scrub: 1,          // Smooth scrubbing
    //    markers: true,
       // toggleActions: "play pause resume reset",         // Show markers for debugging
    },
    width:"300px",
    opacity: 1,
    duration: 3, 
              // Duration of animation
});  

gsap.registerPlugin(ScrollTrigger);

gsap.to(".container", {
    x: () => -(document.querySelector(".container").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".container").scrollWidth,
    }
});
gsap.from('.l',{
     opacity:0,
     duration:2,
     stagger:{
        from:"start",
        each:0.5,
     },
})
gsap.from(".s1a",{
    delay:0.5,
    fontSize:"0px",
    opacity:0,
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s2a",{
    delay:1,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s3a",{
    delay:1.5,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s4a",{
    delay:2,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
let b= document.querySelectorAll('.l');
let a=document.getElementById('loader');
 window.addEventListener('load',()=>{
    setInterval(()=>{
     a.style.opacity="0"; 
    },4000)
});
let c=document.getElementById('v1');
window.addEventListener('load',()=>{
  setInterval(()=>{
    c.style.opacity="1";
  },4000)
});
 


gsap.to(".hh",{
    opacity:1,
yoyo:true,
x:340,
repeat:-1,
duration:4,
stagger:{
    each:1,
    from:"start",
}
});
window.addEventListener('load',()=>{
setInterval(()=>{
    gsap.to('.l',{
     rotateX:90,
})
},3500)
});
 gsap.to('.cari',{
    scrollTrigger:{
        trigger:".cari",
         start:"top top",
         end:"bottom center",
    
    },
    x:-1900,
    ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    duration:5,
 })
 gsap.to('.carh',{
    scrollTrigger:{
        trigger:".carh",
         start:"bottom top",
         end:"bottom center",
       markers:true,
    },
    x:-1500,
    duration:5,
 })
 let cur = document.getElementById("cur");
 let x = 0, y = 0; // Target positions
 let targetX = 0, targetY = 0; // Current positions

 document.addEventListener("mousemove", function(e) {
   targetX = e.pageX;
   targetY = e.pageY;
 });

 function update() {
   x += (targetX - x) * 0.1; // Smooth factor (0.1 can be adjusted)
   y += (targetY - y) * 0.1; // Smooth factor (0.1 can be adjusted)

   cur.style.left = x + -140 + "px";
   cur.style.top = y +  -140 + "px";

   requestAnimationFrame(update);
 }

 update();