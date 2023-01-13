var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+ randomnumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImage1);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+ randomnumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImage2);

if(randomnumber1>randomnumber2){
    var heading = document.querySelector("h1");
    heading.innerHTML="Player 1 wins !";
}
else if(randomnumber1<randomnumber2){
    var heading = document.querySelector("h1");
    heading.innerHTML="Player 2 wins !";
}
else{
    var heading = document.querySelector("h1");
    heading.innerHTML="Draw";
}