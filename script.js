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