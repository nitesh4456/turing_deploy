var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +30+ "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function()
{
    crsr.style.scale=3
    crsr.style.border="1px solid white"
    crsr.style.backgroundColor="transparent"
})
    elem.addEventListener("mouseleave",function()
{
    crsr.style.scale=1
    crsr.style.border="rgb(29 53 224)"
    crsr.style.backgroundColor="rgb(29 53 224)"
})
})






gsap.to("#nav",{
    backgroundColor:"Black",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }

}) 


gsap.to("#main",{
    backgroundColor :"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }


})


gsap.from("#about-us img,#content",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})



gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


const slider = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slides = slider.children;
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Update the dots to match the current slide
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Navigate to a specific slide
function goToSlide(index) {
    currentIndex = index;
    currentTranslate = -index * slides[0].clientWidth;
    prevTranslate = currentTranslate;
    slider.style.transform = `translateX(${currentTranslate}px)`;
    updateDots();
}

// Add click event listeners to the dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Dragging functionality
slider.addEventListener('mousedown', (e) => startDrag(e));
slider.addEventListener('touchstart', (e) => startDrag(e));
slider.addEventListener('mouseup', () => endDrag());
slider.addEventListener('mouseleave', () => endDrag());
slider.addEventListener('touchend', () => endDrag());
slider.addEventListener('mousemove', (e) => drag(e));
slider.addEventListener('touchmove', (e) => drag(e));

function startDrag(e) {
    isDragging = true;
    slider.classList.add('dragging');
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
}

function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    slider.classList.remove('dragging');
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 50 && currentIndex > 0) currentIndex -= 1;

    goToSlide(currentIndex);
}

function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function animation() {
    if (isDragging) requestAnimationFrame(animation);
}

// Initialize the first dot as active
updateDots();
