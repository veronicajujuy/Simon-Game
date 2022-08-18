let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []

$("div.btn").click(function(e) {
    buttonClicked = $(e.target).attr("id")
    gamePattern.push(buttonClicked)
    playSound(buttonClicked)
})




function nextSequence() {
    randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("div."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")      
    audio.play()
}


