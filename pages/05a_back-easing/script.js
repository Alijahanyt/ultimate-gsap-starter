import gsap from "gsap";

const tabs = document.querySelectorAll('.tab')
const indicator = document.querySelector('.indicator')
const tabRow = document.querySelector('.tab-row')

const updateINDICATOR = (target) =>{
    const tabBounds = target.getBoundingClientRect()
    const rowBounds = tabRow.getBoundingClientRect()
    const width = tabBounds.width
    const offSet = tabBounds.left - rowBounds.left 

    gsap.to(indicator, {
        x: offSet,
        width: width,
        duration: 0.4,
        ease: 'back.out(1.7)'
    })
}

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((t)=>{
        t.classList.remove('active')
        tab.classList.add('active')
        updateINDICATOR(tab)
    })
  })  
})

updateINDICATOR(document.querySelector('.tab.active'))