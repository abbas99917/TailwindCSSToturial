




// preloader ==============================>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('DOMContentLoaded', () => {
    let percentageText = document.getElementById('percentage');
    let bar = document.getElementById('bar');
    let preloader = document.getElementById('preloader');
    
    let count = 0;
    
    // Har 20 milliseconds baad number barhega (Aap iska time change kar sakte hain)
    let loaderInterval = setInterval(() => {
        count++;
        
        // Text aur bar ki width update karna
        percentageText.innerText = count + "%";
        bar.style.width = count + "%";
        
        
        // Jab 100 tak pohanch jaye
        if (count >= 100) {
            clearInterval(loaderInterval);
            
            // Preloader ko fade-out (ghaib) karne ke liye
            preloader.style.opacity = '0';
            
            // 0.5 second baad preloader ko page se hata dena taake neeche scroll hoskay
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 20); // 20ms ka matlab hai takreeban 2 seconds mai 100 tak loading hogi
});



// mobile-menu==============================.>>

const mobile = document.getElementById("mobileMenu")
const menuBtn = document.querySelector("#menuBtn")

const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

menuBtn.addEventListener("click",()=>{
    mobile.classList.toggle("hidden")
    mobile.classList.toggle("flex")

    line1.classList.toggle("rotate-45")
    line1.classList.toggle("translate-y-[2px]")

    line2.classList.toggle("opacity-0")

    line3.classList.toggle("-rotate-45")
    line3.classList.toggle("-translate-y-[2px]")
})








