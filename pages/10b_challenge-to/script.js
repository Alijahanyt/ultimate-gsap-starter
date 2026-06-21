import gsap from "gsap";

const toasts = document.querySelectorAll('.toast')


const showToastLoop = () => {
    toasts.forEach((toast, i) => {


        gsap.to(toast, {
            y: -120,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power4.out',
            delay: i * 1,
            onComplete: () => {
                gsap.to(toast, {
                    delay: 2.5,
                    y: 0,
                    scale: 0.95,
                    ease: 'power2.in',
                    duration: 0.7,
                    onComplete: () => {
                        setTimeout(() => {
                            showToastLoop()
                        }, 1000);
                    }
                })
            }
        })

    })
} 
showToastLoop()