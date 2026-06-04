gsap.registerPlugin(ScrollTrigger);

const light = document.getElementById("cursor-light");

document.addEventListener("mousemove", e => {

light.style.left = e.clientX + "px";
light.style.top = e.clientY + "px";

});

gsap.from(".hero-image",{
scale:0,
opacity:0,
duration:1.5,
ease:"power4.out"
});

gsap.from(".hero-title",{
y:150,
opacity:0,
duration:1.5,
delay:.3,
ease:"power4.out"
});

gsap.utils.toArray(".section").forEach(section=>{

gsap.from(section,{

y:100,
opacity:0,

scrollTrigger:{
trigger:section,
start:"top 80%",
toggleActions:"play none none reverse"
}

});

});

gsap.from(".project-card",{

scrollTrigger:{
trigger:"#projects",
start:"top 70%"
},

opacity:0,
y:100,
stagger:.2

});

gsap.to(".fill",{

width:(i,target)=>target.style.width,

duration:2,

scrollTrigger:{
trigger:"#about",
start:"top 70%"
}

});