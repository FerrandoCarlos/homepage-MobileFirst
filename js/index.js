const openMenuElement = document.querySelector("#open-menu");
const closeMenuElement = document.querySelector("#close-menu");
const navbarElement = document.querySelector("#navbar");

openMenuElement.addEventListener("click",() =>{
    navbarElement.classList.add("active");
});

closeMenuElement.addEventListener("click",() =>{    
    navbarElement.classList.add("closing");
    setTimeout(()=> {
        navbarElement.classList.remove("active","closing");
    },300);     
});