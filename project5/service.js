const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");
let i = 0;
let j = 4; 


function n(){
    document.getElementById("wrapper" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("wrapper" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}


// function p(){
//     document.getElementById("wrapper" + (i+1)).classList.remove("active");
//     i = (j + i -1) % j;
//     document.getElementById("wrapper" + (i+1)).classList.add("active");
//     indicator(i+1);
// }


// function indicator(num){
//     dots.forEach(function(dot){
//         dot.style.backgroundColor = "transparent";
//     });
//     document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
// }

// function dot(index){
//     images.forEach(function(image){
//         image.classList.remove("active");
//     });
//     document.getElementById("content" + index).classList.add("active");
//     i = index -1;
//     indicator(index);
// }