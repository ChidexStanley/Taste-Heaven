const contentItem1 = document.getElementById("content-item1");
const contentItem2 = document.getElementById("content-item2");

const ItemArray = [contentItem1, contentItem2];

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const indicatorL = document.getElementById("indicator1");
const indicatorR = document.getElementById("indicator2");

const indicators = [indicatorL, indicatorR];


let slideIndex = 1;

const slide = (n) => {

    slideIndex += n;
    if (slideIndex >= ItemArray.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = ItemArray.length - 1;
    }

    for (let index = 0; index < ItemArray.length; index++) {
        ItemArray[index].style.display = "none";
        indicators[index].classList.remove("active-slide");
        indicators[index].className = "indicator"
    }

    ItemArray[slideIndex].style.display = "block";
    indicators[slideIndex].className = "active-slide"
}

prev.addEventListener("click", () => { slide(-1); clearInterval(myInterval); myInterval = setInterval(autoPlay, 6000) })
next.addEventListener("click", () => { slide(1); clearInterval(myInterval); myInterval = setInterval(autoPlay, 6000) })


function autoPlay() {
    slide(1); // Move to the next slide  
}
let myInterval = setInterval(autoPlay, 6000) // Change image every 4 seconds
autoPlay();

//view more
var menu1 = document.getElementById("first_row");
var menu2 = document.getElementById("second_row");
var menu3 = document.getElementById("third_row");
var view_content = document.getElementById("view_content");
var view = document.getElementById("view");

menu2.style.display = "none"
menu3.style.display = "none"

function view_btn() {
    if (menu2.style.display !== "flex") {
        menu2.style.display = "flex";
        menu3.style.display = "flex";
        view_content.innerHTML = "View Less";
        console.log(1 + 1)
    } else {
        menu2.style.display = "none";
        menu3.style.display = "none";
        view_content.innerHTML = "View More";
        console.log(1 + 3)
    }

    console.log(1)
}

// cart management

function adder() {
    var counter = document.querySelector('.counter');
    counter.style.display = "block";
    var content = parseInt(counter.textContent);
    console.log(content)
    if (content >= 0) {
        counter.innerHTML = content + 1;
        if (content >= 5) {
            counter.innerHTML = 5;
            alert("you have reach your ordering limit")
        }
    }

}


//  phone responsiveness dropdown

var menubar = document.getElementById("menu");
var dropdown = document.querySelector(".dropdown");

// get all the css style in the element
var dropdowncss = window.getComputedStyle(dropdown);



// event listener for the event
menubar.addEventListener('click', displayDrop)
function displayDrop() {
    if (dropdowncss.display === "none") {
        dropdown.style.display = "flex";
        menubar.classList.remove("fa-bars"); // Remove the original icon class
        menubar.classList.add("fa-times"); // Add the new icon class
    } else {
        dropdown.style.display = "none";
        menubar.classList.remove("fa-times"); // add the original icon class
        menubar.classList.add("fa-bars"); // remove the new icon class
    }
}

// animation part 

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add the visible class when elements are in the viewport
function animateOnScroll() {
    const hiddenElements = document.querySelectorAll('.animate');
    hiddenElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animUp');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check in case elements are already in the viewport
animateOnScroll();

// links in the heading
var home_id = document.querySelector(".home");
var abt_id = document.querySelector(".abt");
var shop_id = document.querySelector(".shop");
var contact_id = document.querySelector(".contact");


function toggle(link) {
    const viewportWidth = window.innerWidth;

    var phead = document.querySelector(".phonehead");
    var main = document.querySelector("main");
    var main1 = document.querySelector(".first-section");
    var main2 = document.querySelector(".second-section");
    var main3 = document.querySelector(".third-section");
    var main4 = document.querySelector(".forth-section");
    var footer = document.querySelector("footer");

    if (link == 1) {
        if (viewportWidth >= 768) {
            phead.style.display = "none";
        }
        main.style.display = "block";
        main1.style.display = "none";
        main2.style.display = "block";
        main3.style.display = "flex";
        main4.style.display = "block";
        footer.style.display = "block";
        abt_id.classList.add("active");
        home_id.classList.remove("active");
        shop_id.classList.remove("active");
        contact_id.classList.remove("active");
    }
    if (link == 2) {
        if (viewportWidth >= 768) {
            phead.style.display = "none";
        }
        main.style.display = "block";
        main1.style.display = "none";
        main2.style.display = "none";
        main3.style.display = "flex";
        main4.style.display = "block";
        footer.style.display = "none";
        home_id.classList.remove("active");
        abt_id.classList.remove("active");
        shop_id.classList.add("active");
        contact_id.classList.remove("active");
    }
    if (link == 3) {
        main.style.display = "none";
        footer.style.display = "block";
        home_id.classList.remove("active");
        abt_id.classList.remove("active");
        shop_id.classList.remove("active");
        contact_id.classList.add("active");
    }
}

