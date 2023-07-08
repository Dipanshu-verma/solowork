var typed = new Typed(".text",{
   strings:["Full Stack Web Developer", "Problem Solver","Continous learner"],  
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true,
})

 document.querySelector(".fa-bars").addEventListener("click",()=>{
   document.querySelector(".navbar").classList.add("navleft");
   document.querySelector(".fa-bars").classList.add("dotlose")
    document.querySelector(".fa-xmark").classList.add("crosshow")
 })

 document.querySelector(".fa-xmark").addEventListener("click", ()=>{
   document.querySelector(".navbar").classList.remove("navleft");
   document.querySelector(".fa-xmark").classList.remove("crosshow")
   document.querySelector(".fa-bars").classList.remove("dotlose")
 })


document.querySelector(".navbar").addEventListener("click", ()=>{
  document.querySelector(".navbar").classList.remove("navleft");
  document.querySelector(".fa-xmark").classList.remove("crosshow")
  document.querySelector(".fa-bars").classList.remove("dotlose")
})