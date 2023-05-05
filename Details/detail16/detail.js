const Title = document.querySelector("#title");
const Category = document.querySelector("h4");
const Price = document.querySelector("h5");
const Description = document.querySelector("p");
const img = document.querySelector("img");
const increas = document.querySelector("#increas");
const decreas = document.querySelector("#decreas");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
console.log(count.innerText);
let a;
fetch('https://fakestoreapi.com/products/16')
        .then(res=>res.json())
        .then(json => {
            const {description , title , price , image , category} = json;
            a = price;
            Title.innerText = title;
            Category.innerText = category;
            img.src = image;
            Description.innerText = description;
            Price.innerText = `${price} $`;
        })

increas.addEventListener("click" , increase);
let i = +count.innerText;
function increase() {
    if (i > 0) {
        decreas.style.opacity = "1"
    }
    i++;
    count.innerText = i;
    total.innerText = +a*i
}

decreas.addEventListener("click" , decrease);
function decrease() {
    if (i <= 0) {
        decreas.style.opacity = "0.5"
    }
    else {
        i--
    }
    count.innerText = i;
    total.innerText = +a*i
}