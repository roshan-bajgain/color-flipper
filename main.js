const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorElement = document.querySelector(".color");
btn.addEventListener("click", function(){
    const randomnumber = getrandomnumber();
    const red = getrandomnumber();
    const green = getrandomnumber();
    const blue = getrandomnumber();

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorElement.textContent = `rgb(${red}, ${green}, ${blue})`;

});

function getrandomnumber(){
    return Math.floor(Math.random()*255);
}

hhlujili