let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userChoice = []
let level = 0
let started = false


$(document).keypress(function(){
    if (!started) {
    nextSequence()
    $("h1").text("Level "+ level)
    started = true}
})





$("div.btn").click(function(e) {
      buttonClicked = $(e.target).attr("id")
      userChoice.push(buttonClicked)
      playSound(buttonClicked)
      animatePress(buttonClicked)
      checkAnswer(userChoice.length-1)

})

       






function nextSequence() {
    userChoice = []
    randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("div."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    level ++;
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")      
    audio.play()
}

function animatePress(currentColor){
    $("div."+currentColor).addClass("pressed")
    setTimeout(function(){
        $("div."+currentColor).removeClass("pressed")
    },100)
   
}

function checkAnswer(currentLevel){
    
    if (gamePattern[currentLevel] === userChoice[currentLevel]){
        $("h1").text("Level "+ level)
        if (userChoice.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        playSound("wrong")
        $("body").addClass("game-over")
        $("h1").text("Game-Over")
        setTimeout(function(){
            $("body").removeClass("game-over")
            startOver()
        },1000)
        
    }
    
}

function startOver() {
    $("h1").text("Press A Key to Start")
    let gamePattern = []
    let level = 0
    let started = false
    console.log(started)
}