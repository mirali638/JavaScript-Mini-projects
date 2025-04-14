let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let p = document.getElementById("color");
    let randomC = getRandomColour();
    p.innerText=randomC;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomC;
});

function getRandomColour(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
