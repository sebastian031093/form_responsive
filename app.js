//Select element for work
const singInBtn = document.querySelector("#sing-in-btn");
const singUpBtn = document.querySelector("#sing-up-btn");
const container = document.querySelector(".container");

singUpBtn.addEventListener('click', () => {
    container.classList.add("sing-up-mode");
})

singInBtn.addEventListener('click', () => {
    container.classList.remove("sing-up-mode");
})



