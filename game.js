let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userChoice = []
let level = 0
let start = false


$("body").keypress(function(e){
    if (!start) {
    nextSequence()
    $("h1").text("Level "+ level)
    start = true}
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
     console.log(currentLevel)
    if (gamePattern[currentLevel] === userChoice[currentLevel]){
        console.log("success",userChoice[currentLevel],gamePattern[currentLevel])
        $("h1").text("Level "+ level)
        if (userChoice.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        console.log("wrong",userChoice[currentLevel],gamePattern[currentLevel])
        playSound("wrong")
    }
    
}