var cursor=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){  //dets-->it tells about all the change in axis of mouse while its movement....i.e. change in x,y and z-axis
    cursor.style.left=dets.x+"px";//movement of cursor from left side
    cursor.style.top=dets.y+"px";//movement of cursor from right side

    blur.style.left=dets.x- 250 +"px";//movement of cursor from left side
    blur.style.top=dets.y- 250+ "px";//movement of cursor from right side

});


gsap.to("#nav",{
    backgroundColor:"black",
    duration:"0.5",
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1        
    }
})  

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})