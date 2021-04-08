const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorElement = document.querySelector(".color");
btn.addEventListener("click", function(){
    const randomnumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    colorElement.textContent = colors[randomnumber];
});
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
