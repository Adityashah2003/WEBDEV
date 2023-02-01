function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function nextseq(){
    const colours = ["red","blue","green","yellow"];
    const gamePattern = [];

    var chosencol = colours[getRandomInt(4)];
    console.log(chosencol);
    gamePattern.push(chosencol);

    $("#" + chosencol).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
  