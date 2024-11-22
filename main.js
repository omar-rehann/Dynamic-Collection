let navEl = document.querySelector(".menu");
let links = document.querySelector(".menu a");
let menuEl = document.querySelector(".toogle")
let photoEl = document.querySelector(".click")
let spanel = document.querySelector(".up");
menuEl.onclick = function() {
        navEl.classList.toggle("active")
    }
    //photo

function chose(ele) {
    photoEl.src = ele;
}
//---------------------------------------------------

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        loop.forEach((num) => countnumber(num))
    }
}


function countnumber(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count)
        }

    }, 10)
}

window.onscroll = function() {
    // console.log(this.scrollY)
    if (window.scrollY >= 800) {
        spanel.classList.add("active")

    } else {
        spanel.classList.remove("active")


    }
}
spanel.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
links.onclick = function() {
    links.classList.add("active")
}