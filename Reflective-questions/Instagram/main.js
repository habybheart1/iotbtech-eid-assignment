const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");

// Open menu
hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});


let rate = 5;
function taxRate(price){
    actualPrice = price * rate/100
    return actualPrice;
}
console.log(taxRate(20000));