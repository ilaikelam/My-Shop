const cards = document.querySelector(".cards");
const filter = document.querySelector("#filter");
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => { 
            json.forEach(item => {
                const div = document.createElement("div");
                div.classList.add(`card`);
                const {category , image , title , price , id} = item;
                div.classList.add(category.substring(0,3));
                const cart = `
                        <span>${category}</span>
                        <h5>${title}</h5>
                        <img src='${image}'/>
                        <h4>${price} <span>$</span></h4>
                        <a href='./Details/detail${id}/detail.html'>more details...</a>
                        <button class="fav">
                            Add to my favorite...
                            <i class="fa fa-heart icon" aria-hidden="true"></i>
                        </button>
                `;
                div.innerHTML = cart;
                cards.appendChild(div);
            });
            const button = document.querySelectorAll("button");
            button.forEach(item => {
                item.addEventListener("click", function name() {
                    const x = item.firstElementChild
                    if (x.style.color === "white") {
                        x.style.color = "red";
                    }
                    else {
                        x.style.color = "white";
                    }
                })
            });
            filter.addEventListener("click" , Filter);
            const items = cards.childNodes;
            function Filter(event) {
                switch (event.target.value) {
                    case "All":
                        items.forEach(item => {
                            if (item.classList.contains("card")) {
                                item.style.display = "flex";
                            }
                        })
                        break;
                    case "men":
                        items.forEach(item => {
                            if (item.classList.contains("men")) {
                                item.style.display = "flex";
                                cards.style.height = "100vh";
                            }
                            else {
                                item.style.display = "none";
                            }
                        })
                        break;
                        case "women":
                            items.forEach(item => {
                                if (item.classList.contains("wom")) {
                                    item.style.display = "flex";
                                    cards.style.height = "1000px";
                                }
                                else {
                                    item.style.display = "none";
                                }
                            })
                            break;
                        case "electronics":
                            items.forEach(item => {
                                if (item.classList.contains("ele")) {
                                    item.style.display = "flex";
                                    cards.style.height = "1000px";
                                }
                                else {
                                    item.style.display = "none";
                                }
                            })
                            break;
                        case "jewelery":
                            items.forEach(item => {
                                if (item.classList.contains("jew")) {
                                    item.style.display = "flex";
                                    cards.style.height = "100vh";
                                }
                                else {
                                    item.style.display = "none";
                                }
                            })
                            break;
                        default:
                            break;
                }
            }
        }
    )