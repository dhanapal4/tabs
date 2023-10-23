const tabs=document.querySelectorAll(".tabs-li")
console.log(tabs)

const tab1Content=document.querySelector(".tab1")
const tab2Content=document.querySelector(".tab2")

tabs[0].addEventListener("click",()=>{
    tabs[0].setAttribute("data-selected",true)
    tabs[1].setAttribute("data-selected",false)
    tab2Content.classList.add("disabled")
    tab1Content.classList.remove("disabled")

})


tabs[1].addEventListener("click",()=>{
    tabs[1].setAttribute("data-selected",true)
    tabs[0].setAttribute("data-selected",false)
    tab1Content.classList.add("disabled")
    tab2Content.classList.remove("disabled")

    
})