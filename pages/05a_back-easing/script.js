import gsap from "gsap";

const tabs = document.querySelectorAll('.tab')
const indicator = document.querySelector('.indicator')
const tabRow = document.querySelector('.tab-row')

const updateINDICATOR = (target) =>{
    const tabBounds = target.getBoundingClientRect()
    const rowBounds = tabRow.getBoundingClientRect()
    
}