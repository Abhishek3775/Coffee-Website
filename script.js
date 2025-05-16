//co
let timeLine = gsap.timeline()

timeLine.from(".front",{
    y:1000,
    duration:1,
})

timeLine.from("#coffee",{
    y:800,
    duration:1,
    scale:2,
})

timeLine.from(".front h1",{
    y:1000,
    duration:1,
})

timeLine.from("#coffeeBean1",{
    y:800,
    duration:1,
    scale:2,
})
timeLine.from("#coffeeBean2",{
    y:800,
    duration:1,
    scale:2,
})
timeLine.from("#coffeeBean3",{
    y:800,
    duration:1,
    scale:2,
})
timeLine.from("#coffeeBean4",{
    y:800,
    duration:1,
    scale:2,

})
timeLine.from("#coffeeBean5",{
    y:800,
    duration:1,
    scale:2,

})

let timeLine2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})

timeLine2.to("#coffee",{
    top:800,
    left:105,
    scale:0.7,
   
},"hello")
timeLine2.to("#coffeeBean1",{
    top:800,
    left:200,
    scale:0.7,
    rotate:200,
   
},"hello")

let timeLine3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})

timeLine3.to("#coffee",{
    top:1540,
    left:647,
    duration:1,
    scrub:2,
     start:"0% 90%",
        end:"50% 50%",
    scale:0.75,
},"hello")

timeLine3.to("#coffeeBean1",{
    top:1545,
    duration:1,
    left:765,
    scale:0.75,
    rotate:200,
   
},"hello")
timeLine3.from("#cane1",{
    x:-300,
    duration:1,
   
},"hello")
timeLine3.from("#cane2",{
    x:300,
    duration:1,
   
},"hello")


let timeLine4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})

timeLine4.to("#coffee",{
    top:2275,
    left:1032,
    scrub:2,
    zIndex:3,
    duration:1,
     
},"hello")

timeLine4.to("#coffeeBean1",{
    top:2283,
    left:1150,
    zIndex:2,
    duration:1,
    rotate:200,
   
},"hello")

timeLine4.to("#cane1",{
    top:2330,
    left:820,
    duration:1,
    rotate:-20,
   
},"hello")
timeLine4.to("#cane2",{
    top:2390,
    left:1050,
    duration:1,
    rotate:20,
   
   
},"hello")

