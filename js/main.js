// Task One:
//   - when mouseover in blog link add to class active

const li = document.getElementById("list-item");
const subMenu = document.querySelector(".submenu");

li.addEventListener("click", () => {
    subMenu.classList.toggle("active");
    // plus and mines
    plus.classList.toggle("active");
    mines.classList.toggle("active");
});


// Humburger Menu
const humburger = document.querySelector(".humburger");
const navbar = document.querySelector("nav");
const bars = document.querySelector(".bars");
const xmark = document.querySelector(".xmark");

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});


// Swiper Slider 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Button Scroll

        //===================== Btn Scroll الزر بتاع اللي بيطلع الصفحة لفوق ============================

let btn = document.getElementById("btn-scroll");

window.onscroll = function (){
    if(scrollY >= 500) {
        btn.style.display = 'block';
    }else 
    {
        btn.style.display = 'none';
    }
}
    btn.onclick = function() {
        scroll({
            top: 0,
        });
}


// Navgation sticky

window.addEventListener("scroll", function() {
    let header = document.getElementById("sticky");
    
    if (window.scrollY > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
