let type = document.querySelector(".type-2");
let typeLoad = ()=>{
    setTimeout(()=>{
        type.textContent = "Web Developer"
    },0);
    setTimeout(()=>{
        type.textContent = "Technophile"
    },4000);
    setTimeout(()=>{
        type.textContent = "Programmer"
    },8000);
    setTimeout(()=>{
        type.textContent = "Problem Solver"
    },12000);
    
}



typeLoad();
setInterval(typeLoad, 16000);
let back = document.querySelector('#back-top');
 function backToTop(){
    document.documentElement.scrollTop = 0;
 }



const toTop = document.querySelector(".back2tp");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 450){
        toTop.classList.add("active");
        console.log("active")
    }else{
        toTop.classList.remove("active");
    }
});

const nav1 = document.querySelector(".nav-1");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 450){
        nav1.classList.remove("ok");
    }else{
        nav1.classList.add("ok");
    }
});

const nav2 = document.querySelector(".nav-2");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 450 && window.scrollY < 1200){
        nav2.classList.add("ok");
        console.log("active")
    }else{
        nav2.classList.remove("ok");
    }
});

const nav3 = document.querySelector(".nav-3");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 1200 && window.scrollY < 2000){
        nav3.classList.add("ok");
        console.log("active")
    }else{
        nav3.classList.remove("ok");
    }
});

const nav4 = document.querySelector(".nav-4");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 2000 && window.scrollY <2700){
        nav4.classList.add("ok");
        console.log("active")
    }else{
        nav4.classList.remove("ok");
    }
});

const nav5 = document.querySelector(".nav-5");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 2700 && window.scrollY <3300){
        nav5.classList.add("ok");
        console.log("active")
    }else{
        nav5.classList.remove("ok");
    }
});

const nav6 = document.querySelector(".nav-6");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 3300 && window.scrollY < 3900){
        nav6.classList.add("ok");
        console.log("active")
    }else{
        nav6.classList.remove("ok");
    }
});