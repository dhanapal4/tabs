const tabElements=document.querySelectorAll("[data-tab-target]")
const tabContentElements=document.querySelectorAll("[data-tab-content]")

tabElements.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const selectedTab=document.querySelector(tab.dataset.tabTarget);
        tab.classList.
        tabContentElements.forEach(tabContent=>{
            tabContent.classList.remove('active')
        })
        selectedTab.classList.add('active');
    })
})

console.log(tabElements)