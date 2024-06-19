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

    console.log('This function runs every 3 seconds');

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

prev.addEventListener("click", () => { slide(-1); clearInterval(myInterval); myInterval = setInterval(autoPlay, 4000) })
next.addEventListener("click", () => { slide(1); clearInterval(myInterval); myInterval = setInterval(autoPlay, 4000) })


function autoPlay() {
    slide(1); // Move to the next slide  
}
let myInterval = setInterval(autoPlay, 4000) // Change image every 4 seconds
autoPlay();

// second section
let scrollAmount = 0;
const scrollStep = 356; // Each image width is 356px
const maxScroll = 1380 - 1200; // (8 images * 300px) - container width

const content = document.getElementById('scrollContent');

function scrollLetf() {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    content.style.transform = `translateX(-${scrollAmount}px)`;
}

function scrollRight() {
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    content.style.transform = `translateX(-${scrollAmount}px)`;
}

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