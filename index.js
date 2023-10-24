const tabElements=document.querySelectorAll("[data-tab-target]")
const tabContentElements=document.querySelectorAll("[data-tab-content]")

document.querySelector(tabElements[0].dataset.tabTarget).classList.add("active")

tabElements.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const selectedTab=document.querySelector(tab.dataset.tabTarget);
        tabContentElements.forEach(tabContent=>{
            tabContent.classList.remove('active')
        })
        tabElements.forEach(tab=>{
            tab.classList.remove('selectedTab')
        })
        tab.classList.add('selectedTab')
        selectedTab.classList.add('active');
    })
})
